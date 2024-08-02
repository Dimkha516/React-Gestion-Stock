import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../components/image/Logo';
import Navigation from '../components/image/Navigation';

const Historique = () => {

    const dateFormat = (chaine) => {
        let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        return newDate;
    }

    const [historiqueData, setHistoriqueData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3004/histo")
            .then((res) => setHistoriqueData(res.data)
            )
    }, [])

    return (
        <div className="historique">
            <Logo />
            <Navigation />

            <div className="content">

                <div className="entete">
                    <h4>N°</h4>
                    <h4>Date</h4>
                    <h4>Opération</h4>
                    <h4>N°Com</h4>
                    <h4>Cl/Four</h4>
                    <h4>TEL</h4>
                    <h4>Adress</h4>
                    <h4>Prod</h4>
                    <h4>QTé</h4>
                    <h4>PU</h4>
                    <h4>Total</h4>
                </div>
                

                {historiqueData
                    .map((operation) => (

                        
                       

                        <div className="global">

                            <div className="position">
                                <h3>{operation.id}</h3>
                            </div>

                            <div className="jour">
                                <h4>{dateFormat(operation.date)}</h4>
                            </div>

                            <div className="operation">
                                <h4>{operation.mouvement}</h4>
                            </div>

                            <div className="numero">
                                <h4>{operation.numbCommande}</h4>
                            </div>

                            <div className="personne">
                                <h4>{operation.fourClient}</h4>
                            </div>

                            <div className="phone">
                                <h4>{operation.telephone}</h4>
                            </div>

                            <div className="lieu">
                                <h4>{operation.adress}</h4>
                            </div>

                            <div className="prod">
                                <h4>{operation.produit}</h4>
                            </div>

                            <div className="quant">
                                <h4>{operation.quantite}</h4>
                            </div>

                            <div className="prix">
                                <h4>{operation.prixUnit}</h4>
                            </div>

                            <div className="total">
                                <h4>{operation.total}</h4>
                            </div>

                        </div>
                    
                    )

                    )}
            </div>

        </div>
    );
};

export default Historique;