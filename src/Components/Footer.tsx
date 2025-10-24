
import Link from 'next/link'
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className=' p-6 text-gray-500 mt-auto'>
        <div className="mx-auto max-w-3xl p-8 w-full flex  flex-col justify-between items-center text-center border-t-[1px] border-[#3e93d5] border-opacity-50 ">
          <h2 className='mb-4 hover:text-blue-500'>MD</h2>
          <ul className='w-full md:w-2/3 flex flex-wrap my-4 justify-center items-center md:flex-nowrap gap-4 md:justify-between'>
            <li className='hover:text-sky-500'><Link href="/">Home</Link></li>
            <li className='hover:text-[#3e93d5]'><Link href="/about">About</Link></li>
            <li className='hover:text-[#3e93d5]'><Link href="/projects">Projects</Link></li>
            <li className='hover:text-[#2c82ce]'><Link href="/contact">Contact</Link></li>
          </ul>
          <ul className='w-full md:w-2/3 flex flex-wrap my-4 justify-center items-center md:flex-nowrap gap-4 md:justify-between'>
            <li className='hover:text-[#3e93d5]'><Link href="https://www.linkedin.com/in/mohamad-darklt-892834208/"><FaLinkedin/></Link></li>
            <li className='hover:text-[#3e93d5]'><Link href="https://github.com/hanijack"><FaGithub/></Link></li>
            <li className='hover:text-[#2c82ce]'><Link href="https://www.facebook.com/profile.php?id=100008114293788"><FaFacebook/></Link></li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer