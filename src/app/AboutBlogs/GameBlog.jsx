import { Button } from 'antd'

const GameBlog = () => {
  return (
    <div className='bg-[#ffffff] px-8 py-10'>
        <div className='grid grid-cols-2 justify-between gap-10'>
            <div className='flex flex-col justify-center items-center px-10 py-4 bg-[rgba(238,238,238,1)]'>
                <p className='py-1 text-[16px] font-medium text-[rgba(71,71,71,1)] uppercase'>Security smart Camera</p>
                <h1 className='py-1 pb-6 text-[24px] font-medium text-[rgba(71,71,71,1)]'>Just starting at $850</h1>
                <Button className='' variant='solid' color='orange'>Shop Now</Button>
                <img className='rotate-34 hover:scale-115 duration-700 w-70' src="/categoryImage/Camer.png" alt="camera" />
            </div>
            <div className='flex flex-col justify-center items-center px-10 py-4 bg-[rgba(238,238,238,1)]'>
                <p className='py-1 text-[16px] font-medium text-[rgba(71,71,71,1)] uppercase'>Entertainment & Games</p>
                <h1 className='py-1 pb-6 text-[24px] font-medium text-[rgba(71,71,71,1)]'>Just starting at $450</h1>
                <Button className='rounded-2xl ' variant='solid' color='orange'>Shop Now</Button>
                <img className='pt-18 hover:scale-115 duration-700' src="/categoryImage/Games.png" alt="game_justic" />
            </div>
        </div>
    </div>
  )
}

export default GameBlog