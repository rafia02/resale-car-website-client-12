import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';

const Signup = () => {
    const { signup, profileupdate, googleUser } = useContext(AuthContex)
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();




    const handleSignup = (data, e) => {
        console.log(data)
       

        signup(data.email, data.password)
        .then(res =>{
            const user = res.user
            console.log(user)
            setError('')
            handleUpdate(data.name)
            

            const saveuser ={
                name: data.name,
                role: data.category,
                email: user.email,
                phone: data.phone,
                status: "unverified"
            }

            handleSaveuser(saveuser)

            toast.success('successfully sign up')
            e.target.reset()
          
        })
        .catch(e => {
            console.error(e)
            setError(e.message)
        })
       
    }



    const handleSaveuser = (saveuser)=>{
        fetch(`https://resale-car-server-12.vercel.app/users`,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(saveuser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
            .catch(e => console.error(e))
    }


    const handleUpdate =(name, phone)=>{ 
        const profile ={
            displayName: name
        }
        profileupdate(profile)
        .then(()=>{})
        .catch(e => console.error(e))
    }

    

    const handleGoogle =()=>{
        const providerr = new GoogleAuthProvider();
        googleUser(providerr)
        .then((res)=>{
            const user = res.user
            console.log(user.email, user.displayName)
            
            const saveuser ={
                name: user.displayName,
                email: user.email,
                role: 'Buyer',
                status: "unverified"
            }
            handleSaveuser(saveuser)
            toast.success('Successful Google Singup')
        })
        .catch((error)=>console.log(error))
    }



    return (
        <div className='w-1/2 mx-auto border  p-10 my-20 shadow-lg bg-pink-50'>
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>

            <form onSubmit={handleSubmit(handleSignup)} className="card-body">

                <label className="flex flex-col mb-2">
                    <span className="label-text mb-2">Name</span>
                    <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                </label>

                
                <label className="flex flex-col mb-2">
                    <span className="label-text mb-2">Email</span>
                    <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                </label>



                <label className="flex flex-col mb-2">
                    <span className="label-text mb-2">Phone</span>
                    <input type="text" {...register("phone")} placeholder="phone" className="input input-bordered" />
                </label>



                <label className="flex flex-col mb-2">
                    <span className="label-text mb-2">Password</span>
                    <input type="password" {...register("password")} placeholder="password" className="input mb-2 input-bordered" />
                    <p className="text-red-600">{error}</p>
                </label>



                <label className="flex flex-col mb-2">
                    <span className="label-text mb-2">Choose a catagory</span>
                    <select {...register("category", { required: true })} className="select select-bordered ">
                        <option>Buyer </option>
                        <option>Seller</option>

                    </select>
                </label>
                <input className=' btn bg-gradient-to-r from-purple-500 to-pink-600' value="Signup" type="submit" />
        <p className="text-2xl font-bold text-center mt-2">Or</p>

            </form>


            <div className='px-8'>
            <input onClick={handleGoogle} className=' btn bg-gradient-to-r from-pink-300 to-pink-600 w-full' value="sign up with google" type="submit" />

            </div>
            <p className="text-center mt-4">Do you have an account? Please <Link className='text-pink-600 font-bold' to="/login">Login</Link></p>

        </div>
    );
};

export default Signup;