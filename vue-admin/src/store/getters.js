export default {
  authorityInfo(state) {
    switch (state.userAuthority) {
      case 'admin':
        return 'admin'
      case 'editor':
        return 'editor'
      case 'visitor':
        return 'visitor'
      default:
        return 'admin'
    }
  }
}
