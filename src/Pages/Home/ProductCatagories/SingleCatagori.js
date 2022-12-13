import React from 'react';
import { Link } from 'react-router-dom';

const SingleCatagori = ({ catagoris }) => {
  const { img, catagori } = catagoris
  return (
    <div className="card   shadow-xl bg-pink-100">
      <figure className="px-10 pt-10 ">
        <img src={img} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{catagori}</h2>

        <div className="card-actions">
          <Link  to={`/catagory/${catagori}`} className="btn  bg-gradient-to-r from-purple-500 to-pink-500">Show more products</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagori;