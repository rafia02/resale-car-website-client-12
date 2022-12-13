import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import SingleCatagori from './SingleCatagori';



const ProductCatagories = () => {

    const {data: catagories= []} = useQuery({
        queryKey: ['catagori'],
        queryFn: async()=>{
            const res = await fetch('https://resale-car-server-12.vercel.app/catagories')
            const data = await res.json()
            return data
        }
    })


    
    return (
        <div className='my-20 pb-10 px-10'>
            <h1 className="text-3xl text-center font-bold mb-10">Popular Brand Catagories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    catagories.map(catagori =><SingleCatagori
                    key={catagori._id}
                    catagoris={catagori}
                    ></SingleCatagori>)
                }
            </div>
        </div>
    );
};

export default ProductCatagories;