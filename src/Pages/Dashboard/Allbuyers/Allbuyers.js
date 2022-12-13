import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import toast from 'react-hot-toast';

const Allbuyers = () => {


    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://resale-car-server-12.vercel.app/users/buyer')
            const data = await res.json()
            return data
            isLoading()
        }
    })


    if (isLoading) {
        <Spinner></Spinner>
    }


    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://resale-car-server-12.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('successfully deleted')
                    refetch()
                }
            })
            .catch(e => console.error(e))
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto md:w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleDelete(buyer._id)} className='btn btn-xs  bg-gradient-to-r from-pink-500 to-pink-500'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;