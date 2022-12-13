import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto my-10'>
            <img className='w-1/2 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            <h1 className="text-3xl text-yellow-500 font-bold text-center my-5">This page is not found</h1>
            <div className='text-center'>
            <Link to="/" className='btn btn-xs  bg-gradient-to-r from-yellow-500 to-yellow-600'>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;




