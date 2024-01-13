import React from 'react'
import { motion } from 'framer-motion'

const Card = ({className,title}) => {
  return (
    <motion.div
    initial='init'
    animate='zoom'
    variants={{
      init:{scale:0},
      zoom:{scale:1,
      transition:{
        delay:2
      }
      }
      
    }}
    className={`p-5 border-2 border-black sm:w-[500px] ${className}`}>
        <h2 className='font-bold text-[25px]'>{title}</h2>
        <p className='sm:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam quidem, ratione alias minima impedit dolorum perferendis nam, iure ullam amet, accusantium iusto perspiciatis reprehenderit!</p>
    </motion.div>
  )
}

export default Card