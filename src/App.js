import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Clients from "./pages/Clients";
import Fournisseurs from "./pages/Fournisseurs";
import Historique from "./pages/Historique";
import Produits from "./pages/Produits";
import Stock from "./pages/Stock";

const App = () => {
  return(

    <BrowserRouter>

      <Routes>

      <Route path="/" exact element={<Accueil />} />
      <Route path="/prod" exact element={<Produits />} />
      <Route path="/cli" exact element={<Clients />} />
      <Route path="/four" exact element={<Fournisseurs />} />
      <Route path="/stk" exact element={<Stock />} />
      <Route path="/histo" exact element={<Historique />} />
      <Route path="*" element={<Accueil />} />

      </Routes>
    
    </BrowserRouter>
    
  )
};

export default App;