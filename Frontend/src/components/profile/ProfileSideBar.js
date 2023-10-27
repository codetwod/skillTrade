import React from 'react'

const ProfileSideBar = ({profile}) => {
  return (
    <div className='bg-[#99C0D9] w-[350px] mr-10 mt-10 rounded-3xl h-screen'>
        <div>
          <h3 className='flex justify-center p-2 bg-[#3C5A81] rounded-3xl text-xl text-white'>Want To Learn</h3>
          <div className='flex flex-col gap-2 p-4 pl-5 text-xl '>
          <p className=''>{profile.wanttolern1}</p>
          <p>{profile.wanttolern2}</p>
          <p>{profile.wanttolern3}</p>
          <p>{profile.wanttolern4}</p>
          </div>
        </div>
        <div>
          <h3 className='flex justify-center p-2 bg-[#3C5A81]  text-xl text-white'>Hobby</h3>
          <div className='flex flex-col gap-2 p-4 pl-5 text-xl'>
          <p className=''>{profile.hoby1}</p>
          <p>{profile.hoby2}</p>
          <p>{profile.hoby3}</p>
        </div>
        </div>
        <div>
          <h3 className='flex justify-center p-2 bg-[#3C5A81]  text-xl text-white'>Connect</h3>
          <div className='flex flex-col gap-2 p-4 pl-5 text-xl'>
          <p className=''>{profile.github}</p>
          <p>{profile.lindin}</p>
          <p>{profile.facebook}</p>
        </div>
        </div>
    </div>
  )
}

export default ProfileSideBar