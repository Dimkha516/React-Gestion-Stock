import React from 'react';

const ClientsDisp = ({ client }) => {
    return (
        <div className="list-clients">
            
            <ul className="list">

                <li> {client.prenom} {client.nom}</li>
                <li>{client.telephone.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</li>
                <li>{client.adress}</li>
            </ul>

        </div>
    );
};

export default ClientsDisp;