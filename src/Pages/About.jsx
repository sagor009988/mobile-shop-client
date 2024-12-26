// eslint-disable-next-line no-unused-vars
import React from "react";
const About = () => {
    return (
        <div className="max-w-screen-xl about-bg mx-auto p-5">

            <header className="text-center py-20 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
                <h1 className="text-4xl font-extrabold">Welcome to Mobile Shop</h1>
                <p className="text-xl mt-4">Your one-stop destination for all your mobile needs!</p>
            </header>


            <section className="py-12">
                <h2 className="text-3xl font-semibold text-green-600 text-center">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center">
                    Our mission is to make mobile shopping effortless, affordable, and accessible for all. We connect buyers with trusted sellers while ensuring a seamless and secure shopping experience.
                </p>
            </section>


            <section className="py-12 bg-gray-50">
                <h2 className="text-3xl font-semibold text-green-600 text-center">What We Offer</h2>
                <ul className="mt-8 space-y-4 max-w-2xl mx-auto text-lg text-gray-700">
                    <li className="flex items-center space-x-3">
                        <span className="text-green-600">✔</span>
                        <p>Wide Product Range: Explore our extensive collection of mobile phones, accessories, and gadgets from top brands.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="text-green-600">✔</span>
                        <p>Verified Sellers: Buy with confidence from our verified sellers who provide quality products and excellent service.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="text-green-600">✔</span>
                        <p>Easy Navigation: Enjoy user-friendly search, filtering, and sorting options to find exactly what you're looking for.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="text-green-600">✔</span>
                        <p>Secure Shopping: We prioritize your safety by implementing robust security measures for all transactions.</p>
                    </li>
                </ul>
            </section>


            <section className="py-12">
                <h2 className="text-3xl font-semibold text-green-600 text-center">Why Choose Mobile Shop?</h2>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center">
                    We ensure transparency and trust between buyers and sellers, deliver innovative features, and build a community-focused platform for all users.
                </p>
                <div className="text-center mt-8">
                    <button className="bg-green-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-700 transition duration-300">
                        Join Us Today
                    </button>
                </div>
            </section>
        </div>
    )
}

export default About