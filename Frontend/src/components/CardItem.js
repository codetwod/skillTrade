import React from 'react'
const CardItem = ({information}) => {

  return (
    <div className='h-[100%] flex justify-center items-center '>
      {
        // information.id > 4 ? (<div></div>) :
        (<div className='hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition w-[300px] duration-300 ease-in border border-gray-400 rounded-xl hover:scale-110 flex flex-col bg-white h-[350px]'> 
        <h3 className='flex items-center justify-center h-[15%] text-xl font-semibold'>{information.name}</h3>
        <div className='flex items-center justify-center w-full h-[40%] overflow-hidden'><img src={information.image} alt='this cant' className='flex items-center justify-center w-3/4'/></div>
        <div className='pt-4 pl-10 pr-10 text-xs h-[28%]'>{information.info.split(" ").slice(0,20).join(" ") + "..."}</div>
        <div className='flex items-center justify-center w-full h-10'>
          <button className='flex items-center justify-center w-2/3 p-1 mt-2 rounded-md text-black bg-[#ee6c4c88] hover:bg-[#EE6D4C]'> Start Learning</button>
        </div>
        
      </div>)
}
    </div>

    

  )
}

export default CardItem