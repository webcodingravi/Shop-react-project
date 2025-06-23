import Layout from './Layout'
import {useState} from 'react'
const Customers = () => {
    const [customers, setCustomers] = useState([
        {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            date:'12-10-2024 10:15:14 AM',
            address: "Dass garden Baprola vihar New Delhi"

        },

           {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            date:'12-10-2024 10:15:14 AM',
            address: "Dass garden Baprola vihar New Delhi"


        },

           {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            date:'12-10-2024 10:15:14 AM',
            address: "Dass garden Baprola vihar New Delhi"


        },
  
    ]);
    return (
        <>
        <Layout>
            <div>
                 <h1 className="text-xl font-semibold">Customers</h1>
                 <div className="mt-6 overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-white bg-rose-600">
                                <th className="p-4">Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                               customers.map((item,index) => (
                                 <tr key={index} style={{background:(index+1)%2 == 0 ? '#f1f5f9' : 'white'}}>
                                    <td className='px-4 py-2 capitalize'>
                                      <div className='flex items-center gap-3'>
                                        <img src="/images/avt.png" className='w-10 h-10 rounded-full cursor-pointer' alt="" />
                                        <div className='flex flex-col justify-center'>
                                           <span className='font-semibold'>{item.customerName}</span>
                                           <small className="text-gray-500">{item.date}</small>
                                        </div>
                                      </div>
                                      
                                      </td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.date}</td>
                                    <td>{item.address}</td>
                              
                                 </tr>
                               ))
                              }

                    
                        </tbody>
                     
                    </table>
                 </div>
            </div>
           
        </Layout>
        
        </>
    )
}

export default Customers;