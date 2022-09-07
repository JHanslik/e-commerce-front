import React from "react";

const ProductArticle = ({product}) => {
    return (
    <section className="flex justify-center py-5 ">
        <div href="#" className="flex  bg-white rounded-lg border shadow-md ">
            <div className="w-[650px] ">
                <img className="w-9/12 object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg" src={product.image} alt="" />
            </div>
            <div className="flex flex-col p-5 ">
                <div className="flex flex-col ">
                        <h5 className=" mb-2 text-5xl font-bold text-gray-900 text-right p-5">{product.name}</h5>
                        <p className=" w-[500px] mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 text-right p-5">{product.description}</p>
                        <p className={`w-[500px] mb-3 font-bold text-lg text-gray-700 text-right p-5  ${product.inStock ? ("text-green-500") : ("text-red-500")}`}>{product.inStock ? ("This article is available") : ("This article isn't available")}</p>
                </div>
                <div class="flex gap-20 items-center pt-5 justify-end">
                    <span class="text-5xl flex justify-end font-bold text-gray-900 p-5">{product.price / 100} $</span>
                    <a href="#" class="text-white bg-blue-700 mx-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    </section>

    )
}

export default ProductArticle