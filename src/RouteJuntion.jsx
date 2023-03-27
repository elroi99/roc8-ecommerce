import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import { ProductListings } from './Pages/ProductListings'
import { ProductPage } from './Pages/ProductPage'
import { Cart } from './Pages/Cart'
import Navbar from './Navbar'

export default function RouteJunction() {
    return (<>
        <Router>
            <Switch>
                <Route exact path="/">
                    <ProductListings />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    </>
    )
}
