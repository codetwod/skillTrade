import React from 'react';
import {BiSearch} from 'react-icons/bi';
const SearchBar = () => {
  return (
    <div>
        <p className='flex justify-center p-3 text-3xl '>Search the skill you want to learn</p>
        <div className='flex justify-center'>
            <div className='flex justify-center w-screen'>
                <input type='text' className='bg-[#d9d9d925] w-2/4 h-10 rounded-3xl p-2 ' name='search'></input>
                    <div className='relative text-2xl text-white -left-8 top-2'><BiSearch></BiSearch></div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar