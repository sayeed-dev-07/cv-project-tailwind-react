import { useState } from "react";
import '../index.css'

function GeneralSec({ dataFile, setDataFile, dtitle ='Personal Details', dname ='Full Name', demail ='E-Mail', dnumber ='Phone Number', daddress ='Address'}) {
    
    const [localState, setLocalState] = useState({
        name: dataFile.name,
        email: dataFile.email,
        number: dataFile.number,
        address: dataFile.address
    });

    function handleChange(e) {
    const { name, value } = e.target;

    // update local state
    setLocalState(prev => ({
        ...prev,
        [name]: value
    }));

    // update parent data file at root level
    setDataFile(prev => ({
        ...prev,
        [name]: value
    }));
}


    return (
        <div className="flex flex-col gap-y-[1rem]">
            <p className="text-3xl font-semibold">{dtitle}</p>
            <div className="mt-[1rem] flex flex-col gap-y-[0.3rem]">
                <label className="font-medium text-xl" htmlFor="name">{dname} <span className="text-[crimson]">*</span></label>
                <input
                    name="name"
                    value={localState.name}
                    onChange={handleChange}
                    placeholder="eg : Sayeed Shorif"
                    required
                    className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]"
                    id="name"
                    type="text"
                />
            </div>
            <div className="flex flex-col gap-y-[0.3rem]">
                <label className="font-medium text-xl" htmlFor="email">{demail} <span className="text-[crimson]">*</span></label>
                <input
                    name="email"
                    value={localState.email}
                    onChange={handleChange}
                    placeholder="eg : expsayeedshorif@gmail.com"
                    required
                    className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]"
                    id="email"
                    type="email"
                />
            </div>
            <div className="flex flex-col gap-y-[0.3rem]">
                <label className="font-medium text-xl" htmlFor="number">{dnumber} <span className="text-[crimson]">*</span></label>
                <input
                    name="number"
                    value={localState.number}
                    onChange={handleChange}
                    placeholder="eg : 01727482794"
                    required
                    className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]"
                    id="number"
                    type="number"
                />
            </div>
            <div className="flex flex-col gap-y-[0.3rem]">
                <label className="font-medium text-xl" htmlFor="address">{daddress} <span className="text-[crimson]">*</span></label>
                <input
                    name="address"
                    value={localState.address}
                    onChange={handleChange}
                    placeholder="eg : Gulshan, Dhaka"
                    required
                    className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]"
                    id="address"
                    type="text"
                />
            </div>
        </div>
    )
}

export default GeneralSec;
