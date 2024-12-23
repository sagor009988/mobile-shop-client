/* eslint-disable react/prop-types */

const FeaturedProductCard = ({ product }) => {

    return (
        <div className="card bg-base-100  shadow-xl">
            <figure >
                <img
                    src={product?.image}
                    alt="Product image" className="w-full h-60 object-contain box-content p-2 rounded-lg  shadow-xl" />
            </figure>
            <div className="card-body h-80">
                <h2 className="card-title text-xl font-semibold">MODE: {product?.title}</h2>
                <h2 className="card-title ">Brand: {product?.brand}</h2>
                <h2 className="card-title ">Category: {product?.category}</h2>
                <h2 className="card-title text-blue-600 ">Price: {product?.price} tk.</h2>
                <p>{product?.description.length < 50 ? `${product.description}` : `${product.description.slice(0, 50)}....`}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductCard;