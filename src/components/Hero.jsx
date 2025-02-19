import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/SubhadeepProfile.png";

const Hero = () => {
    return (
        <motion.div 
            className="border-b border-neutral-900 pb-4 lg:mb-35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-wrap">
                <motion.div 
                    className="w-full lg:w-1/2"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Subhadeep
                        </motion.h1>
                        <motion.span 
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div 
                    className="w-full lg:w-1/2 lg:p-8 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={profilePic}
                        alt="Subhadeep"
                        className="w-3/4 lg:w-full max-w-xs lg:max-w-md rounded-4xl border-4 border-neutral-900 shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;