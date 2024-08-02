import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {


    return (
       <nav className="navigation">

           <h2>Tableau de Bord</h2>
           <ul>
               <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
                    <li> <img src="./images/accueil.png" height="45" alt="acc" /> Accueil</li>
               </NavLink>

               <NavLink to="/prod" className={(nav) => (nav.isActive ? "active" : "")}>
                   <li> <img src="./images/produits.jpg" height="45" alt="prod" /> Produits</li>
               </NavLink>

               <NavLink to="/cli" className={(nav) => (nav.isActive ? "active" : "")}>
                   <li> <img src="./images/client.jpg" height="45" alt="cli" /> Clients</li>
               </NavLink>

               <NavLink to="/four" className={(nav) => (nav.isActive ? "active" : "")}>
                   <li> <img src="./images/fournisseur.jpg" height="45" alt="fourn" /> Fournisseurs</li>
               </NavLink>

               <NavLink to="/stk" className={(nav) => (nav.isActive ? "active" : "")}>
                   <li> <img src="./images/stok.jpg" height="45" alt="st" /> Stock</li>
               </NavLink>

               <NavLink to="/histo" className={(nav) => (nav.isActive ? "active" : "")}>
                   <li> <img src="./images/historique.jpg" height="45" alt="stock" /> Historique</li>
               </NavLink>
           </ul>
           
       </nav>
    );
};

export default Navigation;