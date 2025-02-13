import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth.tsx";
import Main from "./pages/Main/Main.tsx";
import mainLoader from "./pages/Main/mainLoader.ts";
// import Person from "./pages/Person/PersonPage.js";
import Root from "./pages/Root.tsx";
import NewPerson from "./pages/NewPerson/NewPersonPage.tsx";



const router = createBrowserRouter(
  [{
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Auth />,
        // loader: ...Loader,
      },
      {
        path: '/Main',
        element: <Main />,
        loader: mainLoader,
      },
      // {
      //   path: '/Person/:name',
      //   element: <Person />,
      //   // loader: ...Loader,
      // },
      {
        path: '/NewPerson',
        element: <NewPerson />,
        // loader: ...Loader,
      }
    ],
  }]
);




function App() {
  return <RouterProvider router={router} />
}

export default App
