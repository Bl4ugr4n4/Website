import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import headerImg from '../../assets/header.png';
import './Home.css'
import { Carousel } from 'antd';
import { productsArray } from '../../data';

export const Home = () => {
    const [products, setProducts] = useState(productsArray);



    return (
        <UserLayout navbar>
            <div className='homepage'>
                <div className='row'>
                    <div className='col-12'>
                        <header className='d-block'>
                            <Carousel autoplaySpeed={2000} autoplay>
                                <div>
                                    <Link to="/products">
                                        <img alt='img' src={headerImg} />
                                    </Link>
                                </div>
                                {
                                    products?.map((product, index) => {
                                        return (
                                            <div key={index}>
                                                <Link to={`/product/${product?._id}`}>
                                                    <img alt='img' src={product?.productPictures[0]?.url} />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </header>
                    </div>
                </div>
            </div>
        </UserLayout >
    )
}