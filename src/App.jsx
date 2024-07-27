import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';
import AllCars from './Components/AllCars/AllCars';
function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<MasterLayout />,
      errorElement:<NotFound />,
      children:[
        {index:true,element:<Home/>},
        {path:'home',element:<Home/>},
       {path:'details',element:<Details/>},
       {path:'allCars',element:<AllCars />}
      ]
    }
])
return (
  <> 
  <RouterProvider router={routes}></RouterProvider>
  </>
)
}

export default App
