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
export default {
  name: "MessageList",
  props: {},
  data() {
    return {
      friendEmail: '',
    }
  },
  mounted() {},
  created() {},
  computed: {
    ...mapState({
      chats: (state) => state.chats,
      userEmailAdd: (state) => state.userEmailToFind,
      accountEmail: (state) => state.account.email,
      temporaryChats: (state) => state.temporaryChats,
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
    }
  },
  methods: {
    ...mapMutations({
      setSelectedChat: mutation_types.SET_SELECTED_CHAT,
      mustShowChatMobile: mutation_types.SET_MUST_SHOW_CHAT_MOBILE,
      setUserEmailToFind: mutation_types.SET_USER_EMAIL_TO_FIND,
    }),
    ...mapActions({
      getFindContact: action_types.GET_FIND_CONTACT,
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
          } catch (error) {
            this.$notifyError({
              title: 'Error',
              text: error.response.data.message,
            })
          }
        }
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
