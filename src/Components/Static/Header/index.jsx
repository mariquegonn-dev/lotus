import React from "react";
import styles from "./styles.module.css";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "../../../Hooks/useMedia";
import OutsideClickHandler from "react-outside-click-handler";

const index = () => {
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [change, setChange] = React.useState(false);
  const root = document.documentElement;

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {
    if (change) {
      root.classList.add("active");
    } else {
      root.classList.remove("active");
    }
  }, [change]);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" end>
          <h1 className={styles.logo}>Lotus</h1>
        </NavLink>
        {mobile && (
          <OutsideClickHandler onOutsideClick={() => setMobileMenu(false)}>
            <button
              className={`${styles.mobileButton} ${
                mobileMenu && styles.active
              }`}
              aria-label="Menu"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenu(!mobileMenu);
              }}
            ></button>
          </OutsideClickHandler>
        )}
        <ul
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <li>
            <NavLink to="caloriasDiarias">Calorias diárias</NavLink>
          </li>
          <li>
            <NavLink to="macronutrientes">Macronutrientes</NavLink>
          </li>
          <li>
            <p onClick={() => setChange(!change)} className={styles.change}>
              Change
            </p>
          </li>
        </ul>
      </header>
    </>
  );
};

export default index;
