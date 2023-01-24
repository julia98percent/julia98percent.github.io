import React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const index = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Peach Jam</h1>
      <Link to="/writing">Writing</Link>
      <Link to="/about">About</Link>
      {/* TODO 다크 모드 토글 버튼*/}
      {/* TODO 검색 버튼 */}
    </main>
  );
};

export default index;
