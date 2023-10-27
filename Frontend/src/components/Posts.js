
import CardItem from './CardItem';
const Posts = ({informations}) => {
    
  return (

        <div className='w-screen '>
        
            <div className='bg-[#3C5A81] p-10 min-h-[450px] pl-10 gap-10 flex-wrap flex w-[100%] justify-center items-center '>
                {
                    informations.map((information) => {
                        return(<CardItem information = {information} key={information.id} />
                        )
                    })
                }
            </div>
        </div>  

  )
}

export default Posts