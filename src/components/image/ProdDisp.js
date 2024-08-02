import React from 'react';

const ProdDisp = ({ prod }) => {
    return (
        <div className="list-produits">

            <img src={prod.image} height="105" alt="produits"/>
            <h3>{prod.designation}</h3>
            <h4>{prod.prixUnitaire} FCFA</h4>
            <p>Quantité en Stock: {prod.quantiteStocke}</p>
        
        </div>
    );
};

export default ProdDisp;