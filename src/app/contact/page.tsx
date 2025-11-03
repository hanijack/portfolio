import { Metadata } from "next";
import Image from "next/image";
import Form from "../../Components/Form"
import pic from "../../../public/work.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to my web corner',
}




const Contact = () => {
 
  return (

  <>
  <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Let’s Connect</h2>
<p className="mb-8 text-gray-700 dark:text-gray-300">
  Got a project, opportunity, or just want to talk tech? I’d love to hear from you.
</p>
<div className="flex items-center gap-4 justify-between">
  <a href="mailto:hani.darklt@gmail.com"  className="inline-block mt-4 px-5 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
     <span>📬</span> Say&nbsp;Hello
  </a>
  <div className="flex gap-3 text-2xl justify-end">
    <a href="https://github.com/hanijack" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/mohamad-darklt-892834208" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
      <FaLinkedin />
    </a>
  </div>
</div>

      <section className="mb-24 flex flex-col justify-between items-center gap-y-8 md:flex-row md:items-center animate-fade mt-8">
        <div className="flex flex-col max-w-[300px] gap-2">
          <Image src={pic} alt="img" className="rounded-xl"/>
          <p>Build your website with the most modern technologies.
              with focusing on the most friendly  ui/ux . </p>
        </div>
        <Form/>  
      </section>
  </>
    
  )

}

export default Contact
