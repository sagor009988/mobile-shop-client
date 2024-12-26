// eslint-disable-next-line no-unused-vars
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";

const Overview = () => {
    const { user } = useAuth();
    const userData=useUserData()
    return (
        <div >

            {
                user ? <div className="w-full  flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src={`${user?.
                            photoURL
                            || '../../../img/userDrop.png'}`} className='rounded-full w-1/2' />
                        <h1 className="text-5xl font-bold mb-8"> {userData.name || user.displayName ||""}</h1>
                        <h1 className="text-5xl font-bold"> {user.email}</h1>
                    </div>
                </div> : <div className="w-full  flex justify-center items-center"><h1 className="text-5xl font-bold">No User Found</h1></div>
            }
        </div>
    );
};

export default Overview;