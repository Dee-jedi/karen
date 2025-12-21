import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';
import {
  ArrowRight,
  Send,
  MapPin,
  MessageSquare,
  User,
  Calendar,
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // WhatsApp pre-filled message generator - Natural conversation style
  const generateWhatsAppMessage = () => {
    const { name, location, email, phone, eventDate, message } = formData;

    let whatsappMessage = `Hello Karen! 👋\n\n`;

    if (name) {
      whatsappMessage += `My name is ${name}.\n`;
    }

    if (location) {
      whatsappMessage += `I'm located in ${location}.\n`;
    }

    if (email || phone) {
      whatsappMessage += `You can reach me at `;
      if (email && phone) {
        whatsappMessage += `${email} or ${phone}.\n`;
      } else if (email) {
        whatsappMessage += `${email}.\n`;
      } else if (phone) {
        whatsappMessage += `${phone}.\n`;
      }
    }

    if (eventDate) {
      const formattedDate = formatDate(eventDate);
      whatsappMessage += `I'm planning an event on ${formattedDate}.\n\n`;
    } else {
      whatsappMessage += `\n`;
    }

    if (message) {
      whatsappMessage += `I'd like to inquire about your photography services:\n"${message}"\n\n`;
    } else {
      whatsappMessage += `I'd like to inquire about your photography services.\n\n`;
    }

    whatsappMessage += `Looking forward to hearing from you!\n`;
    whatsappMessage += `Best regards,\n${name || ''}`;

    return encodeURIComponent(whatsappMessage);
  };

  const whatsappNumber = '2348127754589';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;

  // Handle form submission (redirect to WhatsApp)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in at least your name and message');
      return;
    }
    window.open(whatsappUrl, '_blank');
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pb-24 pt-24 md:pb-6">
      <AnimatedBackground />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-8 px-2 text-center sm:mb-12"
        >
          <h1 className="mb-3 font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            <span className="bg-linear-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create
            </span>{' '}
            Something Beautiful
          </h1>
          <p className="text-base text-gray-300/80 sm:text-lg">
            Get in touch to discuss your photography needs
          </p>
        </motion.div>

        <div className="grid gap-6 px-2 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-gray-900/50 to-black/50 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-8">
              <h2 className="mb-4 text-xl font-semibold text-white sm:mb-6 sm:text-2xl">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name & Location - Stack on mobile */}
                <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                  <div className="group">
                    <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                      <User className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="group">
                    <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                      <MapPin className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                      placeholder="Abuja, Nigeria"
                    />
                  </div>
                </div>

                {/* Email & Phone - Stack on mobile */}
                <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                  <div className="group">
                    <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                      <FaEnvelope className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                      <FaPhone className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                      placeholder="+234 812 775 4589"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div className="group">
                  <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                    <Calendar className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                    Event Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                  />
                  {formData.eventDate && (
                    <p className="mt-1 text-xs text-rose-300/80">
                      Selected: {formatDate(formData.eventDate)}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="group">
                  <label className="mb-1 block text-xs font-medium text-gray-400 sm:mb-2 sm:text-sm">
                    <MessageSquare className="inline h-3 w-3 mr-1 sm:h-4 sm:w-4 sm:mr-2" />
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/20 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                    placeholder="Tell me about your photography needs..."
                  />
                </div>

                {/* Form Preview (Mobile only) */}
                <div className="rounded-lg border border-cyan-500/20 bg-cyan-900/10 p-3 sm:hidden">
                  <p className="mb-2 text-xs font-medium text-cyan-300">
                    Preview:
                  </p>
                  <p className="text-xs text-cyan-200/80">
                    Your message will be sent via WhatsApp with all details
                    above.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group/btn w-full rounded-lg bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 py-3 text-xs font-semibold text-white transition-all hover:shadow-lg hover:shadow-rose-500/20 sm:rounded-xl sm:py-4 sm:text-sm"
                >
                  <span className="flex items-center justify-center gap-1 sm:gap-2">
                    Send via WhatsApp
                    <Send className="h-3 w-3 transition-transform group-hover/btn:translate-x-1 sm:h-4 sm:w-4" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Information */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-gray-900/50 to-black/50 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-8">
              <h2 className="mb-4 text-xl font-semibold text-white sm:mb-6 sm:text-2xl">
                Get in Touch
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors sm:gap-4 sm:rounded-xl sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <FaPhone className="h-4 w-4 text-rose-400 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400 sm:text-sm">Phone</p>
                    <p className="truncate text-sm font-medium text-white sm:text-lg">
                      +234 812 775 4589
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors sm:gap-4 sm:rounded-xl sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <FaEnvelope className="h-4 w-4 text-pink-400 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400 sm:text-sm">Email</p>
                    <p className="truncate text-sm font-medium text-white sm:text-lg">
                      ekarikaukeme9@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors sm:gap-4 sm:rounded-xl sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <FaMapMarkerAlt className="h-4 w-4 text-purple-400 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400 sm:text-sm">Location</p>
                    <p className="truncate text-sm font-medium text-white sm:text-lg">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons (Like About Page) */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="mb-4 text-center text-lg font-medium text-white">
                  Follow Me
                </h3>
                <div className="flex justify-center gap-3">
                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/karen_pictures?igsh=MTRkcjlueGdmOGRjeA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-6 w-6 text-white" />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://www.facebook.com/ukeme.ime.12"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="h-6 w-6 text-white" />
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 group relative"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-6 w-6 text-white" />
                    {/* WhatsApp green glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:ekarikaukeme9@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                    aria-label="Email"
                  >
                    <FaEnvelope className="h-6 w-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-amber-500/30 bg-linear-to-br from-amber-900/20 to-amber-900/10 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6">
              <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3">
                <div className="p-1 rounded-md bg-amber-500/20 sm:p-2 sm:rounded-lg">
                  <FaWhatsapp className="h-3 w-3 text-amber-300 sm:h-4 sm:w-4" />
                </div>
                <h3 className="text-sm font-semibold text-amber-100 sm:text-lg">
                  Quick Response Time
                </h3>
              </div>
              <p className="text-xs text-amber-200/90 leading-relaxed sm:text-sm">
                I typically respond to WhatsApp messages within 5 - 10 minutes
                during business days. For urgent inquiries, WhatsApp is the
                fastest way to reach me!
              </p>
            </div>

            {/* Quick Contact Button */}
            <div className="rounded-2xl border border-cyan-500/30 bg-linear-to-br from-cyan-900/20 to-blue-900/10 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6">
              <h3 className="mb-3 text-sm font-semibold text-white sm:text-lg">
                Quick Contact
              </h3>
              <p className="mb-4 text-xs text-gray-300 sm:text-sm">
                Prefer to send a quick message without filling the form?
              </p>
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello Karen! I'd like to inquire about your photography services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/quick inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 py-3 text-xs font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20 sm:rounded-xl sm:py-3 sm:text-sm"
              >
                <span>Quick WhatsApp Message</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover/quick:translate-x-1 sm:h-4 sm:w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
