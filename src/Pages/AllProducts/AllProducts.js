import React, { useState } from 'react';
import './AllProducts.css'
import { ProductCard } from '../../Components/Products/ProductCard';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Checkbox, Input, Slider } from 'antd';
import { productsArray } from '../../data';
const { Search } = Input;

export const AllProducts = () => {
    const [products, setProducts] = useState(productsArray);

    const searchHandler = (val) => {
        setProducts(productsArray?.filter(product => product?.title?.toLowerCase().includes(val?.toLowerCase())));
    }

    const onChange = (val) => {
        console.log(val)
        let filterByPrice = productsArray?.filter(p => p.price < val);
        setProducts(filterByPrice);
    };

    return (
        <UserLayout navbar>
            <div className='all-products mb-5 pb-5'>
                <div className='row main-row pt-0 gx-5 px-4 mt-5'>
                    <h3 className='mb-0'>Filters</h3>
                    <div className='col-md-2 px-2'>
                        <h5>Type</h5>
                        <div className='my-2'>
                            <Checkbox onChange={(e) => e.target.checked && setProducts(productsArray.filter(f => f?.category === "cpu"))}>Cpu</Checkbox>
                        </div>
                        <div className='my-2'>
                            <Checkbox onChange={(e) => e.target.checked && setProducts(productsArray?.filter(f => f?.category === "gpu"))}>Gpu</Checkbox>
                        </div>
                        <h5 className='mt-4'>Price</h5>
                        <div className='my-2'>
                            <Slider defaultValue={30} onChange={onChange} />
                        </div>
                    </div>
                    <div className='col-md-10 px-3 sm:px-5'>
                        <div className='mb-5'>
                            <Search
                                placeholder="Search here..."
                                allowClear
                                style={{ width: "100%" }}
                                enterButton="Search"
                                size="large"
                                onSearch={searchHandler}
                            />
                        </div>
                        <div className='row gy-3'>
                            {
                                products?.length > 0 && products?.map((product, index) => {
                                    return (
                                        <div className='col-12'>
                                            <ProductCard product={product} />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}
