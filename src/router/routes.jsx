

import App from '../App';
import Home from '../components/homePage';
import Shop from '../components/shopPage';
import Cart from '../components/cartPage';

const routes = [
    {
        path: "/",
        element : <App />,
        children : [
            {
                path : "home",
                element: <Home />
            },
            {
                path : "shop",
                element: <Shop />
            },
            {
                path : "cart",
                element : <Cart />
            },
        ],
    },
   
];

export default routes;