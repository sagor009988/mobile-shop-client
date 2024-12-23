/* eslint-disable react/prop-types */

const SortByPrice = ({ setSort }) => {
    return (
        <div>
            <select name="price" id="" className="border p-[10px] rounded-lg border-black gap-10" onChange={e => setSort(e.target.value)} >
                <option value="asc">Low to high</option>
                <option value="dsc">High to low</option>

            </select>
        </div>
    );
};

export default SortByPrice;