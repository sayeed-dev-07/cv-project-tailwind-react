import { useState } from 'react'
import Information from './components/Information'
import './index.css'
import Data from './assets/data'
import GeneralSec from './components/GeneralSec'


function App() {
  

  return (
    <>
      <div className='md:w-[80%] w-full lg:w-[60%] my-[0] sm:my-[5rem] py-[3rem] mx-auto px-[1rem] md:px-[3rem] shadow-xl flex flex-col'>
        <GeneralSec />
        <div className='w-full border-dashed border-1 my-[4rem]'></div>
        <Information title='Education' name='School/College' position='Degree' to='Until (Skip if still studying)' idDate={[1, 2]} responsibilities = {false} />
        <div className='w-full border-dashed border-1 my-[4rem]'></div>
        <Information />
      </div>
    </>
  )
}

export default App
