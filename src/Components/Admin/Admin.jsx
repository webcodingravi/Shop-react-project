import {useState} from 'react'
const Admin = () => {
    const [size, setSize] = useState(280);
    const [accountMenu, setAccountMenu] = useState(false);
    return (
        <>
         <aside style={{width:size, transition:'0.3s'}} className="bg-indigo-600 fixed top-0 left-0 h-full">

         </aside>
            <section className="bg-gray-100 h-screen" style={{marginLeft:size, transition:'0.3s'}}>
           <nav className="bg-white p-6 shadow flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button onClick={()=>setSize(size == 280 ? 0 : 280)}
             className="bg-gray-50
              hover:bg-indigo-600 
              hover:text-white w-8 h-8 cursor-pointer">
            <i class="ri-menu-2-line text-xl"></i>
            </button>
         
          <h1 className="text-md font-semibold">ShopCode</h1>
          </div>


          <div>
            <button className='relative'>
            <img src="./images/avt.png" alt="avt-image" className='w-10 h-10 rounded-full cursor-pointer' onClick={()=>setAccountMenu(!accountMenu)}/>
              {
                accountMenu && 

                <div className='absolute top-14 right-0 bg-white shadow-lg p-6 w-[200px]'>
                <div>
                    <h1 className='text-lg font-semibold'>Ravi Kumar</h1>
                    <p className='text-gray-500'>ravi@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4"/>
                    <button>
                    <i class="ri-logout-circle-r-line mr-2"></i>
                        Logout
                        </button>
                </div>
                </div>
              }

            
           
            </button>
          </div>
           </nav>


            </section>
       
        </>
    )
}

export default Admin;