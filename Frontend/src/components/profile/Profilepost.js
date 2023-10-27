import React from 'react'
import ProfileItem from './ProfileItem'

const Profilepost = ({informations}) => {
  return (
    <div>
      <h2 className='flex justify-center p-5 text-3xl text-white pt-7'>More Profile</h2>
      <div className='flex flex-wrap justify-center pb-7'>
        {
          informations.map((information) => {
            return(<ProfileItem information={information}/>)
          })
        }
      </div>
    </div>
  )
}

export default Profilepost