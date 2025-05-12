import React, { useState } from "react";
import styles from "./NavbarStyles.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav id="Navbar" className={styles.navbar}>
      <div className={styles.menu} onClick={() => setMenu(!menu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menu ? styles.open : ""}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#Project">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#AddBlogs">Add Blogs</a>
        </li>
        
        {isAuthenticated ? (
          <li>
            <button className={styles.btn}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button className={styles.btn} 
             onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
      </ul>
      {/* reverse flow */}
    </nav>
  );
}

export default Navbar;
