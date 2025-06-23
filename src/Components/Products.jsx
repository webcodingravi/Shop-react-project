import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { useState } from "react";

const Products = () => {
    const [product,setProduct] = useState([
        {
            title: 'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/images/products/product-1.jpg'
        },
           {
            title: 'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/images/products/product-2.jpg'
        },

           {
            title: 'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/images/products/product-3.jpg'
        },

           {
            title: 'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/images/products/product-4.jpg'
        },

           {
            title: 'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/images/products/product-5.jpg'
        },

           {
            title: 'New blue shirts mens',
            price: 1200,
            discount:20,
            thumbnail:'/images/products/product-6.jpg'
        }
    ])
    return (
        <>
         <Layout>

          <div className="p-8 md:p-16">
            <h1 className="text-3xl font-bold text-center">All Products</h1>
             <p className="mx-auto mt-2 mb-6 text-center text-gray-600 md:w-7/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse quisquam ab neque vitae porro officia, temporibus impedit doloremque alias fuga et hic commodi modi suscipit quas, officiis iusto libero?</p>
             <div className="grid gap-12 mx-auto md:w-10/12 md:grid-cols-4">
                 {
                    product.map((item,index) => (
                        <div key={index} className="bg-white shadow-lg">
                            <img src={item.thumbnail} />
                            <div className="p-4">
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                                <div className="space-x-2">
                                    <label className="text-lg font-bold">₹{item.price-(item.price*item.discount)/100}</label>
                                    <del>₹{item.price}</del>
                                    <label className="text-gray-600">({item.discount}%)</label>
                                </div>
                                <button className="w-full py-2 mt-4 font-semibold text-white bg-green-500 rounded cursor-pointer">Buy Now</button>
                                <button className="w-full py-2 mt-2 font-semibold text-white bg-rose-500 rounded cursor-pointer">
                                    <i className="ri-shopping-cart-line mr-2"></i>
                                    Add to Cart</button>
                            </div>
                        </div>
                    ))
                 }
             </div>
          </div>
         </Layout>
        </>
    )
}
export default Products;