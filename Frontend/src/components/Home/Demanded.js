import React from 'react'

const Demanded = ({information}) => {
  return (
    information.id > 5 ? (<div></div>) :
    (<div className='gap-3 pr-10'>
        <button className='gap-10 text-xl pl-10 pr-10 rounded-3xl bg-[#99C0D9] p-2'>{information.name}</button>
    </div>)
  )
}

export default Demanded