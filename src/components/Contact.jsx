import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaCommentDots, FaDownload } from "react-icons/fa";

const chatMessages = [
    { question: "What services do you offer?", answer: "I specialize in full-stack development, including frontend and backend technologies." },
    { question: "How can I contact you?", answer: `You can email me at ${CONTACT.email} or call me at ${CONTACT.phoneNo}.` },
    { question: "Do you take freelance projects?", answer: "Yes, I am open to freelance opportunities. Feel free to reach out!" },
    { question: "Can I download your resume?", answer: 
        <a href="https://docs.google.com/document/d/1UvGuhklMd7CLIj9t0HO67wAwdCCe6dIR/edit?usp=drive_link&ouid=111765830522398538989&rtpof=true&sd=true" 
           target="_blank" rel="noopener noreferrer" 
           className="text-white flex items-center gap-2 bg-purple-600 p-2 rounded">
            <FaDownload /> Download Resume
        </a> 
    }
];

const Contact = () => {
    const [senderEmail, setSenderEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const [chatOpen, setChatOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", senderEmail);
        formData.append("message", message);

        const response = await fetch("https://formsubmit.co/bhattacharjeesubhadeep0@gmail.com", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setStatus({ success: true, message: "Email sent successfully!" });
            setSenderEmail("");
            setMessage("");
        } else {
            setStatus({ success: false, message: "Failed to send email" });
        }
    };

    return (
        <motion.div className="border-t border-neutral-800 pt-10 mt-20 text-center text-gray-400 relative">
            <h2 className="text-2xl mb-6">Get in Touch</h2>
            <div className="flex flex-col items-center mb-6">
                <form onSubmit={handleSubmit} className="bg-neutral-900 p-6 rounded-lg w-full max-w-md shadow-lg border border-purple-500">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 mb-4 border border-purple-500 rounded text-white bg-transparent" 
                        value={senderEmail} 
                        onChange={(e) => setSenderEmail(e.target.value)} 
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className="w-full p-3 mb-4 border border-purple-500 rounded text-white bg-transparent" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                    />
                    <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded">
                        Send Message
                    </button>
                </form>

                {status && (
                    <p className={`mt-4 ${status.success ? "text-green-500" : "text-red-500"}`}>
                        {status.message}
                    </p>
                )}
            </div>
            <div className="mt-10 text-sm">
                <p className="text-lg">{CONTACT.address}</p>
                <p className="my-2 text-md flex items-center justify-center gap-2">
                    <FaPhone />
                    <a href={`tel:${CONTACT.phoneNo}`} className="hover:underline">{CONTACT.phoneNo}</a>
                </p>
                <p className="my-2 text-md flex items-center justify-center gap-2">
                    <FaEnvelope />
                    <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
                </p>
            </div>
            <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} All Rights Reserved.</p>

            {/* Floating Chat Button */}
            <motion.div 
                className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatOpen(!chatOpen)}
            >
                <FaCommentDots size={24} />
            </motion.div>

            {/* Chat Box */}
            {chatOpen && (
                <motion.div 
                    className="fixed bottom-16 right-6 w-80 bg-neutral-900 p-4 rounded-lg shadow-lg border border-purple-500 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                >
                    <h3 className="text-lg mb-2">Let&apos;s Connect</h3>
                    {chatMessages.map((msg, index) => (
                        <div key={index} className="mb-3">
                            <button 
                                className="text-purple-400 underline" 
                                onClick={() => setSelectedAnswer(msg.answer)}
                            >
                                {msg.question}
                            </button>
                        </div>
                    ))}
                    {selectedAnswer && (
                        <div className="mt-4 p-2 bg-purple-700 text-white rounded">
                            {selectedAnswer}
                        </div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Contact;
