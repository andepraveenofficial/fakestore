/* eslint-disable react/prop-types */

import { useState } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { productItemHardData } from "../Utils/productItemHardData";

const Product = ({ productDetails }) => {
    const { title, price, description, category, image, rating } = productDetails;
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return (
        <li className='m-2'>
            <Link to={`/product/${productDetails.id}`}>
                <div className="relative overflow-hidden bg-white border border-gray-200 shadow-md cursor-pointer rounded-xl hover:shadow-2xl">
                    <img src={image} alt="Product Image" className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 " />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 ">{title}</h4>
                        {showMoreInfo ? (
                            <p className="mt-2 text-sm text-gray-600 ">{description}</p>
                        ) : (
                            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
                        )}
                        {description.length > 100 && (
                            <button className="mt-1 text-sm text-blue-500 hover:underline focus:outline-none" onClick={toggleMoreInfo}>
                                {showMoreInfo ? "Show Less" : "Show More"}
                            </button>
                        )}

                        <p className="mt-2 text-sm text-gray-500 "><span className="font-semibold">Category</span>: {category}</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-xl font-bold text-gray-800 ">${price}</p>
                            <div className="flex items-center">
                                <FcRating />
                                <p className="ml-1 text-sm text-gray-600 ">{rating.rate} ({rating.count})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Product;
