import React, { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthProvider';
import {toast} from 'react-hot-toast'

const BookModal = ({ items, setItems }) => {
  const {user} = useContext(AuthContex)
  const { title, name , img, resale_price} = items




  const handleModalSubmit = (e) => {
    e.preventDefault()
    const form = e.target 
    const name = form.name.value 
    const email = form.email.value 
    const phone = form.phone.value 
    const title = form.title.value 
    const location = form.location.value 
    const price = form.price.value 
    console.log(name, title, email, phone, location, price)

    const booking = {
      name,
      email,
      title,
      phone,
      location,
      price,
      img,
      status: 'pay'
    }


    fetch('https://resale-car-server-12.vercel.app/bookings',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.acknowledged){
        toast.success(`Successfully booked ${title}`)
        setItems('')
      }
    })
    .catch(e => console.error(e))





  }






  return (
    <div>



      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{title}</h3>
          <h3 className="text-lg font-bold">{name}</h3>



          <form onSubmit={handleModalSubmit} className="card-body">

            <input type="text" name="title" disabled value={title} className="input input-bordered" />
            <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered" />
            <input type="text" name="email" disabled value={user?.email} className="input input-bordered" />
            <input type="text" name="price" disabled value={resale_price} className="input input-bordered" />
            <input type="text" name="phone" placeholder="phone" className="input input-bordered" />
            <input type="text" name="location" placeholder="location" className="input input-bordered" />




            <input className=' btn bg-gradient-to-r from-purple-500 to-pink-600' type="submit" />


          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;