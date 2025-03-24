import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";

import { fadeInOnScroll } from "@/motion/motionVariants";

const testimonial = [
  {
    name: "John Doe",
    message:
      " This serivice was outstanding! It went above and beyond my expectations. I will definitely be using this service again in the future.",
  },
  {
    name: "Alice Smith",
    message:
      " I am beyond impressed! The service was exceptional, and the results exceeded my expectations. Highly recommended!",
  },
  {
    name: "Michael Johnson",
    message:
      " A truly outstanding experience! The professionalism and quality of service were top-notch. I couldn't be happier!",
  },
  {
    name: "Emily Davis",
    message:
      " Absolutely fantastic! Everything was handled with great care and precision. I will definitely be coming back!",
  },
  {
    name: "David Brown",
    message:
      " This service delivered exactly what I needed and more. A smooth, hassle-free experience with amazing results!",
  },
  {
    name: "Sophia Wilson",
    message:
      " I was blown away by the quality and attention to detail. Everything was perfect, and I couldn't have asked for better!",
  },
  {
    name: "James Anderson",
    message:
      "Exceptional service! The attention to detail and dedication were remarkable. I am extremely satisfied with the outcome!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        {/* ..........text.......... */}
        <motion.div variants={fadeInOnScroll(0.2, 0.4)} initial="hidden" whileInView="visible">
          <h2 className="h2 mb-4 text-center">What People Say About Us</h2>
          <p className="lead text-center mb-24">Hear directly from those who have improved theri efficiency and organisation.</p>
        </motion.div>
        {/* ..........card list......... */}
        
          <motion.div
            variants={fadeInOnScroll(0.2, 0.6)}
            initial="hidden"
            whileInView="visible"
            className="flex"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonial.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonial.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        
      </div>
    </section>
  );
};

export default Testimonials;
