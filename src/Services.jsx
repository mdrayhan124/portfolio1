import React from 'react'
import Img from './components/Img'
import tbg1 from '../src/assets/tbg.jpeg'
import tbg2 from '../src/assets/tbg2.webp'
import Container from './components/Container'

const Services = () => {
    return (
        <Container className={""}>
            <div className="flex gap-1 justify-end items-center pt-8">
                <h4>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing.</h4>
                <hr className='h-[2px] w-52 bg-slate-50 mt-10' />
            </div>
            <div className="flex flex-col justify-center items-center mt-[-60px]">
                <div className="flex gap-5">
                    <h2 className='text-[70px]'>grow your
                    </h2>
                    <Img src={tbg2} imgClassName={"rounded-full"} className={"w-[200px] h-[100px]"} />
                </div>
                <div className="flex gap-5 mt-20">
                    <Img src={tbg1} imgClassName={"rounded-full"} className={"w-[200px] h-[100px]"} />
                    <h2 className='text-[70px]'> business with us
                    </h2>

                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-[12px] text-gray-400 w-[800px] m-auto mt-[50px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, odit! Culpa quam illum, tempora soluta est aut nesciunt dicta et fuga ratione quas natus nemo dolor sed saepe impedit deleniti quisquam incidunt repudiandae minus, optio repellendus, nulla labore earum! In enim inventore totam debitis et nobis. Voluptas laudantium facere, delectus voluptate quisquam quaerat voluptates eum repellendus laboriosam culpa earum aspernatur? Aliquid reprehenderit autem rerum sit ad veritatis officia. Praesentium quod explicabo magni adipisci esse, molestiae ratione dicta asperiores dolorem, optio ullam excepturi saepe aliquam voluptatem quisquam. Deserunt at numquam esse rerum aliquam. Repellendus quas voluptatibus possimus ipsum in harum quisquam.</p>
                </div>
                <div className="flex flex-col-3 m-auto">
                    <div className="flex flex-col items-center w-[200] border-2 border-stone-200">
                        <h4 className=' text-xl m-[10px]'>Lorem, ipsum dolor.</h4>
                        <p className='w-[200px] text-[13px] text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus recusandae, eligendi temporibus nihil veniam rem atque. Sint, maiores quam!</p>
                        <button className=' px-8 py-[10px] bg-orange-500 mt-5'>go</button>
                    </div>
                    <div className="flex flex-col items-center w-[200] border-2 border-stone-200">
                        <h4 className=' text-xl m-[10px]'>Lorem, ipsum dolor.</h4>
                        <p className='w-[200px] text-[13px] text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus recusandae, eligendi temporibus nihil veniam rem atque. Sint, maiores quam!</p>
                        <button className=' px-8 py-[10px] bg-orange-500 mt-5'>go</button>
                    </div>
                    <div className="flex flex-col items-center w-[200] border-2 border-stone-200">
                        <h4 className=' text-xl m-[10px]'>Lorem, ipsum dolor.</h4>
                        <p className='w-[200px] text-[13px] text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus recusandae, eligendi temporibus nihil veniam rem atque. Sint, maiores quam!</p>
                        <button className=' px-8 py-[10px] bg-orange-500 mt-5'>go</button>
                    </div>
                    <div className="flex flex-col items-center w-[200] border-2 border-stone-200">
                        <h4 className=' text-xl m-[10px]'>Lorem, ipsum dolor.</h4>
                        <p className='w-[200px] text-[13px] text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus recusandae, eligendi temporibus nihil veniam rem atque. Sint, maiores quam!</p>
                        <button className=' px-8 py-[10px] bg-orange-500 mt-5'>go</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services