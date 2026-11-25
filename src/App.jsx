import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import EspecialidadesPage from "./pages/EspecialidadesPage";
import EquipoPage from "./pages/EquipoPage";
import PlanesPage from "./pages/PlanesPage";
import TecnologiaPage from "./pages/TecnologiaPage";
import CitaPage from "./pages/CitaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "especialidades", element: <EspecialidadesPage /> },
      { path: "equipo", element: <EquipoPage /> },
      { path: "planes", element: <PlanesPage /> },
      { path: "tecnologia", element: <TecnologiaPage /> },
      { path: "cita", element: <CitaPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}