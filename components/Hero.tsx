'use client';

import CustomButton from './CustomButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = () => {
    const discoverElement = document.querySelector('#discover');

    if (discoverElement) {
      discoverElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily.
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hero__image"
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
