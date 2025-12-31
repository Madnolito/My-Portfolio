import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout"; 

import { Experiencia } from "../Components/CV/Experiencia";
import { Contacto } from "../Components/CV/Contacto";
import { Sobremi } from "../Components/CV/Sobre-mi";
import { Habilidades } from "../Components/CV/Habilidades";
import { Proyectos } from "../Components/CV/Proyectos";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>

        {/* Se abre automaticamente "experiencia" al entrar al sitio */}
        {/* <Route index element={<Navigate to="experiencia" replace />} /> */} 


          <Route
            path="experiencia"
            element={
                <Experiencia />      
            }
          />
          <Route
            path="contacto"
            element={
                <Contacto />
            }
          />
          <Route
            path="sobre-mi"
            element={
                <Sobremi />
            }
          />
          <Route
            path="habilidades"
            element={
                <Habilidades />
            }
          />
          <Route
            path="proyectos"
            element={
                <Proyectos />
            }
          />          
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}
