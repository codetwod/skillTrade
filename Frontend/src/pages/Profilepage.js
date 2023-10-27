import React from 'react'
import prodata from '../prodata';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileSideBar from '../components/profile/ProfileSideBar';
import Profilepost from '../components/profile/Profilepost';
import Footer from '../components/Home/Footer';

const Profilepage = ({informations}) => {
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
        return( <ProfileSideBar profile = {profile}/>)
      })
      }
      </div>
      </div>
       
      <div className='bg-[#3C5A81]'><Profilepost informations = {informations}/></div>
      <Footer/>
    </div>
  )
}

export default Profilepage