import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Container, Box } from '@mui/system'
import { ListingPageProductCard } from '../Components/ListingPageProductCard';
import { storeContext } from '../store/StoreProvider';
import { StarRateSharp } from '@mui/icons-material';
import { Typography } from '@mui/material';

export function Cart() {
  const { state, dispatch } = useContext(storeContext);
  console.log(state.cartProductsList)
  function isProductInCartFn(product) {
    let isProductInCart = false;
    for (let pic of state.cartProductsList) {
      if (product.id === pic.id) {
        console.dir(product)
        console.log(pic)
        console.log(`its a match`)
        isProductInCart = true;
        break;
      }
    }
    return isProductInCart;
  }

  let productsInCart = state.products.filter((product) => { return isProductInCartFn(product) })


  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            {
              productsInCart.map((product) => {
                const qtyInCart = state.cartProductsList.find((cartProductObj) => cartProductObj.id === product.id).qty;
                return <ListingPageProductCard key={`${product.id}${product.title.slice(1, 7)}`} productInfo={product} dispatch={dispatch} isRenderedInCart={true} qtyInCart={qtyInCart} />
              })
            }{
              productsInCart.length === 0 && <Box>  <Typography gutterBottom variant="h5" component="div"> Cart is empty</Typography> </Box>
            }
          </Box>
        </Container>
      </main>
    </>
  )
}





