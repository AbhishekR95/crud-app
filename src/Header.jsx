import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/read"}>
          <button>Show Data</button>
        </Link>
        <Link to={"/crud-app"}>
          <button>Create User</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
