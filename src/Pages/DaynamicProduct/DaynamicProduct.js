import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import BookModal from './BookModal/BookModal';
import Product from './Product';

const DaynamicProduct = () => {

    const products = useLoaderData()


    const [items, setItems] = useState({})

    const handleModal = (product) => {
        console.log(product)
        setItems(product)
    }










    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleModal={handleModal}
                        setItems={setItems}
                    ></Product>)
                }
            </div>



            {
                items &&
                <BookModal
                    items={items}
                    setItems={setItems}
                ></BookModal>
            }

        </div>
    );
};

export default DaynamicProduct;