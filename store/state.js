const state = {
  selectedTab: 0,
  selectedChat: {},
  auth: {
    signin: {
      name: '',
      email: '',
    },
    signup: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  },
  chats: [
    {
      id: 1,
      name: "Bruno Saade"
    },
    {
      id: 2,
      name: "Rafael Saade"
    },
    {
      id: 3,
      name: "José Matta"
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Bruno Saade"
    },
    {
      id: 2,
      name: "Rafael Saade"
    },
    {
      id: 3,
      name: "José Matta"
    },
    {
      id: 4,
      name: "Maria"
    },
  ],
}
export default state