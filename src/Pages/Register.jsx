// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser } = useAuth();
  // have to use react hook form to take form value

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSubmitRegister = (data) => {

    const email = data.email;
    const role = data.role;
    const name=`${data.firstName} ${data.lastName || ""}`;
    const status = role == "Buyer" ? "approved" : "pending";
    const wishlist = [];
    const cart = [];
    const userData = {name, email, role, status, wishlist, cart };
    CreateUser(data.email, data.password).then(() => {
      axios.post("http://localhost:5000/users", userData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your registration successful!!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen reg-bg">
      <div className="flex flex-col m-5 max-w-xl lg:flex-row-reverse justify-center items-center gap-5 ">
        <div className="text-center lg:text-left bg-slate-100 max-w-md p-6">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 ">
            If you new Here please registration to get exciting
          </p>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form
            className="card-body"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <div className="flex gap-4 w-full">
              {/* first Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  {...register("firstName", { required: true, minLength: 2 })}
                />
                {errors.firstName?.type == "required" && (
                  <p className="text-red-600 text-sm font-light">
                    First name is required{" "}
                  </p>
                )}
              </div>
              {/* last Name */}

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  {...register("lastName", { minLength: 2 })}
                />
              </div>
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true, minLength: 6 })}
              />
              {errors.email?.type == "required" && (
                <p className="text-red-600 text-sm font-light">
                  Email is required{" "}
                </p>
              )}
            </div>
            <div className="flex gap-4 ">
              {/* password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must include at least one uppercase letter.",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password must include at least one lowercase letter.",
                      hasNumber: (value) =>
                        /[0-9]/.test(value) ||
                        "Password must include at least one number.",
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                        "Password must include at least one special character.",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 text-sm font-light">
                    Password is required.
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-sm font-light">
                    Password must have at least 8 characters.
                  </p>
                )}
                {errors.password?.message && (
                  <p className="text-red-600 text-sm font-light">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* password  end */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "Your password don't matched";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm font-light">
                    Please match The password
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", {
                  required: true,
                })}
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-600 text-sm font-light">
                  Please match The password
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="card-body">
            <div>
              <GoogleLogin></GoogleLogin>
            </div>
            <div>
              <h1>
                Already have an account{" "}
                <Link to="/login">
                  <span className="text-blue-700 cursor-pointer">
                    Click to Login
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
