import Link from "next/link";

export default function NotFound() {
    return (

<div className='flex flex-col items-center justify-center text-center pt-12 gap-8 '>
<svg viewBox="0 0 287 412"  className='opacity-30  mt-10  w-[250px] h-[250px] fill-current  text-copy-primary dark:text-copy-primary'>
    <g  clip-path="url(#a)">
        <path d="M272.14 0H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.14 46.29H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 80H14C6.268 80 0 86.268 0 94s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 126.29H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 171.57H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 217.86H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 263.14H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 309.43H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 337.71H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 384H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14z"/>
    </g>
    <defs>
        <clipPath id="a">
            <path  d="M0 0h286.9v412H0z"/>
        </clipPath>
    </defs>
</svg>
             
            <div className='flex flex-col justify-center gap-4 p-4 mb-12'>
                <h2 className='text-2xl text-copy-primary dark:text-copy-primary font-MoonGet uppercase opacity-30  tracking-widest'>404!</h2>
                <p className="text-1xl text-copy-primary dark:text-copy-primary font-bold uppercase opacity-30">Could not find requested resource</p>
            </div>
        </div>

       
    );
}
