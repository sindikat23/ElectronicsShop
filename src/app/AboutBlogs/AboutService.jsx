import React from 'react'

const AboutService = () => {
    return (
        <div className='bg-[rgba(248,248,248,1)]'>
            <div className='container mx-auto flex my-6 justify-between py-8 px-6'>
                <div className='flex flex-col gap-4 items-center cursor-pointer'>
                    <img src="/icon/s1.png" alt="service" className='w-14 h-14 hover:scale-110 duration-500' />
                    <h1 className='text-2xl font-semibold hover:text-[rgba(207,73,0,1)] text-[rgba(26,26,26,1)]'>Free Delivery</h1>
                    <p className='w-4/5 text-[16px] text-center duration-700'>And free returns. Checkout  for delivery date.</p>
                </div>
                <div className='flex flex-col gap-4 items-center cursor-pointer'>
                    <img src="/icon/s2.png" alt="service" className='w-14 h-14 hover:scale-110 duration-500' />
                    <h1 className='text-2xl font-semibold hover:text-[rgba(207,73,0,1)] text-[rgba(26,26,26,1)]'>Pay monthly at 0% APR</h1>
                    <p className='w-4/5 text-[16px] text-center duration-700'>Choos to checkout  with Apple Card monthly installmants.</p>
                </div>
                <div className='flex flex-col gap-4 items-center cursor-pointer'>
                    <img src="/icon/s3.png" alt="service" className='w-14 h-14 hover:scale-110 duration-500' />
                    <h1 className='text-2xl font-semibold hover:text-[rgba(207,73,0,1)] text-[rgba(26,26,26,1)]'>Personalize it</h1>
                    <p className='w-4/5 text-[16px] text-center duration-700'>Engrave your device with your name or a personal note.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutService