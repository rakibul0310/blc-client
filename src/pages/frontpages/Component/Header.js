import React from "react";

const Header = () => {
  return (
    <>
      {/* nav bar */}
      <nav>
        {/* logo or branding */}
        <div>
          <h3>Logo Here</h3>
        </div>
        {/* nav menus */}
        <div>
          {/* toggle btn */}
          <div>
            <button>Toggle button here</button>
          </div>
          {/* nav links */}
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
