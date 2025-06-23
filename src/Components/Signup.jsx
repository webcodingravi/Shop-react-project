import { useState } from "react";
import {Link} from "react-router-dom"

const Signup = () => {
    const [passwordType,setPasswordType] = useState('password')
    return (
        <>
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
          <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover"/>
          <div className="flex flex-col md:p-16 p-8">
             <h1 className="text-4xl font-bold">New User</h1>
             <p className="text-lg text-gray-600">Create your account to start shopping</p>
             <form className="mt-8 space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Fullname</label>
                    <input type="text" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="Enter Name" required/>
                </div>

                 <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Email Id</label>
                    <input type="email" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="example@gamil.com"/>
                </div>


                   <div className="flex flex-col relative">
                    <label className="font-semibold text-lg mb-1">Password</label>
                    <input type={passwordType} className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="*******"/>
                    <button onClick={()=>setPasswordType(passwordType === 'password' ? 'text' : 'password')} type="button" className="absolute top-11 right-4 cursor-pointer hover:bg-gray-200 w-8 h-8 rounded-full hover:text-blue-600">
                        {
                            passwordType === 'password' ?
                                <i className="ri-eye-line"></i>
                                :
                                <i className="ri-eye-off-line"></i>
                        }
                        
                        
                    </button>
                </div>

                <button className="p-3 bg-blue-600 text-white font-semibold py-3 px-8 rounded cursor-pointer hover:bg-rose-600">Signup</button>

             </form>
              <div className="mt-2">
              Already have an account ? <Link to={"/login"} className="text-blue-600 font-semibold">Sign In</Link>
             </div>
          </div>
        </div>

        </>
    )
}

export default Signup;