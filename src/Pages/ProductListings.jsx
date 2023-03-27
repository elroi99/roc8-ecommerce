import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { storeContext } from "../store/StoreProvider";
import {
  setDataActionCreator,
  setErrorStateActionCreator,
  setLoadingActionCreator,
} from "../store/actions";
import {
  increaseQuantityInCartActionCreator,
  addToCartActionCreator,
} from "../store/actions";
import Navbar from "../Navbar";
import { ListingPageProductCard } from "../Components/ListingPageProductCard";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { SearchBar } from "../Components/SearchBar";
import { Typography } from "@mui/material";

const ENDPOINT_BASE = "https://fakestoreapi.com/products?";

export function ProductListings() {
  const { state, dispatch } = useContext(storeContext);
  let [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    console.log("deciding ran")
    // only get data if there are no products in the globalStore
    // this does not make sense
    if (state.products.length === 0) {
      console.log("product listing useEffect ran")
      dispatch(setErrorStateActionCreator({ isError: false, message: "" }));
      dispatch(setLoadingActionCreator(true));
      (async () => {
        let url = `${ENDPOINT_BASE}${new URLSearchParams({
          limit: 20,
        }).toString()}`;

        try {
          let productData = (await axios.get(url)).data;
          console.log(productData);
          dispatch(setDataActionCreator(productData));
        } catch (error) {
          // TODO -- give a better alert to the user
          console.log(error);
          dispatch(
            setErrorStateActionCreator({
              isError: true,
              message: error.message ?? "an error occured",
            })
          );
        } finally {
          dispatch(setLoadingActionCreator(true));
        }
      })();
    }
  }, [state.products, dispatch]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function searchResults() {
    // our function should not crash and burn when the products array is empty
    if (state.products.length > 0) {
      return state.products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    } else {
      return []
    }
  }
  return (
    <div>
      <Navbar />

      <main>
        <Container maxWidth="lg">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            {
              searchResults().map((product) => <ListingPageProductCard key={`${product.id}${product.title.substring(2, 10)}`} isRenderedInCart={false} productInfo={product} dispatch={dispatch} />)
            }
            {
              searchResults().length === 0 ? <Typography gutterBottom variant="h5" component="div"> No matches </Typography> : null
            }
          </Box>
        </Container>
      </main>
    </div>
  );
}
