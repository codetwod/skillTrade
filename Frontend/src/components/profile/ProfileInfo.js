import React from 'react'
const ProfileInfo = ({profile}) => {
  return (
    <div className='mt-10 ml-10 w-[93%]'>
        <div className='flex flex-col bg-[#99C0D9] w-full h-[350px] rounded-3xl '>
        <div className='w-full bg-[#3C5A81] h-[37%] rounded-3xl'>
            <h2 className='flex justify-center gap-4 pt-5 text-[30px] text-white'>Building holistic,people <br></br>
                friendly Digital experience</h2>
        </div>
        <div className='flex'>
            <div className='w-1/4'>
                <img className='w-[150px] h-[150px] rounded-full relative left-10 -top-16' src={profile.image} alt='imageg is not visable'/>
            </div>
            <div className='w-3/4 p-4'>
                <div className='flex justify-between'>
                    <p className='text-3xl font-semibold'> {profile.name}</p>
                    <button className='relative -left-16 bg-[#EE6D4C] p-2 pl-5 pr-5 rounded-xl text-md flex justify-start items-start'>Send Message</button>
                </div>
                <div className='mt-3'>
                    <p className='text-xl'>student</p>
                    <p className='text-xl'>{profile.university}</p>
                </div>
                <div className='flex gap-5 mt-6 '>
                    <button className='bg-[#3C5A81] text-white p-1 pl-4 pr-4 rounded-xl text-md flex justify-start items-start'>{profile.skill1}</button>
                    <button className='bg-[#3C5A81] text-white p-1 pl-4 pr-4 rounded-xl text-md flex justify-start items-start'>{profile.skill2}</button>
                    <button className='bg-[#3C5A81] text-white p-1 pl-4 pr-4 rounded-xl text-md flex justify-start items-start'>{profile.skill3}</button>
                </div>
            </div>
        </div>
    </div>
    <div className='mt-8 mb-8 ml-12'>
        <h3 className='text-2xl '>More Info</h3>
        <p className='mt-3'>{profile.moreinfo}</p>
        <br/>
        <br/>
        
        <p className='mt-3'>{profile.moreinfo}</p>
    </div>
    </div>
 
  )
}

export default ProfileInfo