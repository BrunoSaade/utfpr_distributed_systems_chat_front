<template lang="pug">
.contact-list
  .contact-list--header
    p.text-white.place-self-start.mb-0.text-s6 Friends
    VButton(
      v-if="!mustShowAddFriendSection"
      @click="mustShowAddFriendSection = true"
      type="submit" 
      variant="success" 
      size="small"
      class="!w-[70px]"
    ) Add
  .contact-list--add-contact(v-if="mustShowAddFriendSection")
    VForm#add.w-full(
      @submit="handleAddFriend" 
      name="addFriend",
    )
      template
        fieldset.home--inputs
          label.text-white.mb-1 Add friend
          VTextInput#friendEmail(
            variant='primary'
            v-model='friendEmail' 
            placeholder="Type friend's email"
            rules="required|email"
          )
          .l-inline-center-center-nowrap.gap-2.my-4
            VButton(
              @click="() => {mustShowAddFriendSection = false, resetInputFriendEmail()}"
              size="small"
              type="button"
              variant="outline_tertiary"
            ) Cancel
            VButton(
              size="small"
              type="submit" 
              variant="tertiary"
            ) Add
          hr
  ContactCard(
    v-ripple
    v-for="(chat, index) in contacts" 
    :key="index" 
    :chat="chat"
    @click.native="handleOpenChat(chat)"
  )
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
export default {
  name: "ContactList",
  props: {},
  data() {
    return {
      friendEmail: '',
      mustShowAddFriendSection: false,
    }
  },
  mounted() {},
  created() {},
  computed: {
    ...mapState({
      contacts: (state) => state.contacts
    }),
  },
  methods: {
    ...mapMutations({
      setChat: mutation_types.SET_CHAT,
    }),
    handleOpenChat(chat) {
      this.setChat(chat)
    },
    handleAddFriend() {
      console.log("Add friend")
    },
    resetInputFriendEmail() {
      this.friendEmail = ''
    }
  },
}
</script>

<style lang="postcss">
.contact-list {
  @apply l-stack-center-center w-full gap-3;
}
.contact-list--header {
  @apply l-inline-between-center w-full gap-3;
}
.contact-list--add-contact {
  @apply l-inline-start-center-nowrap w-full;
}
</style>
