import Layout from './Layout'
import {useState} from 'react'
const Payments = () => {
    const [payments, setPayments] = useState([
        {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            amount: 5000,
            date:'12-10-2024 10:15:14 AM',

        },

            {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            amount: 5000,
            date:'12-10-2024 10:15:14 AM',

        },


            {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            amount: 5000,
            date:'12-10-2024 10:15:14 AM',

        },


            {
            customerName: 'Ravi Kumar',
            email: 'ravi@gmail.com',
            mobile: '54785662',
            amount: 5000,
            date:'12-10-2024 10:15:14 AM',

        },

  

  
  
    ]);
    return (
        <>
        <Layout>
            <div>
                 <h1 className="text-xl font-semibold">Payments</h1>
                 <div className="mt-6 overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="p-4">Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                               payments.map((item,index) => (
                                 <tr key={index} style={{background:(index+1)%2 == 0 ? '#f1f5f9' : 'white'}}>
                                    <td className='capitalize px-4 py-2'>
                                      <div className='flex items-center gap-3'>
                                        <img src="/images/avt.png" className='cursor-pointer w-10 rounded-full h-10' alt="" />
                                        <div className='flex flex-col justify-center'>
                                           <span className='font-semibold'>{item.customerName}</span>
                                           <small className="text-gray-500">{item.date}</small>
                                        </div>
                                      </div>
                                      
                                      </td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                     <td>₹{item.amount.toLocaleString()}</td>
                                    <td>{item.date}</td>
                              
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

export default Payments;