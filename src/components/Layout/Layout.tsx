import React from "react";
import Header from "../Header";
import * as styles from "./Layout.module.scss";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
