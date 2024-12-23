import { useForm } from 'react-hook-form';

import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onsubmit = (data) => {
        const title = data.title;
        const brand = data.brand;
        const price = parseFloat(data.price);
        const stock = parseFloat(data.stock);
        const category = data.category;
        const imageURL = data.imageURL;
        const description = data.description;
        const sellerEmail = user.email

        const product = {
            title, brand, price, stock, category, imageURL, description, sellerEmail
        }

        const token = localStorage.getItem("access-token");
        axios.post("http://localhost:5000/add-products", product, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added successfully !!!",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <div className='add-bg'>
            <h1 className='text-3xl font-bold text-center '>Add products</h1>

            <div>
                <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
                    {/* first */}
                    <div className='flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Title" className="input input-bordered"
                                {...register("title", { required: true, })}
                            />
                            {errors.title?.type == "required" && (<p className='text-red-600 text-sm font-light'>Title is required </p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" placeholder="Brand" className="input input-bordered"
                                {...register("brand", { required: true, })}
                            />
                            {errors.brand?.type == "required" && (<p className='text-red-600 text-sm font-light'>Brand is required </p>)}
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className='flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered"
                                {...register("price", { required: true, })}
                            />
                            {errors.price?.type == "required" && (<p className='text-red-600 text-sm font-light'>Price is required </p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" placeholder="Stock" className="input input-bordered"
                                {...register("stock", { required: true, })}
                            />
                            {errors.stock?.type == "required" && (<p className='text-red-600 text-sm font-light'>Stock is required </p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Category" className="input input-bordered"
                                {...register("category", { required: true, })}
                            />
                            {errors.category?.type == "required" && (<p className='text-red-600 text-sm font-light'>Category is required </p>)}
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className=''>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" placeholder="Image Url" className="input input-bordered"
                                {...register("imageURL", { required: true })}
                            />
                            {errors.imageURL?.type == "required" && (<p className='text-red-600 text-sm font-light'>Image url is required </p>)}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="textarea" placeholder="Product description" className="input input-bordered"
                            {...register("description", { required: true, })}
                        />
                        {errors.description?.type == "required" && (<p className='text-red-600 text-sm font-light'>Email is required </p>)}
                    </div>

                    <div className='w-full p-6'>
                        <button type='submit' className='btn btn-primary w-full '>Add new Product </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;