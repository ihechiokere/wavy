import React, { useState } from "react";
import Hamburger from "./Hamburger";
import NavBar from "./NavBar";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App header" style={{display: 'flex', alignItems: 'center'}} onClick={() => setModalOpen(!modalOpen)}>
      <div className='stop-gap-icon'></div>
      <Hamburger />
      {modalOpen ? <NavBar /> : ""}
    </div>
  );
};

export default Header;
