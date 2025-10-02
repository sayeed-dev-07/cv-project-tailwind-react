import { useState } from "react";
import '../index.css'
import Data from "../assets/data";

function GeneralSec({title ='Personal Details', name ='Full Name', email ='E-Mail', number ='Phone Number', address ='Address'}){

    return (
        <>
            <div className="flex flex-col gap-y-[1rem]">
                <p className="text-3xl font-semibold">{title}</p>
                <div className="mt-[1rem] flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="name">{name} <span className="text-[crimson]">*</span></label>
                    <input placeholder="eg : Sayeed Shorif" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="name" type="text" />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="email">{email} <span className="text-[crimson]">*</span></label>
                    <input placeholder="eg : expsayeedshorif@gmail.com" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="email" type="email" />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="number">{number} <span className="text-[crimson]">*</span></label>
                    <input placeholder="eg : 01727482794" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="number" type="number"/>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                    <label className="font-medium text-xl" htmlFor="address">{address} <span className="text-[crimson]">*</span></label>
                    <input required placeholder="eg : Gulshan, Dhaka" className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id="address" type="text" />
                </div>
            </div>
        </>
    )
}
export default GeneralSec