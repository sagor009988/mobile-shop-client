// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";

const Login = () => {
    const { Login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // State to handle login errors
    const [loginError, setLoginError] = useState("");

    const onSubmit = async (data) => {
        try {
            await Login(data.email, data.password);
            setLoginError(""); // Clear any previous error
            navigate("/");
        } catch (error) {
            // Set the error message to show to the user
            setLoginError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen login-bg">
                <div className="flex gap-5 justify-center items-center flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-60">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                          If you have an id ,please login by email and password
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full flex-1 max-w-md shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            {loginError && (
                                <p className="text-red-600 text-sm font-light text-center">{loginError}</p>
                            )}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600 text-sm font-light">Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    {...register("password", { required: true, minLength: 6 })}
                                />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className="card-body">
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <div>
                                <h1>New Here? <Link to='/register'><span className='text-blue-700 cursor-pointer' >Click To Register</span></Link></h1>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
