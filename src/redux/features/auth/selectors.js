export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;

// export const selectAuth = state => {
//   const isLoggedIn = selectIsLoggedIn(state);
//   const isRefreshing = selectIsRefreshing(state);
//   const user = selectUser(state);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };
