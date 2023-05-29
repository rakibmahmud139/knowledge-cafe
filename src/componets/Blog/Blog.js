import React from 'react';
import "./Blog.css"

const Blog = (props) => {

    const { image, name, userName, userImage } = props.product;

    return (
        <div className='blog-container'>
            <img className='blog-img' src={image} alt="" />

            <div className='user-container'>
                <div className='user-info'>
                    <img src={userImage} alt="" />

                    <div>
                        <h5>{userName}</h5>
                        <p>May 14 (15 days ago)</p>
                    </div>

                </div>

                <div>
                    <p>05 min read</p>
                </div>
            </div>

            <h2>{name}</h2>

            <p>#beginners  #programming</p>

            <a href="mark as read">Mark as read</a>

        </div>
    );
};

export default Blog;