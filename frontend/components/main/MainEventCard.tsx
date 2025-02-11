"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { events } from "../data";
import { motion } from "framer-motion";
import { showToast } from "../ToastNotifications";

const MainCard: FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleComingSoon = () => {
    showToast("success", "Get Ready, It’s Almost Here! 🎉");
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const slideInTop = {
    initial: { y: -200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 1, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const slideInRight = {
    initial: { x: 200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 1, ease: "easeInOut" },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div
      className={`relative flex w-full justify-between items-center h-[328px] ${
        events[currentEvent]?.background || ""
      } mt-[120px] mb-[60px] px-[60px]`}
    >
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial="initial"
          animate={currentEvent === index ? "animate" : "exit"}
          exit="exit"
          className="flex w-full "
        >
          {currentEvent === index && (
            <motion.div variants={fadeIn} className={`${event.textStyle}`}>
              <h2 className="text-[24px] font-bold ">{event.title}</h2>
              <p className="text-[18px] ">{event.description}</p>
              <button
                onClick={handleComingSoon}
                className={`w-[120px] h-[47px] rounded-full  font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] ${event.buttonStyle}`}
              >
                Shop
              </button>
            </motion.div>
          )}

          {currentEvent === index && (
            <motion.div
              variants={slideInTop}
              className={`${event.image1Style}`}
            >
              <Image
                src={event.image1}
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </motion.div>
          )}

          {currentEvent === index && (
            <motion.div
              variants={slideInRight}
              className={`${event.image2Style}`}
            >
              <Image
                src={event.image2}
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MainCard;
