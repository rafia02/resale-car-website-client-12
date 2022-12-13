import React, { useEffect, useState } from 'react';

;

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)



   

    useEffect(()=>{
        fetch(`https://resale-car-server-12.vercel.app/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {

            setIsAdmin(data.role)
     
        })
        .catch(e => console.error(e))
    },[email])

    return [isAdmin]

    

};

export default useAdmin;