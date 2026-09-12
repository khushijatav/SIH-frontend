import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/70 bg-white/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-11">

          <Link
            to="/"
            className="group relative py-2 text-[17px] font-medium text-[#1c3154]"
          >
            Home

            <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-500" />
          </Link>

          <Link
            to="/about"
            className="py-2 text-[17px] font-medium text-[#1c3154] transition-colors hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/features"
            className="py-2 text-[17px] font-medium text-[#1c3154] transition-colors hover:text-blue-600"
          >
            Features
          </Link>

          <Link
            to="/contact"
            className="py-2 text-[17px] font-medium text-[#1c3154] transition-colors hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-9 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Login
          </Link>
        </div>

        {/* Mobile Login */}
        <Link
          to="/login"
          className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md md:hidden"
        >
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;