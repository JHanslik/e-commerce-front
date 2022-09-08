import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ article, setCountArticles, removeFunctionRender }) => {
    const [ids, setIds] = useState([]);

    useEffect(() => {
        let stringifiedBasketProducts = localStorage.getItem("basketProducts");
        const basketProducts = JSON.parse(stringifiedBasketProducts) || [];
        setIds(basketProducts);
    }, []);

    const handleOrderClick = () => {
        let stringifiedBasketProducts = localStorage.getItem("basketProducts");
        let basketProducts = [];

        if (stringifiedBasketProducts) {
            basketProducts = JSON.parse(stringifiedBasketProducts);
        }

        if (!basketProducts.includes(article.id)) {
            basketProducts.push(article.id);
            stringifiedBasketProducts = JSON.stringify(basketProducts);
            localStorage.setItem("basketProducts", stringifiedBasketProducts);
            setIds(basketProducts);
            setCountArticles(basketProducts.length);
        } else {
            basketProducts.splice(basketProducts.indexOf(article.id), 1);
            let stringifiedBasketProducts = JSON.stringify(basketProducts);
            localStorage.setItem("basketProducts", stringifiedBasketProducts);
            setIds(basketProducts);
            setCountArticles(basketProducts.length);

            if (removeFunctionRender) {
                removeFunctionRender(article.id);
            }
        }
    };

    return (
        <div className="w-[300px]  max-h-[60vh]  shadow-md bg-gray-800 border-gray-700 rounded-lg">
            <img
                className="h-[300px] w-[300px] rounded-t-lg object-cover"
                src={article.image}
                alt=""
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                    {article.name}
                </h5>
               
                <p className="mb-3 font-normal  text-gray-400">
                    {article.price / 100} $
                </p>

                <div className="flex gap-10 justify-between">
                    <Link
                        to={`/products/${article.id}`}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        See more
                        <svg
                            aria-hidden="true"
                            className="ml-2 -mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                    <button onClick={handleOrderClick}>
                        {ids.includes(article.id) ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-[50px] inline-flex items-center py-2 px-3 text-white hover:text-blue-700 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-[50px] inline-flex items-center py-2 px-3 text-white hover:text-blue-700 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
