<template lang="pug">
.message-list
  VNotify
  VForm#add.w-full(
    @submit="handleAddNewChat" 
    name="addFriend",
  )
    template
      fieldset.w-full
        label.text-white.mb-1 Start new chat
        .l-inline-start-start-nowrap.gap-2.w-full
          VTextInput#friendEmail(
            variant='primary'
            v-model='userEmailToFind' 
            placeholder="Type friend's email"
            rules="required|email"
            ref="addFriendInput"
          )
          VButton(
            size="small"
            type="submit" 
            variant="tertiary"
            class="!w-[90px]"
          ) Add  
      MessageCard.mt-5(
        v-if="temporaryChats"
        v-ripple
        v-for="temporaryChat in temporaryChats" 
        :key="temporaryChat.id" 
        :chat="temporaryChat"
        @click.native="handleOpenChat(temporaryChat)"
      )
    hr.mt-4
  MessageCard(
    v-ripple
    v-for="chat in chats" 
    :key="chat.id" 
    :chat="chat"
    @click.native="handleOpenChat(chat)"
  )
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
import socket from '../../services/socket';
export default {
  name: "MessageList",
  props: {},
  data() {
    return {}
  },
  mounted() {},
  created() {
    socket.on('receiveNewMessage', this.handleReceiveNewMessage)
    socket.on('receiveNewChat', this.handleReceiveNewChat)
  },
  beforeDestroy() {
    socket.off('receiveNewMessage', this.handleReceiveNewMessage)
    socket.off('receiveNewChat', this.handleReceiveNewChat)
  },
  computed: {
    ...mapState({
      chats: (state) => state.chats,
      userEmailAdd: (state) => state.userEmailToFind,
      accountEmail: (state) => state.account.email,
      temporaryChats: (state) => state.temporaryChats,
      selectedChat: (state) => state.selectedChat,
      messages: (state) => state.messages,
    }),
    ...mapGetters({
      getSelectedChat: getter_types.GET_SELECTED_CHAT,
    }),
    userEmailToFind: {
      get() {
        return this.userEmailAdd
      },
      set(value) {
        this.setUserEmailToFind(value)
      },
    },
  },
  methods: {
    ...mapMutations({
      setSelectedChat: mutation_types.SET_SELECTED_CHAT,
      mustShowChatMobile: mutation_types.SET_MUST_SHOW_CHAT_MOBILE,
      setUserEmailToFind: mutation_types.SET_USER_EMAIL_TO_FIND,
      setMessages: mutation_types.SET_MESSAGES,
      setTemporaryChats: mutation_types.SET_TEMPORARY_CHATS,
      setNewChat: mutation_types.SET_NEW_CHAT
    }),
    ...mapActions({
      getFindContact: action_types.GET_FIND_CONTACT,
      getFindAllChats: action_types.GET_FIND_ALL_CHATS,
    }),
    handleOpenChat(chat) {
      this.setSelectedChat(chat)
      this.mustShowChatMobile(true)
    },
    async handleAddNewChat() {
      if(this.accountEmail === this.userEmailAdd) {
        this.$notifyWarn({
          title: 'Your email',
          text: 'Enter an email that is not yours',
        })
      } else {
        const recipientMatch = this.chats.some((chat) => {
          return chat.recipient.email === this.userEmailAdd;
        });
        const temporaryRecipientMatch = this.temporaryChats.some((temporaryChat) => {
          return temporaryChat.recipient.email === this.userEmailAdd;
        })
        if (recipientMatch || temporaryRecipientMatch) {
          this.$notifyWarn({
            title: 'Chat already exists',
            text: 'The chat with this person already exists!',
          })
        } else {
          try {
            await this.getFindContact()
            this.$notifySuccess({
              title: 'Success',
              text: 'User found :)',
            })
            this.setUserEmailToFind('')
            this.$refs.addFriendInput.resetValidation()
          } catch (error) {
            this.$notifyError({
              title: 'Error',
              text: error.response.data.message,
            })
          }
        }
      }
    },
    handleReceiveNewMessage(response) {
      const chatId = response.chatId;
      const existingMessages = [...(this.messages[chatId] || [])];
      existingMessages.push(response);
      this.setMessages({ chatId: chatId, messages: existingMessages });
    },
    async handleReceiveNewChat(response) {
      const updatedTemporaryChats = this.temporaryChats.filter(temporaryChat =>
        temporaryChat.recipient.email !== response.recipient.email
      )
      this.setTemporaryChats(updatedTemporaryChats)
      this.setNewChat(response)
      if (response.recipient.email !== this.accountEmail) {
        this.setSelectedChat(response)
      }
    }
  },
}
</script>

<style lang="postcss">
.message-list {
  @apply l-stack-center-center w-full gap-3;
}
</style>
