import React, { useRef } from 'react';
import Container from './components/Container';
import Data from './data/data';
import SinglePage from './pages/SinglePage';
import { motion, useScroll, useSpring } from 'framer-motion';

const About = () => {
  const pageData = Data;
  const Aref = useRef();
  const { scrollYprogress } = useScroll({
    target: Aref,
    offset: ["end end", "start start"]
  });
  const scaleX = useSpring(scrollYprogress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Container className="relative snap-y snap-mandatory scroll-smooth">
      <div className="flex flex-col justify-center items-center sticky top-0 left-0 pt-[50px]">
        <h1 className="font-bold text-5xl text-[#a1812a]">Featured work</h1>
        <motion.div ref={Aref} style={{ scaleX:scaleX }} className="h-5 w-full bg-slate-500 m-auto"></motion.div>
      </div>

      {pageData.map((item) => (
        <SinglePage className="h-[100vh] snap-center flex flex-col m-auto justify-center items-center" key={item.id}>
          <div className="lg:flex justify-center items-center">
            <div className="w-96">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-3xl">{item.title}</h2>
              <p className="">{item.desc}</p>
            </div>
          </div>
        </SinglePage>
      ))}
    </Container>
  );
};

export default About;