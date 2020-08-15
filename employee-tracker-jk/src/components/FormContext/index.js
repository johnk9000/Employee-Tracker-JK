import React from "react";

const UserContext = React.createContext({
  name: "",
  role: "",
  image: "",
  handleInputChange: () => {}
});

export default UserContext;
