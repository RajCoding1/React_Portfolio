import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav 
            className="mb-6 flex items-center justify-between py-4 px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="flex flex-shrink-0 items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <img src={logo} alt="Logo" className="w-20 h-auto" />
            </motion.div>
            <motion.div 
                className="m-2 flex items-center justify-center gap-4 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-blue-500 transition-all duration-300">
                    <FaLinkedin />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-gray-400 transition-all duration-300">
                    <FaGithub />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-sky-400 transition-all duration-300">
                    <FaSquareXTwitter />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-pink-400 transition-all duration-300">
                    <FaInstagram />
                </motion.a>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
