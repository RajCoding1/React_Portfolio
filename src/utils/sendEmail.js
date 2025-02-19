import emailjs from "emailjs-com";

export const sendEmail = async (senderEmail, message) => {
    try {
        const response = await emailjs.send(
            "service_skpodh8", // Replace with your Email.js service ID
            "template_vwz4kmr", // Replace with your Email.js template ID
            {
                user_email: senderEmail,
                message: message,
            },
            "1JHOT8PU-b2dR4QDbY" // Replace with your Email.js public key
        );

        console.log("Email sent successfully:", response);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }
};
