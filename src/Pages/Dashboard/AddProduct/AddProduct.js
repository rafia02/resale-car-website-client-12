import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContex } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()


    const { data: catagories = [] } = useQuery({
        queryKey: ['catagori'],
        queryFn: async () => {
            const res = await fetch('https://resale-car-server-12.vercel.app/catagories')
            const data = await res.json()
            return data
        }
    })

    const date = new Date()
    const dd = date.getDate()
    const mm = date.getMonth()
    const yy = date.getFullYear()

    const time = `${dd}-${mm}-${yy}`
 

    const handleAddProduct = (data, e) => {
        console.log(data)
        const name = e.target.name.value

        const addproduct = {
            catagori: data.catagori,
            name,
            title: data.title,
            location: data.location,
            resale_price: data.resale,
            orginal_price: data.orginal,
            time,
            year: data.year,
            condition: data.condition,
            img: data.img,
            email: user.email
        }





        fetch(`https://resale-car-server-12.vercel.app/addproducts`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addproduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(e => console.error(e))













        fetch(`https://resale-car-server-12.vercel.app/products`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addproduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('sucessfully added your product')
                e.target.reset()
                navigate('/dashbord/myproduct')
            }
        })
        .catch(e => console.error(e))



    




    }





    return (
        <div>
            <h1 className="text-2xl font-bold text-pink-600 text-center my-5">Add A Product</h1>
            <div className='w-2/3 mx-auto shadow-lg bg-pink-100'>
                <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">

                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Name</span>
                        <input type="text" name="name" disabled value={user?.displayName} placeholder="name" className="input input-bordered" />
                    </label>




                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Product Name</span>
                        <input type="text" {...register("title")} placeholder="Product Name" className="input input-bordered" />
                    </label>

                    
                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Image Url</span>
                        <input type="text" {...register("img")} placeholder="img url" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Resale Price</span>
                        <input type="text" {...register("resale")} placeholder="resale_price" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Orginal price</span>
                        <input type="text" {...register("orginal")} placeholder="orginal price" className="input input-bordered" />
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Phone</span>
                        <input type="text" {...register("phone")} placeholder="phone" className="input input-bordered" />
                    </label>



                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Location</span>
                        <input type="text" {...register("location")} placeholder="location" className="input input-bordered" />
                    </label>



                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Year of use</span>
                        <input type="text" {...register("year")} placeholder="year" className="input input-bordered" />
                    </label>






                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Choose a catagory</span>


                        <select {...register("catagori", { required: true })} className="select select-bordered ">
                            {
                                catagories?.map((cata) => <option key={cata._id} value={cata.catagori}>{cata.catagori}</option>)
                            }

                        </select>
                    </label>


                    <label className="flex flex-col mb-2">
                        <span className="label-text mb-2">Condition</span>
                        <select {...register("condition", { required: true })} className="select select-bordered ">
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>

                        </select>
                    </label>



                    <input className=' btn bg-gradient-to-r from-purple-500 to-pink-600' value="Add product" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;