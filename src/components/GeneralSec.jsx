import { useState } from "react";
import '../index.css'
import Data from "../assets/data";

function GeneralSec({dataFile, setDataFile, dtitle ='Personal Details', dname ='Full Name', demail ='E-Mail', dnumber ='Phone Number', daddress ='Address'}){
    const {name, email, address, number} = dataFile;
    const [fname, setfName] = useState(name)
    const [femail, setfEmail] = useState(email)
    const [fnumber, setfnumber] = useState(number)
    const [fAdd, setfAdd] = useState(address)
    
    function handleChangeName(e){
        const val = e.target.value;
        setfName(val);
        setDataFile((prev) => ({ ...prev, name: val }));
    }
    function handleChangeEmail(e){
        const val = e.target.value;
        setDataFile((prev) => ({ ...prev, email: val }));
    }
    function handleChangeNumber(e){
       const val = e.target.value;
       setDataFile((prev) => ({ ...prev, number: val }));
    }
    function handleChangeAdd(e){
        const val = e.target.value;
        setDataFile((prev) => ({ ...prev, address: val }));
    }

    return (
        <>
            <div className="flex flex-col gap-y-[1rem]">
                <p className="text-3xl font-semibold">{dtitle}</p>
                <div className="mt-[1rem] flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="name">{dname} <span className="text-[crimson]">*</span></label>
                    <input onChange={handleChangeName}  placeholder="eg : Sayeed Shorif" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" value={fname} id="name" type="text"/>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="email">{demail} <span className="text-[crimson]">*</span></label>
                    <input onChange={handleChangeEmail} value={femail} placeholder="eg : expsayeedshorif@gmail.com" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="email" type="email" />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="number">{dnumber} <span className="text-[crimson]">*</span></label>
                    <input onChange={handleChangeNumber} value={fnumber} placeholder="eg : 01727482794" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="number" type="number"/>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="address">{daddress} <span className="text-[crimson]">*</span></label>
                    <input value={fAdd} onChange={handleChangeAdd} required placeholder="eg : Gulshan, Dhaka" className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="address" type="text" />
                </div>
            </div>
        </>
    )
}
export default GeneralSec