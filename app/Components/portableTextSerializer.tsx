
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


  li: ({ children }: any) => {
    return <li className="ml-4 list-inside" {...children} />;
  },
  ol: ({ children }: any) => {
    return <ol className="mt-lg list-decimal" {...children} />;
  },
  ul: ({ children }: any) => {
    return <ul className="ml-10  py-5  list-disc  space-y-5" {...children} />;
  },


 

  normal: (props: any) => {
    return <p className="text-justify text-copy-primary dark:text-copy-primary" {...props} />;
  },

  blockquote: ({ children }: any) => {
    return  <blockquote className=" border-l-white rounded   border-l-4  py-5 " {...children} />;
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
