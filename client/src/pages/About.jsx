import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About ABC Solutions - Your Trusted Software Partner</h1>
          <p className='text-justify leading-7'>
          Greetings from ABC Solutions! I am Aman Singh, the founder of ABC Solutions, and I'm thrilled to introduce you to our innovative software firm.
          </p>
          <br/>
          <p className='text-justify leading-7'>
          At ABC Solutions, we envision being a leading software firm, empowering businesses through advanced technological solutions. Our commitment is to provide top-notch software services that drive success in today's digital world.  </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <h2 className='text-3xl text-blue-600 font-bold mb-5'>Who We Are</h2>
        <h3>Founder: Aman Singh</h3>
        <h3>Email: amansingh.28757@gmail.com</h3>
     <p>
     ABC Solutions was established to make high-quality software services accessible to businesses of all sizes. We believe in the transformative power of technology and strive to be your reliable partner in achieving your software goals.
     </p>
     <br/><br/>
     <h2 className='text-3xl text-blue-600 font-bold mb-5'>Our Approach</h2>
     <p>
    1.  Client-Centric: Your success is at the heart of everything we do. We collaborate closely with our clients to understand their objectives and deliver solutions that surpass expectations.
    <br/>
    2. Innovation: Embracing emerging technologies, we ensure that our clients are equipped with cutting-edge software solutions that not only meet current needs but also prepare them for the future.
      <br/>
    3.  Integrity: Transparency and honesty are the pillars of our business. We foster lasting relationships built on trust.
     </p>
      </div>
    </div>
  );
};

export default About;
