import {useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
const Layout = ({children}) => {
    const [size, setSize] = useState(280);
    const [mobileSize, setMobileSize] = useState(0);
    const [accountMenu, setAccountMenu] = useState(false);
    const location = useLocation();

    const menus = [
        {
        label: 'Dashboard',
        icon: <i className="ri-dashboard-3-line mr-2"></i>,
        link: '/admin/dashboard'
       },


          {
        label: 'Customer',
        icon: <i className="ri-user-line mr-2"></i>,
        link: '/admin/customers'
       },

       {
        label: 'Products',
        icon: <i className="ri-shopping-cart-line mr-2"></i>,
        link: '/admin/products'
       },

        {
        label: 'Orders',
        icon:  <i className="ri-shape-line mr-2"></i>,
        link: '/admin/orders'
       },

    {
        label: 'Payments',
        icon:  <i className="ri-money-dollar-circle-line mr-2"></i>,
        link: '/admin/payments'
       },

        {
        label: 'Settings',
        icon:  <i className="ri-settings-3-line mr-2"></i>,
        link: '/admin/settings'
       },

   
       


    ]

    return (
        <>
        {/* Desktop */}
        <div className='md:block hidden'>
         <aside style={{width:size, transition:'0.3s'}} className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden">
               <div className='flex flex-col'>
                 {
                  menus.map((item,index)=> (
                <Link key={index} to={item.link} className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-500
                 hover:text-white' style={{background: (location.pathname === item.link) ? '#ec003f' : 'transparent'}}>
                 {item.icon}
                   {item.label}
                    </Link> 
                  ))
                 }
                     <button className='px-4 py-3 text-left text-gray-50 text-[17.5px] hover:bg-rose-500
                 hover:text-white cursor-pointer'>
                <i className='ri-logout-circle-r-line mr-2'></i>
                Logout
               </button>
               </div>
         </aside>
            <section className="bg-gray-100 min-h-screen" style={{marginLeft:size, transition:'0.3s'}}>
           <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
          <div className="flex gap-4 items-center">
            <button onClick={()=>setSize(size == 280 ? 0 : 280)}
             className="bg-gray-50
              hover:bg-indigo-600 
              hover:text-white w-8 h-8 cursor-pointer">
            <i className="ri-menu-2-line text-xl"></i>
            </button>
         
          <h1 className="text-md font-semibold">ShopCode</h1>
          </div>


          <div>
            <button className='relative'>
            <img src="/images/avt.png" alt="avt-image" className='w-10 h-10 rounded-full cursor-pointer' onClick={()=>setAccountMenu(!accountMenu)}/>
            
              {
                accountMenu && 

                <div className='absolute top-14 right-0 bg-white shadow-lg p-6 w-[200px]'>
                <div>
                    <h1 className='text-lg font-semibold'>Ravi Kumar</h1>
                    <p className='text-gray-500'>ravi@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4"/>
                    <button className="cursor-pointer">
                    <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                    </button>
                </div>
                </div>
              }
            </button>
          </div>
           </nav>

            <div className='p-6'>
              {children}
            </div>
            </section>
            </div>

                {/* Mobile */}
              <div className='md:hidden block'>
             <aside style={{width:mobileSize, transition:'0.3s'}} className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden z-50">
               <div className='flex flex-col'>
                <button onClick={()=>setMobileSize(mobileSize == 0 ? 280 : 0)} className='text-left mx-4 mt-4'>
                <i className="ri-menu-2-fill text-white text-xl"></i>
                </button>
                 {
                  menus.map((item,index)=> (
                <Link key={index} to={item.link} className='px-4 py-3 text-left text-gray-50 text-[17.5px] hover:bg-rose-500
                 hover:text-white' style={{background: (location.pathname === item.link) ? '#ec003f' : 'transparent'}}>
                 {item.icon}
                   {item.label}
                    </Link> 
                  ))
                 }
               </div>
               <button className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-500
                 hover:text-white cursor-pointer'>
                <i className='ri-logout-circle-r-line mr-2'></i>
                Logout
               </button>
         </aside>

            <section className="bg-gray-100 h-screen">
           <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
          <div className="flex gap-4 items-center">
            <button onClick={()=>setMobileSize(mobileSize == 0 ? 280 : 0)}
             className="bg-gray-50
              hover:bg-indigo-600 
              hover:text-white w-8 h-8 cursor-pointer">
            <i className="ri-menu-2-line text-xl"></i>

            </button>
         
          <h1 className="text-md font-semibold">ShopCode</h1>
          </div>


          <div>
            <button className='relative'>
            <img src="/images/avt.png" alt="avt-image" className='w-10 h-10 rounded-full cursor-pointer' onClick={()=>setAccountMenu(!accountMenu)}/>
            
              {
                accountMenu && 

                <div className='absolute top-14 right-0 bg-white shadow-lg p-6 w-[200px]'>
                <div>
                    <h1 className='text-lg font-semibold'>Ravi Kumar</h1>
                    <p className='text-gray-500'>ravi@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4"/>
                    <button className="cursor-pointer">
                    <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                    </button>
                </div>
                </div>
              }
            </button>
          </div>
           </nav>

            <div className='p-6'>
              {children}
            </div>
            </section>
            </div>
       
        </>
    )
}

export default Layout;