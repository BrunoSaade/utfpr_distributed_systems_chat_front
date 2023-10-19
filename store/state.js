const state = {
  selectedTab: 0,
  selectedChat: -1,
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
  }
}
export default state