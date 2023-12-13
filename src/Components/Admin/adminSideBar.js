import React from 'react'
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '../Auth/auth';

export const AdminSideBar = () => {
    const location = useLocation();
    return (
        <div className='sidebar adminSidebar'>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                }}
            >
                {/* <div><Link to='/' className='logo'>Dêrik-online-shop</Link></div> */}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin']} selectedKeys={[location.pathname]}>
                    <Menu.Item key="/admin">
                        <div className='sidebar-links'>
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div>
                                <NavLink to='/admin'> Orders Management</NavLink>
                            </div>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="/admin/logout">
                        <div className='sidebar-links'>
                            <div>
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                            <div>
                                <a href='/login' onClick={() => { logout(() => { }) }}>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}
