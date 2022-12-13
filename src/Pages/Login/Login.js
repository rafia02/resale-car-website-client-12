import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';

const Login = () => {
  const {login, googleUser} = useContext(AuthContex)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm();


  const handleLogin = (data, e) => {

    login(data.email, data.password)
    .then(res =>{
      const user = res.user 
      console.log(user)
      toast.success('successfully login')
      setError('')
      e.target.reset()
      navigate(from, {replace: true})
    })
    .catch(e => {
      console.error(e)
    setError(e.message)
    })
  }





  return (
    <div className='w-1/2 mx-auto  p-10 my-20 shadow-lg bg-pink-100'>

      <h1 className="text-3xl font-bold text-center">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)} className="card-body">

        <label className="flex flex-col mb-2">
          <span className="label-text mb-2">Email</span>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
        </label>



        <label className="flex flex-col mb-2">
          <span className="label-text mb-2">Password</span>
          <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
          <p className="text-red-600">{error}</p>
        </label>



        <input className=' btn bg-gradient-to-r from-purple-500 to-pink-500' type="submit" />
        
      </form>
            <p className="text-center mt-5">New to this website? Please <Link className='text-pink-600 font-bold' to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;