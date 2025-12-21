import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import aboutPic from '../assets/about.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // WhatsApp pre-filled message
  const whatsappMessage =
    "Hello Karen! I saw your photography portfolio and I'm interested in learning more about your services.";
  const whatsappNumber = '2348127754589'; // Replace with actual WhatsApp number

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-linear-to-b from-bg-dark to-black py-24"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutPic}
                alt="Photographer"
                loading="lazy"
                className="h-125 w-full object-cover lg:h-150"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 rounded-lg bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-light text-gray-300">
                  5+ years capturing
                </p>
                <p className="text-2xl font-semibold text-white">
                  Life's moments
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-3 font-serif text-4xl font-light text-white md:text-5xl">
              The Man Behind
              <span className="mt-1 block bg-linear-to-r from-red-400/80 to-pink-400/80 bg-clip-text text-transparent">
                the Lens
              </span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-400">
              With over five years of experience capturing life's most precious
              moments, I've developed a unique style that blends candid
              authenticity with artistic composition.
            </p>

            <p className="mb-8 leading-relaxed text-gray-400">
              From intimate portraits to grand celebrations, my goal is to
              create timeless images that tell your story. I believe that every
              photograph should evoke emotion and preserve memories that last a
              lifetime.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/karen_pictures?igsh=MTRkcjlueGdmOGRjeA=="
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Instagram"
              >
                <FaInstagram className="h-7 w-7 text-white" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/ukeme.ime.12"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-7 w-7 text-white" />
              </motion.a>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 group relative"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-7 w-7 text-white" />
                {/* WhatsApp green glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
              </motion.a>

              <motion.a
                href="mailto:ekarikaukeme9@gmail.com"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Email"
              >
                <AiOutlineMail className="h-7 w-7 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
