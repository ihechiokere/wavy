import React from "react";
import { FaCloudDownloadAlt, FaListUl } from "react-icons/fa";
import moment from "moment";

const Downloads = () => {
  return (
    <div className="App">
      <div className='mt200' style={{ display: "flex"}}>
        <FaCloudDownloadAlt className='mr100' style={{ display: "inline", fontSize: 30 }} />
        <p className='fs30' style={{ display: "inline" }}>Downloading Compiled Contacts</p>
      </div>
      <div className="download-box">
        The download will be made available at around 9:00pm this evening (
        {moment().format("MMM Do YY")}). Kindly exercise patience as all the
        contacts are being compiled for you to download
      </div>
      <div className='mt200' style={{ display: "flex" }}>
        <FaListUl className="mr100" style={{ display: "inline", fontSize: 25 }} />
        <p className='fs30' style={{ display: "inline" }}>Download List</p>
      </div>
      <p>
        Here is a list of previously compiled vCards files for you to download
        if you want.
      </p>
      <div className="stop-gap mt200"></div>
    </div>
  );
};

export default Downloads;
