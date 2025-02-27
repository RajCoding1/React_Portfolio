import emailjs from "@emailjs/browser";

export const sendEmail = async (senderEmail, message) => {
    try {
        const response = await emailjs.send(
            "service_skpodh8", // ✅ Check this matches your Email.js service ID
            "template_vwz4kmr", // ✅ Check this matches your Email.js template ID
            {
                user_email: senderEmail,  // ✅ Must match your Email.js template variable
                message: message,  // ✅ Must match your Email.js template variable
            },
            "1JHOT8PU-b2dR4QDbY" // ✅ Check this matches your Email.js public key
        );

        console.log("✅ Email sent successfully:", response);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }
};
