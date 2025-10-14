import { useState } from "react";
import '../index.css'

function Information({ dataFile, setDataFile, title = 'Work', subTitle = 'Details', name = 'Company', position = 'Position', from = 'From', to = 'Until (Skip if still working)', responsibilities = true, idDate = [3, 4], type = 'company' }) {

    const [localState, setLocalState] = useState(dataFile[type]);
    function handleChange(e) {
        const { name, value } = e.target;

        // update local state
        setLocalState((prev) => ({
            ...prev,
            [name]: value
        }));

        // update parent data file
        setDataFile((prev) => ({
            ...prev,
            [type]: {
                ...prev[type],
                [name]: value
            }
        }));
    }

    return (
        <>
            <div className="flex flex-col gap-y-[1rem]">
                <p className="text-3xl font-semibold">{title}</p>
                <p className="text-xl font-semibold">{subTitle}</p>
                <div className="grid gap-y-[0.6rem] grid-cols-1 xl:grid-cols-2 items-center gap-x-[3rem]">
                    <div className="flex flex-col gap-y-[0.3rem]">
                        <label className="font-medium text-xl" htmlFor={name}>{name} <span className="text-[crimson]">*</span></label>
                        <input name='name' required onChange={handleChange} className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id={name} type="text" />
                    </div>
                    <div className="flex flex-col gap-y-[0.3rem]">
                        <label className="font-medium text-xl" htmlFor={position}>{position} <span className="text-[crimson]">*</span></label>
                        <input onChange={handleChange} name='position' required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id={position} type="text" />
                    </div>
                </div>
                <div className="gap-y-[0.6rem] grid grid-cols-1 xl:grid-cols-2 items-center gap-x-[3rem] ">
                    <div className="flex flex-col gap-y-[0.3rem]">
                        <label className="font-medium text-xl" htmlFor={idDate[0]}>{from} <span className="text-[crimson]">*</span></label>
                        <input onChange={handleChange} name="from" required className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id={idDate[0]} type="date" />
                    </div>
                    <div className="flex flex-col gap-y-[0.3rem]">
                        <label className="font-medium text-xl" htmlFor={idDate[1]}>{to} </label>
                        <input name="to" onChange={handleChange} className="text-xl bg-[#f2f7fb] outline-0 py-[0.2rem] px-[0.5rem]" id={idDate[1]} type="date" />
                    </div>
                </div>
                {
                    responsibilities && (
                        <div className="flex flex-col gap-y-[0.3rem]">
                            <label className="font-medium text-xl" htmlFor='comment'>Main responsibilities</label>
                            <textarea onChange={handleChange} className="h-[130px] outline-0 resize-none p-[0.5rem] bg-[#f2f7fb]" name="responsibilities" id="comment"></textarea>
                        </div>
                    )
                }

            </div>
        </>
    )
}
export default Information;