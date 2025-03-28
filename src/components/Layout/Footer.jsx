import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center bg-[rgba(248,248,248,1)] px-1 py-3'>
            <div className='flex items-center gap-2'>
                <div>
                    <img src="/icon/simple.png" alt="" />
                </div>
                <div>
                    <p>Copyright & Team90Degree | Built with Dji by Team90Degree.</p>
                </div>
            </div>
            <div className=' flex justify-center items-center gap-3'>
                <img src="/icon/Visa.png" alt="card" />
                <img src="/icon/Mastercard.png" alt="card" />
                <img src="/icon/Paypal.png" alt="card" />
            </div>
        </div>
    )
}

export default Footer