import Layout from './Layout'
import {useState} from 'react'

const Product = () => {
    const [products, setProducts] = useState([
        {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-1.jpg'

        },

            {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-2.jpg'

        },


        {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-3.jpg'

        },
        
           {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-4.jpg'

        },

        {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-5.jpg'

        },

               {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-6.jpg'

        },

        {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 20,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-1.jpg'

        },


             {
            title: `men's shirt slim blue`,
            price: 4500,
            discount: 15,
            discription: 'this is best shirt available in online market',
            image:'/images/products/product-2.jpg'

        }
    ]);
    return (
        <>
        <Layout>
            <>
                <h1 className='mb-4 text-xl font-semibold'>Products</h1>
                 <div className='grid gap-8 md:grid-cols-4'>
                    {
                      products.map((item,index) => 
                       <div key={index} className="bg-white rounded shadow-lg">
                           <img src={item.image} className="object-cover w-full h-[270px] cursor-pointer rounded-t-md"/>
                           <div className='p-4'>
                            <h1 className='font-semibold text-md'>{item.title}</h1>
                            <p className='text-gray-600'>{item.discription.slice(0,50)}...</p>
                            <div className='flex gap-3 mt-1'>
                                <label>₹{item.price-(item.price*item.discount)/100}</label>
                                <del className='font-semibold'>₹{item.price}</del>
                                <label className='text-gray-600'>{item.discount}% off</label>
                            </div>
                           </div>

                       </div>
                    
                    )    
                    }
                 </div>
                </>
           
        </Layout>
         
        </>
    )
}

export default Product;