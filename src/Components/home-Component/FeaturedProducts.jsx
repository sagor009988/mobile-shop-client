// eslint-disable-next-line no-unused-vars
import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: 'iPhone 14',
            price: '$799',
            image: 'https://www.91-img.com/gallery_images_uploads/c/0/c017a185b06d96262ab1931e1ac48d61a1cb0f8b.jpg?tr=h-630,c-at_max,q-80',
            description: 'Experience the future with the powerful iPhone 14, featuring advanced cameras and A15 Bionic chip.'
        },
        {
            id: 2,
            title: 'Samsung Galaxy S23',
            price: '$749',
            image: 'https://image-us.samsung.com/us/smartphones/galaxy-s23/compare/images/galaxy-s23-ultra-compare-green-s.jpg',
            description: 'Revolutionary design and performance with Samsung Galaxy S23, built for high-end users.'
        },
        {
            id: 3,
            title: 'Google Pixel 7',
            price: '$599',
            image: 'https://www.designinfo.in/wp-content/uploads/2023/04/Google-Pixel-7-Pro-128GB-Snow-Sealed-Packed-Imported-485x485-optimized.webp',
            description: 'Capture the world with Google Pixel 7, known for its extraordinary camera and clean software.'
        },
        {
            id: 4,
            title: 'OnePlus 11',
            price: '$649',
            image: 'https://www.oneplus.com/content/dam/oasis/product-asset-library/salami/en/images-kv-mo-1.png.webp',
            description: 'Speed and smoothness redefined with OnePlus 11, featuring the latest Snapdragon chipset.'
        },
        {
            id: 5,
            title: 'Xiaomi 13 Pro',
            price: '$699',
            image: 'https://www.dslr-zone.com/wp-content/uploads/2024/06/1-104.jpg',
            description: 'Premium design meets unbeatable features with Xiaomi 13 Pro, perfect for modern tech lovers.'
        },
        {
            id: 6,
            title: 'Sony Xperia 1 V',
            price: '$999',
            image: 'https://m.media-amazon.com/images/I/41CyTdMv5KL._AC_UF1000,1000_QL80_.jpg',
            description: 'Designed for creators, Sony Xperia 1 V offers exceptional audio and video performance.'
        },
    ];

    return (
        <div className="py-8">
            <h1 className="text-5xl text-orange-600 font-bold text-center py-10">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-11 pt-5">

                {
                    products.map((product, i) => (
                        <FeaturedProductCard key={i} product={product}></FeaturedProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;