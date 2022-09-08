import React from "react";

const Select = ({ label, handleChange, options, value }) => {
    return (
        <>
            <section className="flex justify-center py-0.5 text-center">
                <div className="py-4 bg-transparent px-5 rounded ">
                    <label
                        className="block mb-2.5 text-m "
                        htmlFor="city-select"
                    >
                        {label}
                    </label>

                    <select
                        onChange={handleChange}
                        value={value}
                        className="drop-shadow-lg border bg-gray-800 text-gray-200 border-slate-300 rounded-lg w-12/12 p-1 focus:outline-none focus:border-gray-100 focus:ring-1 focus:ring-gray-400"
                        name="cities"
                        id="city-select"
                    >
                        <option value="">Select a category</option>
                        {options.map((option) => {
                            return (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </section>
        </>
    );
};

export default Select;
