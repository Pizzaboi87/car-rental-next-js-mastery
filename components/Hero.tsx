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
        <h1 className="hero__title">Discover, book, drive -- easy and fast.</h1>
        <p className="hero__subtitle">
          Optimize car rentals with our seamless booking.
        </p>
        <CustomButton
          title="Find your car"
          containerStyles="bg-primary-green text-white rounded-full mt-10"
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
          <Image src="/newHero.png" alt="hero" fill className="object-contain" />
        </motion.div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
