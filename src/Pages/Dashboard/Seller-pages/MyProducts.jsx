// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
    console.log(products);
    
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products"); // Replace with your backend URL
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center py-4 ">Product List</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-600 text-white">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.imageURL} 
                          alt={"product img"}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">{product.category}</span>
                </td>
                <td>
                  {product.stock}
                </td>
                <td>${product.price.toFixed(2)}</td>
                <th>
                  <button className="btn btn-danger bg-red-600 btn-xs">Remove</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
