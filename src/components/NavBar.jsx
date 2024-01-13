import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import Flex from './Flex';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const items = ["services", "link", "about", "link2", "contact"]

    const variant={
        visible:(i)=>({
            opacity:1,
            x:100,
            transition:{
                delay:i*0.4
            }
        }),
        hidden:{opacity:0}
    };

    return (
        <>
            <nav className='absolute top-0 z-[999] px-8 py-10'>
                <Flex className={"relative"}>
                    <FaBars className='text-[#f9efe4] sm:text-[30px]' onClick={handleOpen} />
                    {
                        open && (
                            <motion.div className='bg-white w-[300px] top-10 left-0 absolute z-100 flex flex-col text-black rounded-3xl'>
                                {
                                    items.map((item) => (
                                        <motion.li whileTap={{scale:1.1}} className=' list-none cursor-pointer p-3' initial="hidden" animate="visible" variants={variant} key={item}><a href={`#${item}`}>{item}</a></motion.li>
                                    )
                                    )}
                            </motion.div>
                        )
                    }
                </Flex>
            </nav>
        </>
    );
};

export default NavBar;