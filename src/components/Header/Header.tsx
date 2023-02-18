import React from "react";
import * as styles from "./Header.module.scss";
import { Link } from "gatsby";
import { menuList } from "../../constants/IndexPage";

const Header = () => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.left}>
        <h1>Peach Jam</h1>
      </div>
      <div className={styles.right}>
        {menuList.map(({ name, uri }) => (
          <Link to={uri}>{name}</Link>
        ))}
        <button onClick={() => alert("dark mode toggle")}>☀️</button>
      </div>
    </div>
  );
};
export default Header;
