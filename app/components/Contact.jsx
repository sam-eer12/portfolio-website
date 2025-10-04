import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dbb12da2-22b7-4553-839a-efb2b312f97e");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Get in Touch</h4>
      <h2 className='text-center text-5xl font-ovo'>Contact Me</h2>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
            <input type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
        </div>
        <div>
            <textarea rows="6" placeholder='Enter Your Message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
        </div>
        <button type='submit' className='bg-blue-500 w-max flex items-center justify-center mx-auto hover:bg-blue-900 duration-400 text-white py-3 px-8 rounded-full'>Submit  <Image src={assets.right_arrow_white} alt='' className='w-5 pl-[4px]'/></button>
        <p>{result}</p>
      </form>
    </div>
  )
}

export default Contact
