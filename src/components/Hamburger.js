import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";

const Hamburger = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <CgMenuLeft
        className="menu-icon"
        onClick={() => setModalOpen(!modalOpen)}
      />
    </div>
  );
};

export default Hamburger;