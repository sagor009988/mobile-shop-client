
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import FilterComponent from "../components/Products/Filter"
import AllProductCard from "../components/AllProductCard";
import LoadingPage from "./LoadingPage";
import NodataFound from "./NodataFound";
import SearchBar from "../components/SearchBar"
import SortByPrice from "../components/SortByPrice";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [UniqueCategory, setUniqueCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            axios.get(`http://localhost:5000/all-products?title=${search}&page=${page}&limit=${6}&sort=${sort}&brand=${brand}&category=${category}`).then(res => {
                setProducts(res.data.products);
                setUniqueBrand(res.data.brands);
                setUniqueCategory(res.data.categories);
                setTotalPages(Math.ceil(res.data.totalProducts / 6))
                setLoading(false);
            })
        }
        fetchProducts()
    }, [sort, brand, category, search, page])

    // search field
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target?.search?.value);
        e.target.search.value = "";
    };

    // handle reset

    const handleReset = () => {
        setSearch("");
        setBrand("");
        setCategory("");
        setSort("asc");
        window.location.reload();
    }

    // handlePagination
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    };

    return (
        <div className="container mx-auto  sm:px-4">
            <h1 className="text-4xl font-bold text-center my-4">All Products</h1>
            {/* search and sort */}
            <div className="lg:flex justify-between">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>
            {/* content */}
            <div className="grid lg:grid-cols-12  mt-12 gap-5">
                <div className="col-span-2 bg-slate-300 p-4 rounded-t-lg min-h-fit md:min-h-screen">
                    <FilterComponent setBrand={setBrand} setCategory={setCategory} handleReset={handleReset} uniqueBrand={uniqueBrand} UniqueCategory={UniqueCategory}></FilterComponent>
                </div>
                <div className="md:col-span-10">
                    {
                        isLoading ? <LoadingPage /> : (
                            <>
                                {products.length === 0  ?
                                    <div>
                                        <NodataFound></NodataFound>
                                    </div> :
                                    <div className="min-h-screen grid md:grid-cols-3 gap-8">
                                        {
                                            products.map(product => (
                                                <AllProductCard 
                                                 key={product._id} product={product}></AllProductCard>
                                            ))
                                        }
                                    </div>}
                            </>
                        )
                    }
                    <div className="flex justify-center items-center gap-5 my-5">
                        <button disabled={page == 1} className="btn btn-outline" onClick={() => handlePageChange(page - 1)}>
                            <FaArrowLeft />
                        </button>
                        <p>page <span className="text-blue-600 font-semibold">{page}</span> of <span className="text-blue-600 font-semibold">{totalPages}</span></p>
                        <button disabled={page == totalPages} className="btn btn-outline" onClick={() => handlePageChange(page + 1)}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;