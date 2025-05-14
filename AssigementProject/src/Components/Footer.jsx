import React from 'react'
import { images } from '../assets'
const Footer = () => {
    const bgImageStyle = {
        backgroundImage: `url(${images.footer_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
    }
    return (
        <>

            <div style={bgImageStyle} className='flex flex-col mt-10 items-center justify-center'>
                <div className='bg-cover bg-no-repeat w-full h-[500px] flex flex-col items-center justify-center '>

                    <p className='text-4xl font-bold text-white text-center'>Ready to Grow Your Business?</p>
                    <div className="mt-11 space-x-5">
                        <button className='bg-white text-red-600 px-7 py-3 rounded-full hover:bg-red-700 hover:text-white transition duration-300'>
                            Start Selling
                        </button>
                        <button className='bg-transparent border text-white px-7 py-3 rounded-full hover:bg-white hover:text-red-600  transition duration-300'>
                            Chat With Consultant
                        </button>
                    </div>
                </div>

            </div>
            {/* footers */}
            <footer className='bg-black w-full h-[200px] grid grid-cols-1 md:grid-cols-4 place-items-center   p-10 h-auto'>
                <div className="ml-5">
                    <img src={images.logo_white} alt="" />
                    <p className='text-white'>One Medical Devices <br /> Market Place</p>
                </div>
                <div className="p-5">
                    <h2 className='text-white text-xl'>platform</h2>
                    <ul className=' space-y-5 mt-10 text-gray-200'>
                        <li>Sell on 1MDM</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Brands</li>

                    </ul>
                </div>
                <div className="p-5 gap-5">
                    <div>
                        <h2 className="text-white text-xl text-center">Press Room</h2>
                        <ul className='space-y-5 p-3 text-gray-200 text-center'>
                            <li>Images & B-roll</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-xl text-center mt-5">Policies</h2>
                        <ul className='space-y-5 text-gray-200 text-center p-2'>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Delivery Information</li>
                        </ul>
                    </div>
                </div>

                <div className="p-5 ml-10">
                    <h1 className='text-white text-2xl'>Reach us</h1>
                    <p className='text-gray-200 mt-5'>Coperate Information</p>
                    <p className='text-gray-200 mt-5'>Contact Us</p>
                </div>
            </footer>
            <div className="w-full">
                <p className='text-center p-5'>© 2025 1MDM ⚡ by SuperLabs</p>
            </div>
        </>

    )
}

export default Footer
