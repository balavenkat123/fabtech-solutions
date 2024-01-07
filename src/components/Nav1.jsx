import { hamburger } from "../assets/icons";
import { headerLogo, fabtechlogo, Fablogo } from "../assets/images";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, BrowserRouter } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      class="flex items-center justify-between p-4 lg:px-8 bg-white "
      aria-label="Global"
    >
      <motion.div
        whileHover={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="Logo cursor-pointer"
      >
        <NavLink to="/">
          <img
            className="object-scale-down h-10 w-10 rounded-lgs"
            src={Fablogo}
            alt="logo"
          />
        </NavLink>
      </motion.div>

      <div>
        <ul className="flex flex-warp justify-between items-center gap-14">
          {/* <motion.li
            whileHover={{ scale: 0.9 }}
            className="cursor-pointer rounded-lg"
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </motion.li> */}
          <motion.li
            whileHover={{ scale: 0.9 }}
            className="cursor-pointer text-red-700"
          >
            <NavLink to="/institute">Institute</NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 0.9 }}
            className="cursor-pointer text-red-700"
          >
            <NavLink to="/services">Mobile services</NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 0.9 }}
            className="cursor-pointer text-red-700"
          >
            <Link to="contact-us" smooth={true} duration={500}>
              Contact us
            </Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );

  // return (
  //   <header className="padding-x py-8 z-10 w-full absolute bg-sky-200 ">
  //     <nav className="flex justify-between items-center max-container h-2 ">
  //       <a href="/">
  //         <img
  //           className="object-scale-down h-10 w-10 rounded-lg"
  //           src={fabtechlogo}
  //           alt="logo"
  //         />
  //       </a>
  //       <ul className="flex1 flex justify-center items-center gap-16 max-lg:hidden">
  //         {navLinks.map((items) => (
  //           <li key={items.label}>
  //             <a
  //               href={items.href}
  //               className="font-sans text-lg text-blue-900 hover:text-blue-400"
  //             >
  //               {items.label}
  //             </a>
  //           </li>
  //         ))}
  //       </ul>
  //       <div className="hidden max-lg:block cursor-pointer">
  //         <img src={hamburger} alt="hamberger" width={25} height={25} />
  //       </div>
  //     </nav>
  //   </header>
  // );
};

export default Nav;
