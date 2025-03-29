import React from 'react'

const Footer = () => {
    return (
        <div className=' pt-4'>
            <div className='bg-white py-6'>
                <div className='container mx-auto grid grid-cols-4 justify-between text-[rgba(116,116,116,1)] text-[16px] font-medium'>
                    <ul className="cursor-pointer">
                        <li className='text-[24px] py-2 text-[rgba(26,26,26,1)]'>Contact Us</li>
                        <li className='py-1.5'>Uzbekistan</li>
                        <li className='py-1.5'>+998 91 101 01 01</li>
                        <li className='py-1.5'>demo@exampledemo.com</li>
                        <li className='py-1.5'>Dji Demo Store</li>
                        <li className='py-1.5'>No, 12345 Freedom Tashkent</li>

                    </ul>
                    <ul className="cursor-pointer">
                        <li className='text-[24px] py-2 text-[rgba(26,26,26,1)]'>Information</li>
                        <li className='py-1.5'>Product Support</li>
                        <li className='py-1.5'>Checkout</li>
                        <li className='py-1.5'>License Policy</li>
                        <li className='py-1.5'>Affiliate</li>
                    </ul>
                    <ul className="cursor-pointer">
                        <li className='text-[24px] py-2 text-[rgba(26,26,26,1)]'>Customer Service</li>
                        <li className='py-1.5'>Help Centre</li>
                        <li className='py-1.5'>Raddem  Vaucher</li>
                        <li className='py-1.5'>Contact Us</li>
                        <li className='py-1.5'>Policies & Rules</li>
                    </ul>
                    <ul className="cursor-pointer">
                        <li className='text-[24px] py-2 text-[rgba(26,26,26,1)]'>Download Our App</li>
                        <li className='py-1.5'>Download our App & get  extra 20% Discount on your first Order...! </li>
                        <div>
                            <img src="/icon/playmarket2.png" alt="" />
                            <img src="/icon/playmarket1.png" alt="" />
                        </div>
                    </ul>
                </div>
            </div>
            {/* footer-down */}
            <div className='bg-[rgba(248,248,248,1)]'>
                <div className='container mx-auto flex justify-between items-center'>
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
            </div>
        </div>
    )
}

export default Footer