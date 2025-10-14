import '../index.css';

function Output({ data }) {
    // Destructure education and company safely
    const { name: eduName, position: eduPos, from: eduFrom, to: eduTo } = data.education || {};
    const { name: compName, position: compPos, from: compFrom, to: compTo, responsibilities } = data.company || {};
    const { name, email, number, address } = data;

    return (
        <>
            <div className='flex flex-col items-center w-full bg-[#6b8493] py-[2rem] px-[2rem]'>
                <p className='text-4xl font-semibold capitalize'>{name}</p>
                <div className='w-full flex items-center justify-center my-[2rem] gap-x-[10%] flex-wrap gap-y-[0.5rem]'>
                    <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer font-medium'>
                        <div>
                            <img src="/mail.svg" alt="mail" />
                        </div>
                        <p>{email}</p>
                    </div>
                    <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer capitalize font-medium'>
                        <div>
                            <img src="/call.svg" alt="phone" />
                        </div>
                        <p>{number}</p>
                    </div>
                    <div className='flex text-2xl items-center gap-x-[0.5rem] cursor-pointer capitalize font-medium'>
                        <div>
                            <img src="/location.svg" alt="location" />
                        </div>
                        <p>{address}</p>
                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto py-[5%]'>
                {/* Education */}
                <div>
                    <p className='bg-[#cfd7db] text-3xl py-[1rem] font-semibold text-center w-full'>Education</p>
                    <div className='grid grid-cols-2 py-[2rem] font-semibold text-xl'>
                        <div>
                            <p>{eduFrom} <span className='font-normal'> to </span>{eduTo || 'N/A'}</p>
                        </div>
                        <div>
                            <p>{eduName}</p>
                            <p className='capitalize'>{eduPos || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Professional Experience */}
                <div>
                    <p className='bg-[#cfd7db] text-3xl py-[1rem] font-semibold text-center w-full'>Professional Experience</p>
                    <div className='grid grid-cols-2 py-[2rem] font-semibold text-xl'>
                        <div>
                            <p>{compFrom} <span className='font-normal'> to </span>{compTo || 'N/A'}</p>
                        </div>
                        <div>
                            <p>{compName}</p>
                            <p className='capitalize'>{compPos || 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-start text-xl italic'>{responsibilities || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Output;
