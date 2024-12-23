import Review from "./Review";

const UserReview = () => {
    return (
        <div className="py-8">
            <h1 className="text-5xl text-orange-600 font-bold text-center py-10">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </div>
    );
};

export default UserReview;