

const Frame = () => {
  return (
 <div className='  fixed  w-full h-full z-[50]    border-[14px] border-black pointer-events-none'>
    {/* <div className=' absolute bg-white left-[50%]   translate-x-[-50%]  rounded-full w-20 h-20 '></div> */}
    <div className=' absolute  left-0  top-0    rounded-full w-8 h-8  shadow-leftCorner '></div>
    <div className=' absolute  right-0 top-0    rounded-full w-8 h-8  shadow-rightCorner '></div>
    <div className=' absolute  left-0  bottom-0 rounded-full w-8 h-8  shadow-BleftCorner '></div>
    <div className=' absolute  right-0 bottom-0 rounded-full w-8 h-8  shadow-BrightCorner '></div>
 </div>
  )
}

export default Frame