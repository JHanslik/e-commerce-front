import React from "react";

const Button = ({text, type}) => {
    return (
    <section className="flex justify-center py-1.5">
        <button type={type} className="text-white bg-teal-500 rounded py-2 px-10 hover:bg-teal-700 my-4 disabled:opacity-60 disabled:cursor-not-allowed">{text}</button>
    </section>
    )
}

export default Button