import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { contactInfo, emailJsConfig } from '../config';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(emailJsConfig.userId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_email: contactInfo.email,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-8">
          Have a project or question? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div data-aos="fade-up">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition"
              placeholder="Your name"
              aria-label="Your name"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition"
              placeholder="your@email.com"
              aria-label="Your email"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition resize-none"
              placeholder="Your message..."
              aria-label="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="p-4 bg-green-900 text-green-200 rounded-lg text-center" role="alert">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 bg-red-900 text-red-200 rounded-lg text-center" role="alert">
            ✗ Failed to send message. Please try again or contact directly at {contactInfo.email}
          </div>
        )}

        {/* Direct Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-400 hover:text-blue-300 transition"
              aria-label={`Email: ${contactInfo.email}`}
            >
              📧 Email
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-blue-400 hover:text-blue-300 transition"
              aria-label={`Phone: ${contactInfo.phone}`}
            >
              📱 Phone
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
              aria-label="LinkedIn profile"
            >
              💼 LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
              aria-label="GitHub profile"
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