import React from 'react'
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Navbar = () => {
    return (
        <div className='cursor-pointer px-4 bg-white sticky top-0 z-10 border-t-1 border-gray-200'>
            <div className='container mx-auto flex justify-between items-center py-6 text-[rgba(36,36,36,1)]'>
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
    )
}

export default Navbar