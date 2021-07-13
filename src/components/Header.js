import React from "react";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>
        <InsertDriveFileIcon fontSize="large" />
        Keep-Clone
      </h1>
    </header>
  );
}

export default Header;
