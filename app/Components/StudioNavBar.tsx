import Link from "next/link"



export default function StudioNavBar(props:any) {
  return (
    <div>
        <div className=" bg-black p-1  flex items-center justify-start pl-4">
            <Link href={"/"} className=" p-2  gap-4  text-base flex items-center justify-center     ">
                 <svg viewBox="0 0 287 412"  className='w-6 h-6   fill-current text-white'>
    <g  clip-path="url(#a)">
        <path d="M272.14 0H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.14 46.29H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 80H14C6.268 80 0 86.268 0 94s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 126.29H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 171.57H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 217.86H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 263.14H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 309.43H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 337.71H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 384H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14z"/>
    </g>
    <defs>
        <clipPath id="a">
            <path  d="M0 0h286.9v412H0z"/>
        </clipPath>
    </defs>
          </svg>
                 <h6 className="rounded border-white/20 hover:bg-white/90
                                font-bold p-2 hover:text-[#333333] transition-all duration-100 hover:scale-105 
                                 bg-white/20   ">Home</h6>
            </Link>
        </div>
    <> {props.renderDefault(props)} </>
    </div>
  )
}
