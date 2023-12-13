import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Redux/Redux';
import { isAuthenticated } from './Auth/auth';
import { ShoppingCartOutlined, ProfileOutlined, DashboardFilled, UserOutlined, MenuOutlined } from '@ant-design/icons';
import logo from "../assets/logo.png";
import Theme from '../Theme';


export const Navbar = () => {
  const productsList = useSelector(state => state.productsList);
  const { productsInCart } = productsList;
  const cart = productsInCart ? productsInCart.length : 0;
  const userId = isAuthenticated()?.user?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(listProducts(userId));
    }


    return () => {

    }
  }, [userId]);

  return (
    <div className='main-nav mb-4'>
      <nav className="navbar navbar-expand-lg fixed-top px-4 border-bottom" style={{ zIndex: "999" }}>
        <Link className="navbar-brand text-center" to="/">
          <h1 className='mt-2'>PcGuru</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <MenuOutlined />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto list-unstyle pt-3 mx-4 gap-4 gap-md-0" style={{ fontSize: '12px', alignItems: "center" }}>
            <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
              <Link className="ant-dropdown-link" to={"/about-us"} style={{ fontSize: '14px' }}>
                About Us
              </Link>
            </li>
            <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
              <Link className="ant-dropdown-link" to={"/reviews"} style={{ fontSize: '14px' }}>
                Reviews
              </Link>
            </li>
            {
              isAuthenticated()?.role === 2 &&
              <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
                <Link className="ant-dropdown-link" to={"/seller/products"}>
                  <DashboardFilled style={{ fontSize: '21px' }} />
                  <br />
                  <span style={{ fontSize: '14px' }}>Dashboard</span>
                </Link>
              </li>
            }
            {
              isAuthenticated()?.role === 1 &&
              <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
                <Link className="ant-dropdown-link" to={"/admin"}>
                  <DashboardFilled style={{ fontSize: '21px' }} />
                  <br />
                  <span style={{ fontSize: '14px' }}>Dashboard</span>
                </Link>
              </li>
            }
            {
              isAuthenticated() ?
                <>
                  <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
                    <Link className="ant-dropdown-link" to="/profile">
                      <ProfileOutlined style={{ fontSize: '21px', }} />
                      <br />
                      <span style={{ fontSize: '14px' }}>Profile</span>
                    </Link>
                  </li>
                  <li className='ml-2 text-center'>
                    <Badge count={isAuthenticated() && cart}>
                      <Link to='/cart'><ShoppingCartOutlined style={{ fontSize: '24px', paddingBottom: '1px' }} /><br /><span style={{ fontSize: '14px' }}>
                        Bag
                      </span>
                      </Link>
                    </Badge>
                  </li>
                </>
                :
                <li className='nav-item profile text-center' style={{ fontWeight: 'normal' }}>
                  <Link className="ant-dropdown-link" to="/login">
                    <UserOutlined style={{ fontSize: '21px' }} />
                    <br />
                    <span style={{ fontSize: '14px' }}>Login</span>
                  </Link>
                </li>
            }
            <li className='ml-4 text-center mt-2'>
              <Theme />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
