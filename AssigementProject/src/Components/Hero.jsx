import React, { useRef } from 'react'
import { images } from '../assets'
import Banner from './Banner'
import Bussiness from './Bussiness'
import SuccessStories from './SuccessStories'

const Hero = () => {
    // style for bg image
    const bgImageStyle = {
        backgroundImage: `url(${images.banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',

    }
    const countRef = useRef
    return (
        <>

            <div style={bgImageStyle} className='w-full bg-no-repeat flex items-center justify-between md:p-10 flex-wrap mt-3 md:mt-0'>
                {/* left side */}
                <div className="gap-10 flex flex-col md:ml-[5rem]">
                    <div>

                        <p className='font-semibold text-3xl text-center md:text-left'>Sell on 1mdm.com</p>
                        <h1 className='font-bold text-5xl text-center md:text-left'>Reach millions of B2B buyers <br /> globally</h1>
                    </div>

                    <div className="mt-10 space-x-5 flex items-center justify-center md:justify-start">
                        <button className='bg-red-600 text-white py-2 px-4 rounded-full'>Start Selling</button>
                        <button className='bg-transparent text-red-600 border border-red-600 py-2 px-5 rounded-full'>Chat With consultant</button>
                    </div>
                </div>

                {/* right side */}
                <div className="gap-5 flex flex-col md:ml-[10rem] mx-auto mt-5 md:mt-0">
                    <div className="">
                        <span className='font-bold text-3xl'>26,000,000</span>
                        <p className='text-gray-600'>active buyers globally</p>
                    </div>

                    <div className="">
                        <span className='font-bold text-3xl'>400,000</span>
                        <p className='text-gray-600'>product inquiries daily</p>
                    </div>

                    <div className="">

                        <span className='font-bold text-3xl'>200</span>
                        <p className='text-gray-600'>countries and regions represented</p>
                    </div>
                </div>



            </div>

            {/* secound section */}
            {/* secound seciton */}
            <div className="w-full flex flex-col items-center justify-center mt-10 md:p-10 p-4">
                <h1 className='font-bold md:text-3xl text-2xl text-center mt-5 md:mt-0'>1mdm.com is a leading ecommerce platform that  <br /> helps SMEs go global</h1>
                <div className="w-full flex items-center justify-center mt-10 flex-wrap">
                    <div className="">
                        <div className="w-full md:w-[560px]">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/TN7iJyc5Uks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="space-y-5 md:ml-10 md:mt-0 mt-5 text-xl">
                        <p>Connect with millions of business buyers from around the world.</p>
                        <p>Get the tools and know-how to build a successful ecommerce presence <br /> for your business.</p>
                        <p>Pocket more from each sale, with take rates as low as 0% in some cases.
                        </p>
                    </div>
                </div>
            </div>

            <div className=''>

                <Banner />
            </div>

            {/* business */}
            <div className="">
                <Bussiness />
            </div>

            {/* success stories */}
            <div>
                <SuccessStories />
            </div>
        </>
    )
}

export default Hero

