import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <motion.div 
            className="border-b border-neutral-900 pb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Projects
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-10">
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="max-w-md rounded-lg overflow-hidden shadow-lg bg-neutral-800 p-6 transform hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h6 className="mb-2 text-lg font-semibold text-white">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="rounded bg-purple-900 px-3 py-1 text-sm font-medium text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
