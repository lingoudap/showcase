import { useState } from "react";
import { contactApiConfig, contactInfo } from "../config";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔥 Submit to Backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const payload = {
        ...formData,
        phone: formData.mobileNo,
      };

      const response = await fetch(contactApiConfig.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", mobileNo: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Have a project or question? I'd love to hear from you.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Mob No.</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white rounded-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-green-900 text-green-200 rounded-lg text-center">
            ✓ Message sent successfully! and Lingouda will get back to you soon. Thank you for reaching out.          
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-900 text-red-200 rounded-lg text-center">
            ✗ Failed to send message. Please try again.
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-400"
            >
              📧 Email
            </a>

            <a href={`tel:${contactInfo.phone}`} className="text-blue-400">
              📱 Phone
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              💼 LinkedIn
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;