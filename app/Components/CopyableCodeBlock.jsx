'use client'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, dark,nightOwl ,atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CopyableCodeBlock = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = children?.code;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };



  const codeHighlightCache = new Map();

  const retrieveCodeFromHighlightCache = (language, content) => {
    const cachedItem = codeHighlightCache.get(content);
    if (cachedItem === undefined) {
      const highlighterProps = {
        language,
        children: content,
        style: atomDark,
        wrapLines: true,
        wrapLongLines: true,
        customStyle: {
          borderRadius: "10px"
        }
      }
      SyntaxHighlighter(highlighterProps);
      const cachedVar = SyntaxHighlighter(highlighterProps);
      codeHighlightCache.set(content, cachedVar);
      return cachedVar;
    };

    return cachedItem;
  };

  return (
    <div className="relative">
      <div className="absolute top-[5px] right-0 p-2">
        <button
          onClick={handleCopyClick}
          className=" flex  gap-1  bg-gray-700 rounded border-white/20 hover:bg-white/90
          p-1  font-Louis hover:text-[#333333] transition-all duration-100 hover:scale-105"
        >

          {isCopied ? 'Copied' : 'Copy' }
          <p className='  text-white/50 hover:text-[#333333]'>{children?.language}</p>
        </button>
      </div>
       

      {retrieveCodeFromHighlightCache(children?.language, children?.code)}



    </div>
  );
};

export default CopyableCodeBlock;
