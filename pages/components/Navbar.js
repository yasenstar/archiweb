import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link navbar-brand" href="/">
            <Image src="/favicon.ico" alt="logo" width="32" height="32"></Image>&nbsp;Home</Link>
        </li>
        {/*<li className="nav-item">*/}
        {/*  <Link className="nav-link navbar-brand" href="">Link</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
