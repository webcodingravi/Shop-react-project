import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import firebaseAppConfig from '../util/firebase-config'
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth'

const auth = getAuth(firebaseAppConfig)

const Layout = ({children}) => {
   const[open,setOpen] = useState(false)
   const [session, setSession] = useState(null)
   const [accountMenu,setAccountMenu] = useState(false)

   useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
      if(user){
          setSession(user)
      }else{
          setSession(false)
      }
     })
   },[])
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

    if(session === null) {
    return (
         <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
           <svg aria-hidden="true" className="w-11 h-11 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
     <span className="sr-only">Loading...</span>
       </div>

    )
      
    }


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

                    {
                      !session && 
                       <>
                        <Link className='block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white' to="/login">Login</Link>
                         <Link className='block px-10 py-3 font-semibold text-center text-white bg-blue-600 hover:bg-rose-600 hover:text-white text-md' to="/signup">Signup</Link>
                       
                       </>

                    }
                    
                    {
                      session &&
                        <button className='relative cursor-pointer' onClick={()=>setAccountMenu(!accountMenu)}>
                          <img src='/images/avt.png' className='w-10 h-10 rounded-full'/>
                          {
                            accountMenu && 
                            <div className='flex flex-col gap-2 items-start w-[150px] py-3 bg-white absolute top-13 right-0 shadow-xl animate__animated animate__fadeIn'>
                               <Link to="/profile" className='w-full hover:bg-gray-100 text-left px-3 py-2'>
                               <i className='ri-user-line mr-2'></i>
                                My Profile
                                </Link>

                                <Link to="/cart" className='w-full hover:bg-gray-100 text-left px-3 py-2'>
                               <i className='ri-shopping-cart-line mr-2'></i>
                                Cart
                                </Link>

                                 <button className='w-full hover:bg-gray-100 text-left px-2 py-2 cursor-pointer' onClick={()=>signOut(auth)}>
                               <i className='ri-logout-circle-r-line mr-2'></i>
                                Logout
                                </button>

                                  </div>

                          }
                          
                        </button>
                    }

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
                          <i className="ri-arrow-right-circle-line mr-2"></i>
                            <Link to={item.href}>{item.lable}</Link>
                         </li>
                        ))
                    }
                    <li>
                      <i className="ri-arrow-right-circle-line mr-2"></i>
                        <Link to="/login">Login</Link>
                    </li>
                   <li>
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                     <Link to="/signup">Signup</Link>
                   </li>
                    </ul> 
                </div>

                <div>
                <h1 className='mb-3 text-2xl font-semibold text-white'>Follow us</h1>
                <ul className='space-y-2 text-slate-50'>
                    <li>
                      <i className="ri-facebook-fill mr-2"></i>
                    <Link to="/">Facebook</Link>
                    </li>
                   <li>
                    <i className="ri-youtube-fill mr-2"></i>
                     <Link to="/">Youtube</Link>
                   </li>
                    <li>
                      <i className="ri-twitter-fill mr-2"></i>
                     <Link to="/">Twitter</Link>
                   </li>
                    <li>
                      <i className="ri-linkedin-box-fill mr-2"></i>
                     <Link to="/">Linkdin</Link>
                   </li>
                    <li>
                      <i className="ri-instagram-fill mr-2"></i>
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
                  <i className="ri-arrow-right-circle-line mr-2"></i>
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