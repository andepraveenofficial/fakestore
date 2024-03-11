import { useParams, useNavigate } from 'react-router-dom';
import useGetData from '../Hooks/useGetData';
import { PRODUCTS_LIST_API } from '../Services/fakeStoreAPIs';
// import { productItemHardData } from '../Utils/productItemHardData';

const ProductPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate()
    // const product = productItemHardData;
    const url = PRODUCTS_LIST_API + productId;
    const product = useGetData(url)

    if (!product) return <p className='h-screen text-center m-52'>Loading....</p>

    return (
        <div className="container p-10 px-4 m-4 mx-auto border shadow-2xl rounded-3xl">
            <div className="max-w-2xl mx-auto mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <img src={product.image} alt={product.title} className="w-full transition duration-300 rounded-lg shadow-lg hover:opacity-90" />
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-800">{product.title}</h2>
                        <p className="mb-4 text-lg text-gray-700">${product.price}</p>
                        <p className="text-gray-600">{product.description}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-gray-700">Rating:</span>
                            <span className="ml-2 text-yellow-500">{product.rating.rate}</span>
                            <span className="ml-1 text-gray-700">({product.rating.count} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8 text-center'>
                <button className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600" onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>


        </div>
    );
};

export default ProductPage;
