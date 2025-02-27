import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav 
            className="mb-6 flex items-center justify-between py-4 px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Logo */}
            <motion.div 
                className="flex flex-shrink-0 items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <img src={logo} alt="Logo" className="w-20 h-auto" />
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
                className="m-2 flex items-center justify-center gap-4 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.a 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }} 
                    href="https://www.linkedin.com/in/subhadeep-bhattacharjee-844908214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-all duration-300"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }} 
                    href="https://github.com/RajCoding1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-all duration-300"
                >
                    <FaGithub />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }} 
                    href="https://www.facebook.com/irohitmanna" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-all duration-300"
                >
                    <FaFacebook />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }} 
                    href="https://www.instagram.com/_.subhadeep.b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-all duration-300"
                >
                    <FaInstagram />
                </motion.a>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
