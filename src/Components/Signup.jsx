import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import firebaseAppConfig from "../util/firebase-config";
import { getAuth,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth(firebaseAppConfig)

const Signup = () => {
    const formData = {
          fullname : '',
          email : '',
          password : ''

    }
const navigate = useNavigate()
const [formValue, setFormValue] = useState(formData)
const [passwordType,setPasswordType] = useState('password')
const [error, setError] = useState(null)
const [loader,setLoader] = useState(false)

const handleInput = (e) => {
    const input = e.target
    const value = input.value;
    const key = input.name;
    setFormValue({
        ...formValue,
        [key]:value
    })
    setError(null)
}

     
const signup = async(e) => {
    try{
    e.preventDefault();
    setLoader(true)
    await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
    await updateProfile(auth.currentUser,{displayName: formValue.fullname})
    navigate("/")
     
    }
    catch(err) {
      setError(err.message)
    }
   
    finally {
        setLoader(false)
    }
    
    
}
    
    return (
        <>
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
          <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover"/>
          <div className="flex flex-col md:p-16 p-8">
             <h1 className="text-4xl font-bold">New User</h1>
             <p className="text-lg text-gray-600">Create your account to start shopping</p>
             <form className="mt-8 space-y-6" onSubmit={signup}>
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Fullname</label>
                    <input onChange={handleInput} name="fullname" type="text" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="Enter Name" required/>
                </div>

                 <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Email Id</label>
                    <input onChange={handleInput} name="email" type="email" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="example@gamil.com"/>
                </div>


                   <div className="flex flex-col relative">
                    <label className="font-semibold text-lg mb-1">Password</label>
                    <input onChange={handleInput} name="password" type={passwordType} className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="*******"/>
                    <button onClick={()=>setPasswordType(passwordType === 'password' ? 'text' : 'password')} type="button" className="absolute top-11 right-4 cursor-pointer hover:bg-gray-200 w-8 h-8 rounded-full hover:text-blue-600">
                        {
                            passwordType === 'password' ?
                                <i className="ri-eye-line"></i>
                                :
                                <i className="ri-eye-off-line"></i>
                        }
                        
                        
                    </button>
                </div>

                 {
                    loader ? 
                    <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
                    :
                    <button className="p-3 bg-blue-600 text-white font-semibold py-3 px-8 rounded cursor-pointer hover:bg-rose-600">Signup</button>
                 }
                 
                

             </form>
              <div className="mt-2">
              Already have an account ? <Link to={"/login"} className="text-blue-600 font-semibold">Sign In</Link>
             </div>
             {
                error && 
                 <div className="flex justify-between items-center mt-2 bg-rose-600 p-4 rounded shadow font-semibold text-white animate__animated animate__pulse">
              <p>{error}</p>
              <button className="cursor-pointer" onClick={()=>setError(null)}>
                <i className="ri-close-line"></i>
              </button>
             </div>
             }
            
          </div>
        </div>

        </>
    )
}

export default Signup;