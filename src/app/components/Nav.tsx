import Link from "next/link";
import "./nav.css";
import BackFunction from "./BackFunction";
function Nav() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0">E-Commerce</h1>
        <nav>
          <Link href="/" className="text-white mx-3">
            Home
          </Link>
          <Link href="/products" className="text-white mx-3">
            Products
          </Link>
          <Link href="/about-us" className="text-white mx-3">
            About
          </Link>
          <Link href="/contact-us" className="text-white mx-3">
            Contact
          </Link>
        </nav>
        <BackFunction/>
      </div>
    </header>
  );
}

export default Nav;
