// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <a
            className="navbar-brand"
            onClick={() => navigate("/employees")}
            style={{ marginLeft: "20px", cursor: "pointer"}}
          >
            Employee Management Application
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;