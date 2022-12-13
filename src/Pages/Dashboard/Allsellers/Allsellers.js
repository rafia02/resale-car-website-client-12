import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa'



const Allsellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://resale-car-server-12.vercel.app/users/seller')
            const data = await res.json()
            return data
            isLoading()
        }
    })


    if (isLoading) {
        return <Spinner></Spinner>
    }


    const handleDelete = (id) => {
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





    const handleStatus = (id) => {
        fetch(`https://resale-car-server-12.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'applicataion/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('successfuly verified this seller')
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
                            <th>Delete</th>



                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seler, i) => <tr key={seler._id}>
                                <th>{i + 1}</th>
                                <td className='flex'>
                                    {seler.name}
                                    {
                                        seler.status === 'verfied' ?
                                            <FaCheck className='ml-1 text-green-600'></FaCheck>
                                            : ''
                                    }
                                </td>
                                <td>{seler.email}</td>
                                <td><button onClick={() => handleStatus(seler._id)} className='btn btn-xs  bg-gradient-to-r from-pink-500 to-pink-500'>{seler.status}</button></td>
                                <td><button onClick={() => handleDelete(seler._id)} className='btn btn-xs  bg-gradient-to-r from-pink-500 to-pink-500'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;