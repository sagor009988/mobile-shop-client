import React, { useEffect, useState } from "react";
import useUserData from "../../Hooks/useUserData";
import axios from "axios";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [latestData, setLatestData] = useState(true);
  const userData = useUserData();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/wishlist/${userData._id}`);
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error.message);
      }
    };

    if (userData._id) {
      fetchWishlist();
    }
  }, [userData._id, latestData]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await axios.patch("http://localhost:5000/wishlist/remove", {
        userEmail: userData.email,
        productId: productId,
      });

      if (response.data.modifiedCount > 0) {
        // Refresh the wishlist after successful removal
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== productId));
      } else {
        console.error("Failed to remove item from wishlist");
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error.message);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-5">My Wishlist</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Header */}
            <thead className="bg-pink-600 text-white">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.length > 0 ? (
                wishlist.map((product) => (
                  <tr key={product._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask h-25 w-20">
                            <img
                              src={product.imageURL}
                              alt="product img"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-2xl font-semibold">
                      {product.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {product.category}
                      </span>
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                    <th>
                      <button
                        onClick={() => handleRemoveFromWishlist(product._id)}
                        className="btn btn-danger bg-red-600 btn-xs"
                      >
                        Remove
                      </button>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-xl font-semibold">
                    No items in your wishlist.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
