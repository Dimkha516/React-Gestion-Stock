import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../components/image/Logo';
import Navigation from '../components/image/Navigation';
import ProdDisp from '../components/image/ProdDisp';

const Produits = () => {

    const[productData, setProductData] = useState([]);

    useEffect(() => {
        axios
            .get(
                ("produits.json")
            )
            .then((res) => (setProductData(res.data.produits)))
    }, [])



    return (
        <div className="produits">
            <Logo />
            <Navigation />
            
            <div className="content">

                <div className="title">
                    <h3>Aperçu</h3>
                    <h3>Désignation</h3>
                    <h3>PU</h3>
                    <h3>Disponibilité</h3>
                </div>

                {productData

                    .map((prod) => (
                        <ProdDisp prod={prod} key={prod.id} /> 
                    )
                    
                )}

            </div>
            
        </div>
    );
};

export default Produits;