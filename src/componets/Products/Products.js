import React, { useEffect, useState } from 'react';
import './Products.css'
import Blog from '../Blog/Blog';
import Name from '../Name/Name';

const Products = () => {
    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handlerAddToBookmark = (product) => {
        // console.log(product)
        const newBlogs = [...blogs, product];
        setBlogs(newBlogs);
    }
    console.log(blogs)
    return (
        <div className='product-compo'>
            <div className='product-container'>

                {
                    products.map(product => <Blog

                        key={product.id}
                        product={product}
                        handlerAddToBookmark={handlerAddToBookmark}

                    ></Blog>)
                }

            </div>

            <div className='product-info'>
                <h3>Spend on read time : </h3>
                <div>
                    {
                        blogs.map(bg => <Name
                            key={bg.id}
                            bg={bg}
                        ></Name>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;