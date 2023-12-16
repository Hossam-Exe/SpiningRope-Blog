import Link from "next/link"



export default function StudioNavBar(props:any) {
  return (
    <div>
        <div className=" bg-black p-1  flex items-center justify-start pl-4">
            <Link href={"/"} className=" p-2  gap-4  text-base flex items-center justify-center     ">
                 <img src="/logo_svg.svg" alt="logo" className="  w-6 h-6" />
                 <h6 className="rounded border-white/20 hover:bg-white/90
                                font-bold p-2 hover:text-[#333333] transition-all duration-100 hover:scale-105 
                                 bg-white/20   ">Home</h6>
            </Link>
        </div>
    <> {props.renderDefault(props)} </>
    </div>
  )
}
