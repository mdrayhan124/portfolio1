import React from 'react'
import Container from '../components/Container'
import contactImg from '../assets/contact.png'
import Img from '../components/Img'

const Contact = () => {
    const resize = window.innerWidth;
  console.log(resize);
    return (
        <Container className={"md:flex flex-col gap-[100px]"}>
            <div className='text-center'>
                <h1 className={`font-bold ${resize <=375?"m-[50px]":""} text-[30px] sm:text-[50px] text-[#a1812a]`}>contact with us</h1>
            </div>
            <div className="md:flex gap-[100px] m-auto justify-center items-center">
                <div className="img">
                    <Img src={contactImg} className={"w-[200px] m-auto lg:w-[400px]"} />
                </div>
                <div className={`flex flex-col ${resize <=375?"p-4":""} sm:w-[500px] gap-5`}>
                    <input className='bg-inherit border-2 border-gray-500 p-[20px]' type="text" placeholder='gmail' />
                    <input className='bg-inherit border-2 border-gray-500 p-[20px]' type="phone" placeholder='phone' />
                    <textarea className='bg-inherit border-2 border-gray-500 p-[20px]' name="say_something" id="" cols="30" rows="10" placeholder='say_something' />
                    <button className=' bg-blue-400 p-5 rounded-3xl object-contain' type='submit'>submit</button>
                </div>
            </div>
        </Container>
    )
}

export default Contact