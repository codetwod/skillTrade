import React from 'react'
import prodata from '../prodata';
import ProfileInfo from '../components/profile/ProfileInfo';
import Footer from '../components/Home/Footer';
import UserSlideBar from '../components/profile/UserSlideBar';

const UserProfile = ({informations}) => {
    let profiles= prodata;
  return (
    <div className='bg-[#E0FBFC]'>
     <div className='flex '>
      <div className=''>
      {
      profiles.map((profile) => {
        return( <ProfileInfo profile={profile}/>)
      })
      }
      </div>
      <div className=''>
      {
      profiles.map((profile) => {
        return( <UserSlideBar profile = {profile}/>)
      })
      }
      </div>
      </div>
       
      <Footer/>
    </div>
  )
}

export default UserProfile