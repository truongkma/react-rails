export const UserAction = {
  setCurrentUser(store, currentUser) {
    store.dispatch({type: 'SET_CURRENT_USER', currentUser: currentUser});
  }
}
