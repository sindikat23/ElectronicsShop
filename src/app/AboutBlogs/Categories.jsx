
const Categories = () => {
  return (
    <div className='bg-[#ffffff] px-8 py-10'>
        <h1 className="text-[28px] font-semibold text-[rgba(36,36,36,1)]">Trending Categories</h1>
        <div className="grid grid-cols-6 gap-3 py-2 justify-between">
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/Iphone.png" alt=""  className="w-40 h-40 object-cover"/>
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Iphone</p>
            </div>
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/Speakers.png" alt="" className="w-40 h-40 object-cover" />
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Mini Speakers</p>
            </div>
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/Ipad.png" alt=""  className="w-40 h-40 object-cover"/>
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Ipad mini Pro</p>
            </div>
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/Airpods.png" alt=""  className="w-40 h-40 object-cover"/>
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Headphone</p>
            </div>
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/Laptop.png" alt=""  className="w-40 h-40 object-cover"/>
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Laptop</p>
            </div>
            <div className="flex flex-col px-3 py-2 rounded-lg shadow-[0px_0px_10px] shadow-gray-200 justify-center items-center hover:scale-105 duration-500">
                <img src="/categoryImage/AirpodsMini.png" alt=""  className="w-40 h-40 object-cover"/>
                <p className="text-[18px] font-medium text-[rgba(94,94,94,1)]">Accessories</p>
            </div>
        </div>
    </div>
  )
}

export default Categories