import React from "react";

const UserContext = React.createContext({
  auth: null, 
  admin: 0,
  addUser: (user) => {},
  removeUser: () => {},
});

export default UserContext;
