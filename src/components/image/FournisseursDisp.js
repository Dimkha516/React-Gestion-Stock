import React from 'react';

const FournisseursDisp = ({ fourn }) => {
    return (
        <div className="list-fournisseurs">
            <h3>{fourn.nom}</h3>
            <h3>{fourn.telephone.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h3>
            <h3>{fourn.adress}</h3>
        </div>
    );
};

export default FournisseursDisp;