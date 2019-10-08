export default {
  editAuthority({ commit }, e) {
    return new Promise((resolve, reject) => {
      // mock api
      setTimeout(() => {
        commit('setAuthority', {
          userAuthority: e
        })
        resolve('切换成功')
      }, 500)
    })
  }
}
