import React from 'react';
import { motion } from 'framer-motion';
import Img from '../components/Img';
import Bg from '../assets/aboutBg.jpg';
import Profile from '../assets/profile_Git.jpg';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Card from '../components/card';

const Home = () => {
    const resize = window.innerWidth;
    console.log(resize);

    return (
        <>
            <Container className="snap-center font-popins">
                <NavBar />
                <div className="relative ">
                    <div className="absolute h-full w-full bg-[#000000bb] z-10"></div>
                    {resize <= 734 ? <div className='w-full h-[500px]'></div> :
                        <Img src={Bg} className="w-full z-0" />
                    }
                    <Img
                        src={Profile}
                        imgClassName="rounded-full"
                        className={`z-20 absolute w-[200px] h-[200px] top-[30%]  ${resize == 734 ? "top-[30%] left-[35%]" : ""} md:top-[25%] md:left-[35%] lg:w-[300px] md:h-[300px] rounded-full`} />
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { scale: 0.6, opacity: 0 },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: { delay: 0.4 },
                            },
                        }}
                        className="absolute top-[80%] lg:top-[60%] left-[20%] sm:text-[30px] font-bold text-[#f9efe4] lg:top-[47%] md:left-[30%] z-30 sm:w-[350px]"
                    >
                        I'm a creative
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { scale: 0.6, opacity: 0 },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: { delay: 0.6 },
                                },
                            }}
                            className="font-extrabold text-[30px] text-[#a1812a]"
                        >
                            Font-End developer
                        </motion.span>
                    </motion.h1>

                    <Flex className="uppercase absolute top-[20%] gap-2 md:top-[60%] text-[25px]  md:left-[30%] text-[#ed2d40] sm:font-extrabold sm:text-[35px] sm:z-50">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { scale: 0.6, opacity: 0 },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: { delay: 0.8 },
                                },
                            }}
                        >
                            Rayhan
                        </motion.h2>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { scale: 0.6, opacity: 0 },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: { delay: 1 },
                                },
                            }}
                        >
                            Hossain
                        </motion.h2>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { scale: 0.6, opacity: 0 },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: { delay: 1.2 },
                                },
                            }}
                        >
                            Jibon
                        </motion.h2>
                    </Flex>

                    {resize <=  734 ? (
                        <div></div>
                    ) : (
                        <Flex className="absolute top-[70%] left-[10%] gap-10">
                            <Card
                                title="This card is made by Framer Motion"
                                className="bg-slate-50 rounded-3xl"
                            />
                            <Card
                                title="This card is made by Framer Motion"
                                className="bg-slate-50 rounded-3xl"
                            />
                        </Flex>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Home;
