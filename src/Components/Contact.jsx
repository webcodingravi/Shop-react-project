import Layout from "./Layout";

const Contact = () => {
    return (
        <>
        <Layout>
            <div>
                <header className="md:w-6/12 mx-auto md:my-16 md:shadow-lg">
                 <img src="/images/contact12.png" className="w-full"/>
                 <div className="p-8">
                     <form className="mt-4 space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Your name</label>
                    <input type="text" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="Jon Doe" required/>
                </div>

                 <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Email Id</label>
                    <input type="email" className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="example@gamil.com"/>
                </div>

                 <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Message</label>
                    <textarea rows={4} className="p-3 border border-gray-300 rounded focus:outline-none" placeholder="Enter your message here"> </textarea>
                </div>


                <button className="p-3 bg-blue-600 text-white font-semibold py-3 px-8 rounded cursor-pointer hover:bg-rose-600">Get Quote</button>

             </form>
                 </div>
                </header>
            </div>
        </Layout>

        </>
    )
}

export default Contact;