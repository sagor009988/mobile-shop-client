/* eslint-disable react/prop-types */

import axios from "axios";

import Swal from "sweetalert2";
import useUserData from "../Hooks/useUserData";

const AllProductCard = ({ product }) => {
    const userData = useUserData();
    const userEmail = userData.email;


    //send data handle wishlist server

    const handleWishlist = async () => {
        await axios.patch("http://localhost:5000/wishlist/add", { userEmail: userEmail, productId: product._id }).then((res) => {
            if (res.data.
                modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration successful !!!",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })


    }

    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="h-60">
                    <img
                        src={product?.imageURL}
                        alt="Product image" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold">MODE: {product?.title}</h2>
                    <h2 className="card-title ">Brand: {product?.brand}</h2>
                    <h2 className="card-title ">Category: {product?.category}</h2>
                    <h2 className="card-title text-blue-600 ">Price: {product?.price} tk.</h2>
                    <h2 className="text-rose-600">Stock: {product?.stock}</h2>
                    <p>{product?.description.length < 30 ? `${product.description}` : `${product.description.slice(0, 20)}....`}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleWishlist} className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;