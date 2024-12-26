/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

const SellerTable = () => {
  const [sellers, setSellers] = useState([]);

  // Fetch sellers
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        const allUsers = response.data;
        const filteredSellers = allUsers.filter((user) => user.role === "Seller");
        setSellers(filteredSellers);
      } catch (error) {
        console.error("Error fetching sellers:", error.message);
      }
    };

    fetchSellers();
  }, []);

  // Handle status change
  const handleChangeStatus = async (id, status) => {
    const newStatus = status === "approved" ? "blocked" : "approved";
    try {
      const response = await axios.patch(`http://localhost:5000/users/${id}/status`, {
        status: newStatus,
      });

      if (response.data.modifiedCount > 0) {
        setSellers((prev) =>
          prev.map((seller) =>
            seller._id === id ? { ...seller, status: newStatus } : seller
          )
        );
        alert(`User status updated to ${newStatus}`);
      }
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-5">Seller Management</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={seller._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{seller.name || "Unknown"}</td>
                <td className="border border-gray-300 px-4 py-2">{seller.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-center capitalize">
                  {seller.status || "pending"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleChangeStatus(seller._id, seller.status)}
                    className={`btn btn-sm ${
                      seller.status === "approved" ? "btn-danger" : "btn-success"
                    }`}
                  >
                    {seller.status === "approved" ? "Block" : "Approve"}
                  </button>
                </td>
              </tr>
            ))}
            {sellers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No sellers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerTable;
