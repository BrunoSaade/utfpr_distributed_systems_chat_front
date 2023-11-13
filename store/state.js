const state = {
  selectedTab: 0,
  selectedChat: {},
  mustShowChatMobile: false,
  auth: {
    signin: {
      email: '',
      password: '',
    },
    signup: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  },
  account: {
    id: '',
    name: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  },
  chats: [],
  messages: [],
  contacts: [],
  userEmailToFind: '',
}
export default state