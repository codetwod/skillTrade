import React from 'react'
import Userinformation from '../components/profile/Userinformation'
import moreinfo from '../assets/images/moreinfo.png';
const UserInfo = () => {
  return (
    <div className='flex justify-center w-3/4 m-auto text-white'>
      <div className='flex justify-center w-2/3 mt-16 h-2/3'>
        <img src={moreinfo} alt='dfhdufh' className='w-[70%]'/>
      </div>
      <div>
        <div className='flex justify-center m-7'>
          <p className='text-xl'>More information</p>
        </div>
        <div>
          <Userinformation/>
        </div>
      </div>     
    </div>
  )
}

export default UserInfo


