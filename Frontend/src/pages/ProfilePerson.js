import React from 'react';
import SkillsDemanded from '../components/Home/SkillsDemanded';
import SearchBar from '../components/SearchBar';
import Posts from '../components/Posts';
import Profilepost from '../components/profile/Profilepost';
import Footer from '../components/Home/Footer';
const ProfilePerson = ({informations}) => {
  
  return (
    <div className='min-h-screen w-[100vw] bg-[#3C5A81]'>
      
      <SkillsDemanded informations={informations}/>
      <SearchBar/>
      <Posts informations={informations}/>
      <div className='bg-[#3C5A81]'><Profilepost informations = {informations}/></div>
      <Footer/>
    </div>
  )
}

export default ProfilePerson