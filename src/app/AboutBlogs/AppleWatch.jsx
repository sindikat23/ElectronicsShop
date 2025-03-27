import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const AppleWatch = () => {
    return (
        <div>
            <div className='flex  bg-[rgba(249,249,249,1)] px-8 py-20 justify-between items-center gap-10'>
                <div className='w-1/2'>
                    <h2 className='text-[rgba(250,107,28,1)] text-[24px] font-medium py-2'>SALE UP TO 30% OFF</h2>
                    <h1 className='text-[52px] font-semibold text-[rgba(36,36,36,1)] py-2'>Apple Watch Series</h1>
                    <p className='text-[16px] font-medium text-[rgba(76,76,76,1)] py-2'>Featured packed  at a batter value than over pawerful sensors to manitor your fitness</p>
                    <Button className='my-6' variant='solid' size='large' color='orange'><p className=''>Shop Now <ArrowRightOutlined /></p></Button>
                </div>
                <div className='w-1/2'>
                    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
                        <div className=''>
                            <img className='' src='/images/AppleWatch.png' alt="apple_watch" />
                        </div>
                        <div>
                            <img className='' src='/images/AppleWatch2.jpg' alt="apple_watch" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default AppleWatch