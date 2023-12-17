

const Footer = () => {

   
  return (
    <footer className=" w-full h-10 flex justify-center items-center bg-copy-primary/10 dark:bg-copy-secondary/30  ">
    <small className='text-copy-primary dark:text-copy-primary'>
        Copyright &copy; 
        <span id="copyright">{new Date().getFullYear().toString()}</span> || All right reserved To SpiningRope
    </small>
    </footer>
  )
}

export default Footer