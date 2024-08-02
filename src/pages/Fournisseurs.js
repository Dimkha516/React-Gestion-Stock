import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FournisseursDisp from '../components/image/FournisseursDisp';
import Logo from '../components/image/Logo';
import Navigation from '../components/image/Navigation';

const Fournisseurs = () => {

    const[fourData, setFourData] = useState([]);

    useEffect(() => {
        axios
            .get("fournisseur.json")
                .then((res) => (setFourData(res.data.fournisseurs)));
    }, [])

    return (
        <div className="fournisseurs">
            <Logo />
            <Navigation />

            <div className="content">

                <div className="title">
                    <h5>Nom</h5>
                    <h5>Téléphone</h5>
                    <h5>Adress</h5>
                </div>

                {fourData
                    .map((fourn) => (
                        <FournisseursDisp fourn={fourn} key={fourn.id} /> 
                    )
                    )}
                
            </div>
            
        </div>
    );
};

export default Fournisseurs;