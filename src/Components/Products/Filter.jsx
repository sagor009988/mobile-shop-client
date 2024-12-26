
import React from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { RiResetLeftLine } from "react-icons/ri";


// eslint-disable-next-line no-unused-vars
const FilterComponent = ({ handleReset, setCategory, setBrand, uniqueBrand, UniqueCategory }) => {
    return (
        <div>
            <div className="flex items-center gap-3 justify-center ">
                <AiOutlineFilter size={24} />
                <h1 className="text-2xl font-semibold">Filter</h1>
            </div>
            <div className="mt-5 flex flex-col items-center gap-4">
                <div className="w-full">
                    <select className="p-[10px] w-full border  border-black rounded-lg" name="" id="" onChange={e => setBrand(e.target.value)}>
                        <option disabled selected>Brand</option>
                        {
                            uniqueBrand.map(brand => (
                                <option key={brand} >{brand}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full">
                    <select className="p-[10px] w-full border  border-black rounded-lg" name="" id="" onChange={e => setCategory(e.target.value)}>
                        <option disabled selected>Category</option>

                        {
                            UniqueCategory.map(category => (
                                <option key={category} >{category}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <button onClick={handleReset} className="btn btn-primary w-full mt-4"> <h1>Reset</h1><RiResetLeftLine /></button>
        </div>
    );
};

export default FilterComponent;