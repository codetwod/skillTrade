import React from 'react'
import Demanded from './Demanded'

const Skills_Demanded = ({informations}) => {
  return (
    <div>
        <div className='bg-[#E0FBFC]  p-[2%] flex flex-col items-center justify-center '>
                <h3 className='text-4xl'>Advance Your Career. Learn In-demand Skills.</h3>
                <h4 className='text-2xl p-[10px]'>Upskill in business analytics, health care, graphic design, management and more.</h4>
                <div className='flex items-center p-[10px] justify-center'>
                {
                    informations.map((information) => {
                        return(
                        <div>
                            <Demanded information = {information} />
                        </div>
                        )
                    })
                }
                
                </div>
            
                <div className='relative flex mt-3'>
                    <button className=' text-xl pl-10 pr-10 mr-10 rounded-3xl bg-[#99C0D9] p-2'>designer</button>
                {
                    informations.map((information) => {
                        return(
                        <div>
                            <Demanded information = {information} />
                        </div>
                        )
                    })
                }
                </div>                

            </div>
    </div>
  )
}

export default Skills_Demanded