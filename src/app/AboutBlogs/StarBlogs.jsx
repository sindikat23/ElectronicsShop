import Image from 'next/image';
import React from 'react'

const getProducts = async () => {
    try {
        const res = await fetch({
            url: "https://dummyjson.com/products",
            method: "GET"
        })
        return res.json()
    } catch (error) {
        console.log(error.message);

    }
}

const StarBlogs = async () => {

    const product_list = await getProducts()
    console.log(product_list);

    return (
        <div className='bg-[#ffffff] py-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between pb-2'>
                    <h1 className="text-[16px] font-medium text-[rgba(0,0,0,1)]">Popular Products</h1>
                    <ul className='text-[16px] font-medium flex gap-3 cursor-pointer'>
                        <li className='text-[rgba(207,73,0,1)]'>Accessories</li>
                        <li>Iphone</li>
                        <li>Laptop</li>
                    </ul>
                </div>
                <div className="grid grid-cols-5 gap-4 py-2 justify-between">
                    {
                        product_list.products?.map((item) => {
                            return <div key={item.id} className="flex flex-col p-3
                            rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                                <Image src={item.thumbnail} alt={item.title} width={450} height={450} className="w-40 h-40 object-cover" />
                                <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)] py-1">{item.title.length>19?item.title.slice(0, 19) + "...":item.title}</p>
                                <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>{item.price} $<del className='text-[rgba(104,105,107,1)]'> {Math.ceil((item.price+8)*100)/100} $</del></p>
                            </div>
                        })
                    }
                </div>
                {/* eskisi */}
                {/* <div className="grid grid-cols-4 gap-4 py-2 justify-between">
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/charger.png" alt="charger" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Drou safe charger</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$34.00 <del className='text-[rgba(104,105,107,1)]'>$52.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/categoryImage/Camer.png" alt="camera" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Security smart camera</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$850.00 <del className='text-[rgba(104,105,107,1)]'>$900.00</del></p>
                    </div>
                    <div className="flex flex-col p-3 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Iphone15.png" alt="iphone" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Iphone 15 pro max</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$1099.00 <del className='text-[rgba(104,105,107,1)]'>$1599.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Latestwatch.png" alt="Smart Watch" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Latest Smart Watch </p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$90.00 <del className='text-[rgba(104,105,107,1)]'>$100.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Iphone14.png" alt="Iphone14" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Iphone 14 pro max</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$999.00 <del className='text-[rgba(104,105,107,1)]'>$1499.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Laptop.png" alt="Mackbook Air M3" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Apple Mackbook Air M3</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$1099.00 <del className='text-[rgba(104,105,107,1)]'>$1199.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/PowerUsb.png" alt="usb" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Iphone Lighting Cable</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$65.00 <del className='text-[rgba(104,105,107,1)]'>$80.00</del></p>
                    </div>
                    <div className="flex flex-col p-3
                     rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/speakers.png" alt="Homepad mini" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Homepad mini</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$54.00 <del className='text-[rgba(104,105,107,1)]'>$68.00</del></p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default StarBlogs