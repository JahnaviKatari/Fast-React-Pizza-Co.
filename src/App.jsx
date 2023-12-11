import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import { MenuLoader } from './features/menu/MenuLoader';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as CreateOrderAction,
} from './features/order/CreateOrder';
import Order from './features/order/Order';
import { OrderLoader } from './features/order/OrderLoader';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
