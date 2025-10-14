import { useState } from 'react'
import Information from './components/Information'
import './index.css'
import Data from './assets/data'
import GeneralSec from './components/GeneralSec'
import Output from './components/Output'



function App() {

  const [data, setData] = useState({...Data})

  const [inputShow, setInputShow] = useState(true);
  function handleSubmit(e){
    e.preventDefault();
    setInputShow(false)
  }
  function handleEdit(){
    setInputShow(true)
  }

  return (


    
    <> 
      <div>
        {
          inputShow ? (

            <form onSubmit={handleSubmit} className='md:w-[80%] w-full lg:w-[60%] my-[0] sm:my-[5rem] py-[3rem] mx-auto px-[1rem] md:px-[3rem] shadow-xl flex flex-col'>
          <GeneralSec dataFile={data} setDataFile={setData}/>
          <div className='w-full border-dashed border-1 my-[4rem]'></div>
          <Information dataFile={data} setDataFile={setData}  title='Education' name='School/College' position='Degree' to='Until (Skip if still studying)' idDate={[1, 2]} responsibilities = {false} type='education'/>
          <div className='w-full border-dashed border-1 my-[4rem]'></div>
          <Information dataFile={data} setDataFile={setData} />
          <button type='submit' className='mt-[2rem] px-[1rem] py-[0.5rem] bg-[#f2f7fb] text-black cursor-pointer duration-150 w-[40%] md:w-[20%] mx-auto hover:bg-[#bed6ea] font-semibold'>Submit</button>
        </form>

          ):(
            <div id='output' className=' md:w-[80%] w-full lg:w-[60%] my-[0] sm:my-[5rem]  mx-auto  shadow-xl pb-[5rem]'>
            <Output data={data}/>
            <div id='btnContainer' className='flex items-center justify-center gap-[2rem]'>
                    <button onClick={handleEdit} className='px-[1rem] py-[0.5rem] bg-[#cfd7db] text-black cursor-pointer duration-150 hover:bg-[#6b8493] font-semibold'>Edit</button>
                    <button  className='px-[1rem] py-[0.5rem] bg-[#cfd7db] text-black cursor-pointer duration-150  hover:bg-[#6b8493] font-semibold'>PDF</button>
                </div>
        </div>
          )
        }


        {/* Output Section starts here */}

        


      </div>
    </>
  )
}

export default App
