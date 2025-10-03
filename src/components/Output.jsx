import '../index.css'
import Data from '../assets/data';

function Output() {
    return (
        <>
            
                <div className='flex flex-col items-center w-full bg-[#6b8493] py-[2rem] px-[2rem] ' >
                    <p className='text-4xl font-semibold capitalize'>{Data.name}</p>
                    <div className='w-full flex items-center justify-center my-[2rem] gap-x-[10%] flex-wrap gap-y-[0.5rem]'>
                        <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer font-medium'>
                            <div>
                                <img src="../public/mail.svg" alt="" />
                            </div>
                            <p>{Data.email}</p>
                        </div>
                        <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer capitalize font-medium'>
                            <div>
                                <img src="../public/call.svg" alt="" />
                            </div>
                            <p>{Data.number}</p>
                        </div>
                        <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer capitalize font-medium'>
                            <div>
                                <img src="../public/location.svg" alt="" />
                            </div>
                            <p>{Data.address}</p>
                        </div>

                    </div>
                </div>
                <div className='w-[80%] mx-auto py-[5%]'>
                    <div className=''>
                        <p className='bg-[#cfd7db] text-3xl py-[1rem] font-semibold text-center w-full'>Education</p>
                        <div className='grid grid-cols-2 py-[2rem] font-semibold text-xl'>
                            <div>
                                <p>{Data.education.from} <span className='font-normal'> to</span></p>
                                
                                <p>{Data.education.to}</p>
                            </div>
                            <div>
                                <p className=''>{Data.education.name}</p>
                                <p className='capitalize'>{Data.education.position}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='bg-[#cfd7db] text-3xl py-[1rem] font-semibold text-center w-full text-wrap'>Professional Experience</p>
                        <div className='grid grid-cols-2 py-[2rem] font-semibold text-xl'>
                            <div>
                                <p>{Data.company.from} <span className='font-normal'> to</span></p>
                                
                                <p>{Data.company.to}</p>
                            </div>
                            <div>
                                <p className=''>{Data.company.name}</p>
                                <p className='capitalize'>{Data.company.position}</p>
                            </div>
                        </div>

                        <div>
                            <p className='text-start text-xl  italic'>{Data.company.responsibilities}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Output;