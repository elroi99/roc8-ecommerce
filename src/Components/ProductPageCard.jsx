import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IconButton } from '@mui/material';
import Box from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCartActionCreator } from '../store/actions';

export function ProductPageCard(props) {
    console.log(props);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.productInfo?.image}
                title={props.productInfo.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.productInfo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.productInfo.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" startIcon={<LocalMallIcon />} onClick={() => { props.dispatch(addToCartActionCreator(props.productInfo.id)) }}> Add to cart </Button>
            </CardActions>
        </Card>
    );
}