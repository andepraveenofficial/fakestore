import Product from '../Components/Product'
import useGetData from '../Hooks/useGetData'

// import { productsListHardData } from '../Utils/productsListHardData'
import { PRODUCTS_LIST_API } from '../Services/fakeStoreAPIs';

const FakeStore = () => {
    const url = PRODUCTS_LIST_API;
    const productsList = useGetData(url);

    return (
        <div>
            <section>
                <div className="py-16">
                    <div className="max-w-6xl px-6 mx-auto text-gray-500">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-950 dark:text-white">
                                Fake Store
                            </h2>
                            <p className="mt-6 text-gray-700 dark:text-gray-300">
                                You can Select any Product and see Details
                            </p>
                        </div>
                        {productsList ? <ul className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {productsList.map((eachProduct) => (
                                <Product key={eachProduct.id} productDetails={eachProduct} />
                            ))}
                        </ul> : <div className='flex flex-col items-center justify-center h-svh'><p>Loading....</p></div>}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default FakeStore