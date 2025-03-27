import React from 'react'
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import logo from '/icon/logo.png'

const Navbar = () => {
    return (
        <div className='pt-4 cursor-pointer px-4'>
            <div className='flex justify-between items-center py-4 text-[rgba(76,76,76,1)]'>
                <div className='flex justify-between items-center gap-1.5'>
                    <p>+99 891 101 11 11</p>
                    <p>|</p>
                    <p>Store location</p>
                </div>
                <div>
                    <p>Tell  a friend about Drou & get 20% off</p>
                </div>
                <div className='flex justify-between items-center gap-1.5'>
                    <select className='outline-0' id="curs">
                        <option value="1">USD</option>
                        <option value="2">UZS</option>
                    </select>
                    <p>|</p>
                    <p>Log in / Sign up</p>
                </div>
            </div>
            {/* navbar */}
            <div>
                <div className='flex justify-between items-center py-4 text-[rgba(36,36,36,1)] border-t-1 border-gray-200 sticky top-0 z-10'>
                    <div>
                        <img src='/icon/logo.png' alt="logo" />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center gap-3'>
                            <li><p>HOME</p></li>
                            <li>
                                <select id="type" className="outline-0">
                                    <option value="1">ELECTONICS</option>
                                    <option value="2">ELECTONICS</option>
                                </select>
                            </li>
                            <li>
                                <select id="style" className='outline-0'>
                                    <option value="1">BLOGS</option>
                                    <option value="2">ROWS</option>
                                </select>
                            </li>
                            <li>
                                <select id="page" className='outline-0'>
                                    <option value="1">PAGES</option>
                                    <option value="2">ROWS</option>
                                </select>
                            </li>
                            <li><p>CONTACT</p></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <SearchOutlined className='text-3xl' />
                        <HeartOutlined className='text-3xl' />
                        <ShoppingCartOutlined className='text-3xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar