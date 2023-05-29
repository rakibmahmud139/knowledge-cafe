import React, { useEffect, useState } from 'react';
import './Products.css'
import Blog from '../Blog/Blog';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='product-compo'>
            <div className='product-container'>

            {
                products.map(product => <Blog

                key= {product.id}
                product = {product}

                ></Blog>)
            }

            </div>

            <div className='product-info'>
                <h3>Spend on read time : </h3>
            </div>
        </div>
    );
};

export default Products;