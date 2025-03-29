import { ArrowRightOutlined } from '@ant-design/icons';

const LatestProducts = () => {
    return (
        <div className='bg-[#ffffff] py-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between pb-2'>
                    <h1 className="text-[16px] font-medium text-[rgba(0,0,0,1)]">Latest Products</h1>
                    <h1 className="text-[16px] font-medium text-[rgba(0,0,0,1)]">View all products <span className='text-orange-500'><ArrowRightOutlined /></span></h1>
                </div>
                <div className="grid grid-cols-5 gap-3 py-4 justify-between">
                    <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Latestwatch.png" alt="Smart Watch" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Latest Smart Watch </p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$90.00 <del className='text-[rgba(104,105,107,1)]'>$100.00</del></p>
                    </div>
                    <div className="flex flex-col px-3 py-4 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Laptop.png" alt="Mackbook Air M3" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Apple Mackbook Air M3</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$1099.00 <del className='text-[rgba(104,105,107,1)]'>$1199.00</del></p>
                    </div>
                    <div className="flex flex-col px-3 py-4 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/speakers.png" alt="Homepad mini" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Homepad mini</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$54.00 <del className='text-[rgba(104,105,107,1)]'>$68.00</del></p>
                    </div>
                    <div className="flex flex-col px-3 py-4 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/charger.png" alt="charger" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Drou safe charger</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$34.00 <del className='text-[rgba(104,105,107,1)]'>$52.00</del></p>
                    </div>
                    <div className="flex flex-col px-3 py-4 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                        <img src="/latestproducts/Entertainment.png" alt="Entertainment" className="w-40 h-40 object-cover" />
                        <img src="/latestproducts/Feedback.png" alt="star" className='py-2' />
                        <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Home Entertainment</p>
                        <p className='text-[16px] font-semibold text-[rgba(255,91,0,1)]'>$94.00 <del className='text-[rgba(104,105,107,1)]'>$113.00</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProducts