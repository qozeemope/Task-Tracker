import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p> Copyright &copy; 2023</p>
      <Link href="/about">About</Link>
    </footer>
  );
}

export default Footer;
