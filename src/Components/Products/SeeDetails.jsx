import React, { useEffect, useState } from 'react';
import useUserData from '../../Hooks/useUserData';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SeeDetails = () => {
    const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(product);
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

    return (
        <div className="product-details">
        <img src={product.imageURL} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>Brand: {product.brand}</h2>
        <h2>Price: {product.price} tk</h2>
        <h2>Stock: {product.stock}</h2>
        <h2>Category: {product.category}</h2>
        <h2>Seller Email: {product.sellerEmail}</h2>
      </div>
    );
};

export default SeeDetails;