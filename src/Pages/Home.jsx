// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../components/home-Component/Banner";
import FaqSection from "../components/home-Component/FaqSection";
import FeaturedProducts from "../components/home-Component/FeaturedProducts";
import UserReview from "../components/home-Component/UserReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <UserReview></UserReview>
            {/* categories need */}

            {/* Faq section */}
            <div className="py-8">
                <h1 className="text-5xl text-orange-600 font-bold text-center py-10">Faq About Mobile shop</h1>

                <FaqSection></FaqSection>

            </div>
        </div>
    );
};

export default Home;