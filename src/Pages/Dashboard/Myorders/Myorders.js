import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContex } from '../../../Context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import { Link } from 'react-router-dom';



const Myorders = () => {
  const { user } = useContext(AuthContex)

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://resale-car-server-12.vercel.app/bookings?email=${user?.email}`)
      const data = await res.json()
      return data
      isLoading()
    }
  })



  if (isLoading){
    return <Spinner></Spinner>
  }


  return (
    <div className=''>


      <div className="overflow-x-auto">
        <table className="table w-1/2 mx-auto md:w-full">

          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Car Name</th>
              <th>Price</th>
              <th>Option</th>

            </tr>
          </thead>
          <tbody>


            {
              bookings.map((book, i) => <tr key={book._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="w-24 rounded-full">
                    <img src={book.img} alt="" />
                  </div>
                </td>
                <td>{book.title}</td>
                <td>${book.price}</td>
                <td>
                  {
                    book.status === 'pay' && <Link to={`/dashbord/payment/${book._id}`}  className='btn btn-xs  bg-gradient-to-r from-purple-500 to-pink-600'>{book.status}</Link>
                  }

                  {
                    book.status === 'paid' && <button disabled  className='btn btn-xs btn-primary'>{book.status}</button>
                  }
                </td>

              </tr>)
            }


          </tbody>
        </table>
      </div>










    </div>
  );
};

export default Myorders;