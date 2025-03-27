import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';

const EventsBLog = () => {
    return (
        <div className='bg-[#ffffff] px-8 py-10'>
            <div className='flex justify-between pb-2'>
                <h1 className="text-[16px] font-medium text-[rgba(0,0,0,1)]">Blog & Events</h1>
                <h1 className="text-[16px] font-medium text-[rgba(0,0,0,1)]">View all products <span className='text-orange-500'><ArrowRightOutlined /></span></h1>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4 justify-between">
                <div className="flex flex-col rounded-lg shadow-[0px_0px_0.2px] shadow-gray-200">
                    <img src="/latestproducts/Rectangle1.png" alt="Smart Watch" className="w-full object-cover hover:scale-105 duration-500 pb-2" />
                    <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]"><CalendarOutlined /> March 15 2025 </p>
                    <p className='text-[16px] font-semibold text-[#64615f]'>Music magnate headphone</p>
                </div>
                <div className="flex flex-col rounded-lg shadow-[0px_0px_0.2px] shadow-gray-200">
                    <img src="/latestproducts/Rectangle2.png" alt="Mackbook Air M3" className="w-full object-cover hover:scale-105 duration-500 pb-2" />
                    <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]"><CalendarOutlined /> March 15 2025</p>
                    <p className='text-[16px] font-semibold text-[#64615f]'>Macbook air labore at dolore</p>
                </div>
                <div className="flex flex-col rounded-lg shadow-[0px_0px_0.2px] shadow-gray-200">
                    <img src="/latestproducts/Rectangle3.png" alt="Homepad mini" className="w-full object-cover hover:scale-105 duration-500 pb-2" />
                    <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]"><CalendarOutlined /> March 15 2025</p>
                    <p className='text-[16px] font-semibold text-[#64615f]'>Ipsum available but the majority</p>
                </div>

            </div>
        </div>
    )
}

export default EventsBLog