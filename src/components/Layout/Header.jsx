import React from 'react'

const Header = () => {
    return (
        <div className='cursor-pointer'>
            <div className='flex justify-between items-center py-6 text-[rgba(76,76,76,1)] container mx-auto'>
                <div className='flex justify-between items-center gap-1.5'>
                    <p>+99 891 101 11 11</p>
                    <p>|</p>
                    <p>Store location</p>
                </div>
                <div>
                    <p>Tell  a friend about Drou & get 20% off</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <select className='outline-0' id="curs">
                        <option value="1">USD</option>
                        <option value="2">UZS</option>
                    </select>
                    <p>|</p>
                    <p>Log in / Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default Header