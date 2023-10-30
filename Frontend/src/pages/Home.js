import React from 'react'
import homeimage from '../assets/images/homeimage.png';
import Vector from '../assets/images/Vector.png';
import Posts from '../components/Posts';
import SkillsDemanded from '../components/Home/SkillsDemanded';

import Footer from '../components/Home/Footer';
import usePro from '../Hooks/usePro';
const Home = ({informations}) => {
    // const {informations,fectData,loading} = usePro();
 
  return (
    <div className='bg-[#E0FBFC] h-screen' >
        <div className='w-full h-[70%] flex justify-center items-center'>
            <div className='w-[80%] flex justify-center pl-[10%] flex-col'>
                <div className='text-5xl font-semibold text-[#293241] leading-[65px]'>
                    Learn, Teach, and Trade<br></br> 
                    Skills with Like-minded <br></br>
                    Individuals.
                </div>
                <div className=''>
                    <button className='bg-[#EE6D4C] p-2 pl-5 pr-5 rounded-xl mt-5 text-2xl flex justify-start items-start absol left-0'>Get Started</button>
                </div>
            </div>
            <div className='relative flex justify-center left-[10%]'>
                <div>
                    <img className='relative z-10 w-[600px] '  src={homeimage} alt='ima is not visiable'/>
                </div>
                <div>
                    <img className='relative -left-[100%] z-0 w-[600px] h-[330px]' src={Vector} alt='im is nottt visiable'/>
                </div>
            </div>
        </div>
        <Posts informations = {informations}/>
        <SkillsDemanded informations={informations}/>
        <Footer/>

    </div>
  )
}

export default Home