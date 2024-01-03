
import CopyableCodeBlock from './CopyableCodeBlock'
import { urlFor } from "../../lib/getClient";
import Image from "next/legacy/image";


export const portableTextSerializer = {

 
  h1: (props: any) => {
    return <h1 className=" text-5xl py-10 text-copy-primary dark:text-copy-primary  font-bold" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="text-4xl py-10  text-copy-primary dark:text-copy-primary font-bold" {...props} />;
  },
  h3: (props: any) => {
    return <h3 className=" text-3xl py-10 text-copy-primary dark:text-copy-primary  font-bold" {...props} />;
  },
  h4: (props: any) => {
    return <h4 className="text-2xl py-10  text-copy-primary dark:text-copy-primary font-bold" {...props} />;
  },


  li: ( props : any) => {
    return <li className="ml-4 list-inside text-copy-primary dark:text-copy-primary" {...props} />;
  },
  ol: ( props : any) => {
    return <ol className="mt-lg list-decimal text-copy-primary dark:text-copy-primary" {...props} />;
  },
  ul: ( props : any) => {
    return <ul className="ml-10  py-5  list-disc text-copy-primary dark:text-copy-primary  space-y-5" {...props} />;
  },


 

  
  code: (props: any) => {
  return <span className="font-mono leading-normal bg-gray-700/20 dark:bg-gray-700 rounded border-white/20  px-1 mx-1  text-red-600   " {...props} />;
  },
  normal: (props: any) => {
    return <p className="text-justify text-copy-primary my-6 dark:text-copy-primary" {...props} />;
  },

  blockquote: ( props : any) => {
    return  <blockquote className=" border-l-slate-900 dark:border-l-white rounded text-2xl 
      border-l-4  p-3  text-copy-primary dark:text-copy-primary bg-[#478ef8]/20 " {...props} />;
  },

  link:(props: any) => {
    return <a className=" underline rounded p-1 font-bold text-[#478ef8] hover:decoration-white/90 hover:bg-gray-700  " {...props} />;
  },
  unknownType: ({ node }:any) => {
    if (node._type === "code") {
     
      return (
      
    <CopyableCodeBlock>
      {node}
    </CopyableCodeBlock>
        
      );
    }
  },
  
 
  
 
};
