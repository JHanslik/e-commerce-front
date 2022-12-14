import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ countArticles }) => {
    const [hidden, setHidden] = useState(true);
    const [numberOfProducts, setNumberOfProducts] = useState(0);

    useEffect(() => {
        setNumberOfProducts(countArticles);
    }, [countArticles]);

    const handleHiddenClick = () => {
        setHidden(!hidden);
    };

    return (
        <nav className="p-3 bg-gray-800 border-gray-700">
            <div className="container max-w-[1080px] flex flex-wrap justify-between items-center mx-auto">
                <NavLink to={"/"} className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-10"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                        E-commerce
                    </span>
                </NavLink>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                    onClick={handleHiddenClick}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`${
                        hidden && "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800  border-gray-700">
                        <li onClick={handleHiddenClick} className="mx-auto">
                            <NavLink
                                to={"/"}
                                className="link block py-2 pr-4 pl-3  rounded   md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-transparent hover:text-white "
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li onClick={handleHiddenClick} className="mx-auto">
                            <NavLink
                                to={"/categories"}
                                className="link block py-2 pr-4 pl-3  rounded   md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-transparent hover:text-white "
                            >
                                Categories
                            </NavLink>
                        </li>
                        <li onClick={handleHiddenClick} className="mx-auto">
                            <NavLink
                                to={"/orders"}
                                className="link relative block py-2 pr-4 pl-3  rounded   md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-transparent hover:text-white "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                {numberOfProducts > 0 && (
                                    <>
                                        <span className="sr-only">
                                            Notifications
                                        </span>
                                        <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-gray-900">
                                            {numberOfProducts}
                                        </div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
