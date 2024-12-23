
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url('https://img.pikbest.com/wp/202347/mobile-phone-accessories-3d-rendering-of-a-design-store-offering-phones-and-for-sale_9763108.jpg!sw800')",
                    backgroundPosition: 'center'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">New Mobile Shop</h1>
                        <p className="mb-5 text-yellow-400 font-style">

                            Discover the latest smartphones and accessories at our mobile shop! Explore top brands, enjoy expert guidance, and find great deals. From phones and tablets to cases and chargers, we have it all. Upgrade today for the ultimate tech experience!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;