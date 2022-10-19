import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";

export const router = createBrowserRouter([
    { path: '/', element: <Layout /> }
])