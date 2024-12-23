import { FadeLoader } from "react-spinners";

const LoadingPage = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <FadeLoader
                color="#87CEEB"
                loading={true}

                size={150}

            />
        </div>
    );
};

export default LoadingPage;