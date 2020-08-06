const userToken = localStorage['user-token'] ?
  `Bearer ${localStorage['user-token']}` :
  '';

export default userToken;
