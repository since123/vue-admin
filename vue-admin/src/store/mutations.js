export default {
  login(state, v) {
    state.userInfo = v
  },
  setAuthority(state, v) {
    state.userAuthority = v.userAuthority
  }
}
