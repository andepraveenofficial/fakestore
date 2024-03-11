import React from 'react'
import Product from '../Components/Product'

import { productsListHardData } from '../Utils/productsListHardData'

const FakeStore = () => {
    console.log(productsListHardData)
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
                        <ul className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {productsListHardData.map((eachProduct) => (
                                <Product key={eachProduct.id} productDetails={eachProduct} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FakeStore