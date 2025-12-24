import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '../hooks/useMotion';
import { Link } from 'react-router-dom';
import { Camera, Heart, Users, Sparkles } from 'lucide-react';
import heroPic from '../assets/heroPic.jpg';
import AnimatedStats from '../components/AnimatedStats';
import Testimonials from '../components/Testimonials';
import weddingPhoto from '../assets/w1.jpg';
import familyPhoto from '../assets/family/f07.jpg';
import portraitPhoto from '../assets/beauty_portrait/bp01.jpg';
import About from '../components/About';

const categories = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Your special day, captured forever',
    icon: Heart,
    image: weddingPhoto,
    gradient: 'from-pink-500/20 to-red-500/20',
    categoryKey: 'weddings',
  },
  {
    id: 2,
    title: 'Portraits',
    description: 'Personal & professional headshots',
    icon: Camera,
    image: portraitPhoto,
    gradient: 'from-purple-500/20 to-pink-500/20',
    categoryKey: 'portraits',
  },
  {
    id: 3,
    title: 'Family',
    description: 'Cherished moments with loved ones',
    icon: Users,
    image: familyPhoto,
    gradient: 'from-blue-500/20 to-purple-500/20',
    categoryKey: 'family',
  },
  {
    id: 4,
    title: 'Creative',
    description: 'Editorial & artistic concepts',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop',
    gradient: 'from-amber-500/20 to-red-500/20',
    categoryKey: 'creative',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section with Full Background Image */}
      <div className="pb-16 md:pb-0">
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroPic}
              alt="Hero background"
              className="h-full w-full object-cover object-center opacity-70"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/90" />
          </div>

          {/* Hero Content */}
          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Small Label */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-sm"
            >
              <p className="text-xs font-light uppercase tracking-[0.2em] text-gray-300">
                Karen Photography
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="mb-8 max-w-5xl font-serif text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every moment
              <span className="mt-2 block bg-linear-to-r from-red-400/80 via-pink-400/70 to-purple-400/80 bg-clip-text text-transparent">
                tells a story
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl font-light text-lg text-gray-300 md:text-xl"
            >
              Professional photography that transforms fleeting moments into
              timeless memories
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 1, repeat: Infinity }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-light uppercase tracking-widest text-gray-400">
                  Scroll
                </span>
                <svg
                  className="h-6 w-6 animate-bounce text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Category Section */}
        <section className="relative bg-bg-dark py-24">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full gradient-glow blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          <motion.div
            className="relative z-10 mx-auto max-w-7xl px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Section Header */}
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-light text-white md:text-5xl">
                What I Capture
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Specializing in moments that matter, from intimate celebrations
                to grand events
              </p>
            </motion.div>

            {/* Category Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={fadeUp}
                  custom={index}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <Link
                    to={`/gallery?category=${category.categoryKey}`}
                    className="block"
                  >
                    <div className="relative h-80 overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-gray-950 shadow-2xl">
                      <div className="absolute inset-0">
                        <img
                          src={category.image}
                          alt={category.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
                        />
                        <div
                          className={`absolute inset-0 bg-linear-to-t ${category.gradient} to-transparent opacity-60`}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      <div className="relative flex h-full flex-col justify-between p-6">
                        <div className="flex justify-end">
                          <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all group-hover:bg-red-500/10">
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 text-2xl font-semibold text-white transition-colors group-hover:text-red-300/90">
                            {category.title}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {category.description}
                          </p>

                          <div className="mt-4 flex items-center text-sm font-medium text-red-300/80 opacity-0 transition-all group-hover:opacity-100">
                            <span>Explore</span>
                            <svg
                              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent shimmer" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <div className="mt-24">
              <AnimatedStats />
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="relative bg-black py-12">
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 text-center font-serif text-4xl font-light text-white md:text-5xl"
            >
              Client Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-center text-gray-400"
            >
              Hear what clients say about their experience
            </motion.p>
            <Testimonials />
          </div>
        </section>

        {/* About Section */}
        <About />
      </div>
    </>
  );
};

export default Home;
