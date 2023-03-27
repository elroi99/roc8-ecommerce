import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import {
    addToCartActionCreator,
    removeFromCartActionCreator,
    increaseQuantityInCartActionCreator,
    decreaseQuantityInCartActionCreator,
} from "../store/actions";

export function ListingPageProductCard(props) {
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Link to={`/product/${props.productInfo.id}`}>
                        <Typography component='div' variant='h5'>
                            {props.productInfo.title}
                        </Typography>
                    </Link>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                    >
                        {props.productInfo.price}
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                    {props.isRenderedInCart ? (
                        <div>
                            <Button
                                onClick={() => {
                                    props.dispatch(removeFromCartActionCreator(props.productInfo.id));
                                }}
                                variant='outlined'
                                startIcon={<DeleteForeverIcon />}
                            >
                                {" "}
                                Remove from cart
                            </Button>
                            <CartSpecificSection
                                productInfo={props.productInfo}
                                qtyInCart={props.qtyInCart}
                                dispatch={props.dispatch}
                            />
                        </div>
                    ) : (
                        <Button
                            onClick={() => {
                                props.dispatch(
                                    addToCartActionCreator(props.productInfo.id)
                                );
                            }}
                            variant='outlined'
                            startIcon={<LocalMallIcon />}
                        >
                            {" "}
                            Add to cart
                        </Button>
                    )}
                </Box>
            </Box>
            <CardMedia
                component='img'
                sx={{ width: 151 }}
                image={props.productInfo.image}
                alt={props.productInfo.title}
            />
        </Card>
    );
}

function CartSpecificSection(props) {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <IconButton
                    onClick={() => {
                        props.dispatch(increaseQuantityInCartActionCreator(props.productInfo.id))
                    }}
                >
                    <AddIcon />
                </IconButton>
                <p> {props.qtyInCart} </p>
                <IconButton
                    onClick={() => {
                        props.dispatch(decreaseQuantityInCartActionCreator(props.productInfo.id))
                    }}
                >
                    <RemoveIcon />
                </IconButton>
            </Box>
        </>
    );
}
