import React from 'react';
import { FaCheck } from 'react-icons/fa'



const SingleAdd = ({ad}) => {
  const { img, catagori, condition, name, title, location, orginal_price, resale_price, year, status, time } = ad



  

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-full' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className=' font-bold'>Product Description :</p>
          <div className='flex flex-col gap-2 '>
            <span className='text-pink-600 font-bold'>Brand : {catagori}</span>
            <span>Orginal Price : ${orginal_price}</span>
            <span className='text-pink-600 font-bold'>Resale Price : ${resale_price}</span>
            <span>Year of use : {year} years</span>
            <span>Condition : {condition ? condition : 'Good'}</span>
            <span>Time: {time}</span>
          </div>


          <div className="card-actions mt-5 justify-between">
            <div>
              <div className=' font-bold flex justify-center items-center'>
                <img className='w-6 h-6 mr-1' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/seller-man-2846318-2366584.png" alt="" />
                <p>{name}</p>
                {
                  status === 'verfied' ?
                    <FaCheck className='ml-1 text-green-600'></FaCheck>
                    : ''
                }
              </div>

              <div className=' font-bold flex justify-center items-center'>
                <img className='w-3 h-3 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHAosvD8X2HtIhkrKrHP8oI2OgUDp-UOKkaLFQk4&s" alt="" />
                <small>{location}</small>
              </div>

            </div>
            <label className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">Book now</label>

          </div>
        </div>


      </div>
        </div>
    );
};

export default SingleAdd;