import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Analytics from "./components/Analytics/Analytics";
import App from "./App";

// 1. Definimos las rutas hijas dentro del Layout
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Esto indica que es la ruta por defecto de "/"
        element: <App />,
        // loader: async () => {
        //     const movies = await getPopularMoviesByPages([1, 2]);
        //     return { movies };
        //}
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "customer",
        element: <div className="text-3xl">Customer page under maintenance.</div>,
      },
      {
        path: "integration",
        element: <div className="text-3xl">Integration page under maintenance.</div>,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      }
    ],
  },
]);