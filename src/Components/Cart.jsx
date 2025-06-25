import { useState } from "react";
import Layout from "./Layout";
const Cart = () => {
    const [products,setProducts] = useState([
        {
            title: 'Nokia smartphon new',
            price:20000,
            discount:15,
            image:'/images/products/product-1.jpg'
        },

         {
            title: 'Nokia smartphon new',
            price:20000,
            discount:15,
            image:'/images/products/product-2.jpg'
        }
    ])

    const price = (price,discount) => {
         const amount = price * discount / 100;
         const NetAmount = price-amount;
         return NetAmount.toLocaleString()
    }
 return (
    <>
     <Layout>
        <div className="md:my-16 mx-auto md:w-7/12 bg-white shadow-lg border rounded-md p-8">
            <div className="flex items-center gap-4">
                <i className="ri-shopping-cart-line text-4xl"></i>
                <h1 className="text-3xl font-semibold">Cart</h1>
            </div>
            <hr className="my-6"/>
            <div className="space-y-12">   
                {
                    products.map((item,index)=> (
                        <div key={index} className="flex gap-4">
                            <img src={item.image} className="w-[100px] border-3 border-white shadow"/>
                             <div>
                                <h1 className="font-semibold capitalize text-lg">{item.title}</h1>
                                <div className="flex flex-col gap-4">
                                    <div className="space-x-3">
                                    <label className="text-lg font-semibold">₹{price(item.price,item.discount)}</label>
                                    <del>₹{item.price.toLocaleString()}</del>
                                    <label className="text-gray-500">₹{item.discount}% Discount</label>
                                    </div>
                                    <button className="bg-rose-600 text-white px-4 py-2 rounded cursor-pointer w-fit">
                                        <i className="ri-delete-bin-line mr-2"></i>
                                        Remove
                                    </button>
                                </div>
                             </div>
                            </div>
                    ))
                }
            </div>
         <hr className="my-6"/>
        <div className="flex justify-between items-center">
             <h1 className="font-semibold text-2xl">Total: ₹57,000</h1>
         <button className="bg-green-500 text-white px-12 py-3 rounded cursor-pointer w-fit mt-4 hover:bg-rose-600">
         <i className="ri-shopping-bag-4-line mr-2"></i>
          Buy Now
          </button>
        </div>
        </div>
     </Layout>
    </>
 )
}

export default Cart;