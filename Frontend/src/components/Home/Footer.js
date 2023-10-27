import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {SlSocialGithub,SlSocialLinkedin} from 'react-icons/sl'
import {TiSocialFacebook} from 'react-icons/ti';
const Footer = () => {
  return (
    <div>
    <div className='bg-[#293241]  text-white flex justify-around p-8'>
        <div className='text-3xl font-semibold'>
            skillTrade
        </div>
        
        <div className=''>
            <h2 className='text-2xl'>Learn more</h2>
            <div className='pt-6'> 
                <ul className='flex flex-col'>
                    <li>Accounting</li>
                    <li>Health Care</li>
                    <li>Law</li>
                    <li>DSA</li>
                    <li>management</li>
                    <li>Analysis</li>
                </ul>
            </div>
        </div>

        <div>
            <h3 className='text-2xl'>Comtact-us</h3>
            <div className='flex flex-col pt-6'>
                <ul className='flex flex-col'>
                    <li>Rishi:-7572958976</li>
                    <li>Vishal:-8540923487</li>
                </ul>
            </div>
        </div>
        
        <div>
            <h4 className='text-2xl'>social media</h4>
            <div className='flex gap-10 pt-6 text-2xl'>
                <BsInstagram/>
                <SlSocialGithub/>  
                <SlSocialLinkedin/>
                <TiSocialFacebook/>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Footer


