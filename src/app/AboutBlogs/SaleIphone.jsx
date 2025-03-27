import { Button } from 'antd'

const SaleIphone = () => {
  return (
    <div className='bg-[rgba(241,246,255,1)]'>
        <div className='grid grid-cols-2 justify-center gap-10 px-10 pt-8'>
            <div className='flex flex-col items-center justify-center text-center'>
                <button className='text-white px-3 py-2 bg-[rgba(207,73,0,1)]'>Hurry Up!</button>
                <h1 className='text-[48px] font-semibold text-[rgba(23,27,28,1)]'>Up To 20 % Discount Check it Out</h1>
                <div className='grid grid-cols-4 gap-3 py-4'>
                    <div className='bg-[rgba(221,225,228,1)] rounded-[5px] px-6 py-3'>
                        <h1 className='text-[24px] font-semibold text-[rgba(23,27,28,1)]'>310</h1>
                        <p className='text-[12px] font-medium text-[rgba(117,121,124,1)]'>DAYS</p>
                    </div>
                    <div className='bg-[rgba(221,225,228,1)] rounded-[5px] px-6 py-3'>
                        <h1 className='text-[24px] font-semibold text-[rgba(23,27,28,1)]'>06</h1>
                        <p className='text-[12px] font-medium text-[rgba(117,121,124,1)]'>HRS</p>
                    </div>
                    <div className='bg-[rgba(221,225,228,1)] rounded-[5px] px-6 py-3'>
                        <h1 className='text-[24px] font-semibold text-[rgba(23,27,28,1)]'>34</h1>
                        <p className='text-[12px] font-medium text-[rgba(117,121,124,1)]'>MIN</p>
                    </div>
                    <div className='bg-[rgba(221,225,228,1)] rounded-[5px] px-6 py-3'>
                        <h1 className='text-[24px] font-semibold text-[rgba(23,27,28,1)]'>08</h1>
                        <p className='text-[12px] font-medium text-[rgba(117,121,124,1)]'>SEC</p>
                    </div>
                </div>
                <Button variant='solid' color='pink' size='large'>Shop Now</Button>
            </div>
            <div className='flex gap-4'>
                <div className='pt-60'><img className='h-60 ' src="/latestproducts/Smalliphone.png" alt="iphone" /></div>
                <img src="/latestproducts/Bigiphone.png" alt="iphone" />
            </div>
        </div>
    </div>
  )
}

export default SaleIphone