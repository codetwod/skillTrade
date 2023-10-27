import React from 'react'

const ProfileItem = ({information}) => {
  return (
    <div className=' min-w-[400px] m-5 flex'>
        <div><img src={information.image} className='w-[140px] h-[140px] rounded-full' alt='rishi'/></div>
        <div className='flex flex-col justify-center gap-3 pl-8 text-lg text-white'>
            <p>{information.instructor}</p>
            <p>{information.name}</p>
            <p>{information.university}</p>
        </div>
    </div>
  )
}

export default ProfileItem