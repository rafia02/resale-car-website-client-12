import React from 'react';
import { useQuery } from '@tanstack/react-query';



const Mybuyer = () => {

    const {data: buyers= []} = useQuery({
        queryKey: ['buyer'],
        queryFn: async()=>{
            const res = await fetch('https://resale-car-server-12.vercel.app/users/buyer')
            const data = await res.json()
            return data
        }
    })

console.log(buyers)

    return (
        <div>
        
    
        </div>
    );
};

export default Mybuyer;