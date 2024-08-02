import React from 'react';
import Accueil from '../../pages/Accueil';

const AccueilDisp = ({ historique }) => {

    const dateFormat = (caractere) => {
        let newDate = new Date(caractere).toLocaleDateString("FR-fr", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
        })
        return newDate;
    };

    return (
        <div className="test">

            <div className="historique-display">

                <div className="date">
                    <h5>{dateFormat(historique.date)}</h5>
                </div>

                <div className="mouvement">
                    <h5>{historique.mouvement}</h5>
                </div>

                <div className="num-com">
                    <h5>{historique.numbCommande}</h5>
                </div>

                <div className="four-cli">
                    <h5>{historique.fourClient}</h5>
                </div>

                <div className="telephone">
                    <h5>{historique.telephone}</h5>
                </div>

                <div className="adress">
                    <h5>{historique.adress}</h5>
                </div>

                <div className="produit">
                    <h5>{historique.produit}</h5>
                </div>

                <div className="quantite">
                    <h5>{historique.quantite}</h5>
                </div>

                <div className="prix-unit">
                    <h5>{historique.prixUnit} Fr</h5>
                </div>

                <div className="total">
                    <h5>{historique.total} Fr</h5>
                </div>



            </div>

        </div>


    );
};

export default AccueilDisp;