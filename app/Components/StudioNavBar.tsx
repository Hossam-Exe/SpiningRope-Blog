import Link from "next/link"



export default function StudioNavBar(props:any) {
  return (
    <div>
        <div className=" bg-black p-1  flex items-center justify-start pl-4">
            <Link href={"/"} className=" p-2  gap-4  text-base flex items-center justify-center     ">
                 <svg className=' w-6 h-6 fill-current text-white' id="Layer_1"  viewBox="0 0 330.001 330.001" >
               <g id="XMLID_348_">
	             <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		             L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
	              	/>
              	<polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
                </g>
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
