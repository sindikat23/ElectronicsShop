import { Button } from 'antd'

const SaleIpad = () => {
    return (
        <div className='bg-[rgba(241,246,255,1)] container mx-auto'>
            <div className='grid grid-cols-2 justify-center gap-10 px-10 pt-16'>
                <div className='flex justify-center'>
                    {/* <div className='pt-60'><img className='h-60 ' src="/latestproducts/Smalliphone.png" alt="iphone" /></div> */}
                    <img src="/latestproducts/Applelap.png" alt="iphone" />
                </div>
                <div className='flex flex-col items-center justify-center text-center py-8'>
                    <p className='text-[16px] font-medium text-[rgba(71,71,71,1)] uppercase'>Big discount</p>
                    <h1 className='text-[24px] font-medium text-[rgba(23,27,28,1)]'>Must Buying Apple Devices</h1>
                    <div className='grid justify-center gap-3 py-4'>
                       <p className='text-[24px] font-semibold text-[rgba(207,73,0,1)]'>$450.00</p>
                    </div>
                    <Button variant='solid' color='orange' size='large'>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}

export default SaleIpad