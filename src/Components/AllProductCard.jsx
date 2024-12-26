/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./allProductCard.css";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import axios from "axios";
import useUserData from "../Hooks/useUserData";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const AllProductCard = ({ product }) => {
  const { user } = useAuth();

  const userData = useUserData();

  const userEmail = userData?.email ? userData.email : user?.email;

  // add wishlist
  const handleAddToWishList = async () => {
    await axios
      .patch("http://localhost:5000/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if(res.data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added to wishlist",
                showConfirmButton: false,
                timer: 1500,
              });
        }
      });
      
  };


  //   add cart
  const handleAddToCartList = async () => {
    await axios
      .patch("http://localhost:5000/cart/add", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if(res.data.modifiedCount){
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to wishlist",
              showConfirmButton: false,
              timer: 1500,
            });
      }
      });
  };

  return (
    <div>
      <div className="AllProductCard  p-4 rounded-xl shadow-2xl">
        <figure className="w-full">
          <img
            src={product?.imageURL}
            alt="Product image"
            className="w-full h-[300px]  object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{product?.title}</h2>
          <h2 className=" ">Brand: {product?.brand}</h2>
          <h2 className=" ">Category: {product?.category}</h2>
          <h2 className=" text-blue-600 ">Price: {product?.price} tk.</h2>
          <h2 className="text-rose-600">Stock: {product?.stock}</h2>
          <p>
            {product?.description.length < 30
              ? `${product.description}`
              : `${product.description.slice(0, 20)}....`}
          </p>
          <div className="card-actions justify-between">
            <button onClick={handleAddToCartList} disabled={userData?.role==="Seller" || userData?.role==="Admin"}  className="btn btn-outline">
              Add to cart
              <span>
                <BsCart4 />
              </span>
            </button>
            <button onClick={handleAddToWishList} disabled={userData?.role==="Seller" || userData?.role==="Admin"} className="btn btn-outline">
              Add to wishlist
              <span>
                <FaRegHeart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
