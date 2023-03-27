import React from 'react'
import Navbar from '../Navbar'
import { Box } from '@mui/system'
import { ProductPageCard } from '../Components/ProductPageCard'
import { useParams } from 'react-router-dom'
import { storeContext } from '../store/StoreProvider';
import { useContext } from 'react'
import { Redirect } from "react-router-dom"

export function ProductPage() {
    const { id: idFromUrl } = useParams();
    const { state, dispatch } = useContext(storeContext);
    const currentProduct = state?.products?.find((product) => { return product?.id === parseInt(idFromUrl) })
    if (currentProduct) {
        return (
            <div className="page">
                <Navbar />
                <main>
                    <Box>
                        <ProductPageCard productInfo={currentProduct} dispatch={dispatch} />
                    </Box>
                </main>
            </div>
        )
    }

    return (
        <Redirect to="/" />
    )


}
