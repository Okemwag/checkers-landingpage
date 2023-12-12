import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df90] font-bold p-2 uppercase">Mine your way to a secure future with Checkers.</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with checkers!</h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Unlocking one block at</p>
                <Typed className="md:text-5xl sm:text-3xl font-bold md:pl-4 pl-2" strings={[" a time"]}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-400">Simple, intuitive, and user-friendly – the Checkers experience</p>
            <button className="bg-[#00df90] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
        </div>
      
    </div>
  )
}

export default Hero
