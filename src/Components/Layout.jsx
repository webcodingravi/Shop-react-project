import { useState } from 'react'
import {Link} from 'react-router-dom'
const Layout = ({children}) => {
   const[open,setOpen] = useState(false)
    const menus = [
        {
            lable: "Home",
            href: "/"
        },
          {
            lable: "Products",
            href: "/products"
        },
          {
            lable: "Category",
            href: "/category"
        },
           {
            lable: "Contact us",
            href: "/contact-us"
        }
    ]
     return (
        <>
         <nav className="sticky top-0 left-0 shadow-lg bg-slate-50 z-[9999]">
              <div className="flex items-center justify-between w-10/12 mx-auto">
               <img src="/images/logo.png" className="w-[94px] cursor-pointer"/>  
               <button className='md:hidden' onClick={()=>setOpen(!open)}>
                <i className='ri-menu-3-fill text-3xl'></i>
               </button>
                <ul className='md:flex items-center gap-6 hidden'>
                    {
                        menus.map((item,index)=>(
                           <li key={index}>
                            <Link to={item.href} className='block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white'>{item.lable}</Link>
                           </li>  
                        ))
                    }
                    <Link className='block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white' to="/login">Login</Link>
                    <Link className='block px-10 py-3 font-semibold text-center text-white bg-blue-600 hover:bg-rose-600 hover:text-white text-md' to="/signup">Signup</Link>

                </ul>
              </div>

                   {/* mobile aside section */}
           <aside className='bg-slate-900 shadow-lg fixed top-0 left-0 h-full md:hidden overflow-hidden z-50'
            style={{width: (open ? 250 : 0), transition: '0.3s'}}>
                  <div className='flex flex-col p-8 gap-6'>
                    {
                      menus.map((item,index) => (
                        <Link to={item.href} key={index} className='text-white'>{item.lable}</Link>
                      ))
                    }
                  </div>
           </aside>
         </nav>

      



          <div>
            {children}
          </div>


         {/* footer section */}
         <footer className='pb-5 pt-16 bg-indigo-950 px-8 md:px-0'>
            <div className="grid mx-auto md:grid-cols-4 md:w-10/12 gap-6 md:gap-0">
                <div>
                <h1 className='mb-3 text-2xl font-semibold text-white md:mb-3'>Website Links</h1>
                <ul className='space-y-2 text-slate-50'>
                    {
                        menus.map((item,index) => (
                         <li key={index}>
                          <i class="ri-arrow-right-circle-line mr-2"></i>
                            <Link to={item.href}>{item.lable}</Link>
                         </li>
                        ))
                    }
                    <li>
                      <i class="ri-arrow-right-circle-line mr-2"></i>
                        <Link to="/login">Login</Link>
                    </li>
                   <li>
                    <i class="ri-arrow-right-circle-line mr-2"></i>
                     <Link to="/signup">Signup</Link>
                   </li>
                    </ul> 
                </div>

                <div>
                <h1 className='mb-3 text-2xl font-semibold text-white'>Follow us</h1>
                <ul className='space-y-2 text-slate-50'>
                    <li>
                      <i class="ri-facebook-fill mr-2"></i>
                    <Link to="/">Facebook</Link>
                    </li>
                   <li>
                    <i class="ri-youtube-fill mr-2"></i>
                     <Link to="/">Youtube</Link>
                   </li>
                    <li>
                      <i class="ri-twitter-fill mr-2"></i>
                     <Link to="/">Twitter</Link>
                   </li>
                    <li>
                      <i class="ri-linkedin-box-fill mr-2"></i>
                     <Link to="/">Linkdin</Link>
                   </li>
                    <li>
                      <i class="ri-instagram-fill mr-2"></i>
                     <Link to="/">Instagram</Link>
                   </li>
                    </ul> 
                </div>

                  <div className='pr-8'>
                <h1 className='mb-3 text-2xl font-semibold text-white'>Brand Details</h1>
                <p className='mb-6 text-slate-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maxime dolores, nulla vel distinctio quasi natus odio.</p>
                <img src="/images/logo.png" className="w-[100px] cursor-pointer"/>  
                </div>
                
                <div>
                <h1 className='mb-3 text-2xl font-semibold text-white'>Contact Us</h1>
              <form className='space-y-4'>
                <input type="text" name='fullname' className='w-full p-3 bg-white rounded focus:outline-none' placeholder='Your Name' required/>
                <input type="email" name='email' className='w-full p-3 bg-white rounded focus:outline-none' placeholder='Enter Email id' required/>
                <textarea name="message" className='w-full p-3 bg-white rounded focus:outline-none' placeholder='Message' rows={3} required></textarea>
                <button className='px-6 py-3 text-white bg-purple-950 rounded cursor-pointer w-full hover:bg-purple-900'>
                  <i class="ri-arrow-right-circle-line mr-2"></i>
                  Submit</button>

              </form>
                </div>
            </div>
              <div className='flex justify-center mt-6 text-white font-medium'>
                 ©copyright ({new Date().getFullYear()})<Link to={'/'} className='text-violet-500 px-1 cursor-pointer'>Faimly supermarket</Link>All Rights Reserved.
              </div>
         </footer>

     

            
        </>
     )
}
export default Layout;