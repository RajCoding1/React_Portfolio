import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  const techIcons = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: TbBrandNextjs, color: "text-white" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: DiRedis, color: "text-red-700" },
    { Icon: FaNodeJs, color: "text-green-500" },
    { Icon: BiLogoPostgresql, color: "text-blue-500" }
  ];

  return (
    <motion.div 
      className="border-b border-neutral-800 pb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map(({ Icon, color }, index) => (
          <motion.div 
            key={index} 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            animate={{ y: index % 2 === 0 ? [0, -10, 0] : [-10, 0, -10] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
