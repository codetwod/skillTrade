import axios from "axios";
import { useEffect, useState } from "react";
// import data from '../data';
import data from '../data';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

 const useProfile = () => {
  const [informations,setinformations] = useState('');
  const [loading ,setloading] = useState(false);
//   const url1 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  const url2 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    let fgf = data ; 
    const ii = data;
  useEffect (()=>{
    fectData();
  },[]);
 
  async function fectData(){
    setloading(true);
    // const {data} =  await axios.get(fgf);
    const info = ii;
    setinformations(info);
    setloading(false);
  }
    return {informations,fectData,loading} 
}

export default useProfile;