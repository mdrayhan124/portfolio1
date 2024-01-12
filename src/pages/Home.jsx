import React from 'react';
import { motion } from 'framer-motion';
import Img from '../components/Img';
import Bg from '../assets/aboutBg.jpg'
import Profile from '../assets/profile_Git.jpg'
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Card from '../components/card';

const Home = () => {
    return (
        <>
            <Container className={"snap-center font-popins"}>
                <NavBar />
                <div className={`relative`}>
                    <div className="absolute h-full w-full bg-[#000000bb] z-10">
                    </div>
                    <Img src={Bg} className={"w-full z-0"} />
                    <Img src={Profile} imgClassName={"rounded-full"} className={"z-20 absolute top-[25%] left-[35%] w-[300px] h-[300px] rounded-full"} />
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: .6,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .4
                                }
                            }
                        }}
                        className='absolute text-[30px] font font-bold text-[#f9efe4] top-[47%] left-[30%] z-30 w-[350px]'>I`m a creative<br /> <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .6,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .6
                                    }
                                }
                            }}
                            className='font-extrabold text-[30px] text-[#a1812a]'>Font-End developer</motion.span></motion.h1>

                    <Flex className={"uppercase absolute gap-2 top-[60%] left-[30%] text-[#ed2d40] font-extrabold text-[35px] z-50"}>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .6,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .8
                                    }
                                }
                            }}>Rayhan</motion.h2>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .6,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1
                                    }
                                }
                            }}>hossain</motion.h2>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .6,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.2
                                    }
                                }
                            }}>jibon</motion.h2>
                    </Flex>
                    <Flex className={"absolute top-[70%] left-[10%] gap-10"}>
                    <Card title={"this card is made by framer motion"} className={"bg-slate-50 rounded-3xl"}/>
                    <Card title={"this card is made by framer motion"} className={"bg-slate-50 rounded-3xl"}/>
                    </Flex>
                </div>
            </Container>

        </>
    )
}

export default Home