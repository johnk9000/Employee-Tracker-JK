import React from "react";

const UserContext = React.createContext({
  name: "",
  role: "",
  image: "",
  handleBtnClick: () => {}
});

export default UserContext;
