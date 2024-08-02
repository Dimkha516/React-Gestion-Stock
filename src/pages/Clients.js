import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ClientsDisp from "../components/image/ClientsDisp";
import Logo from "../components/image/Logo";
import Navigation from "../components/image/Navigation";

const Clients = () => {

    const [clientData, setClientData] = useState([]);
    const [searchedClient, setSearchedClient] = useState("");
        
        useEffect(() => {
            axios
                .get(
                    ("clients.json")
                )
                .then((res) => (setClientData(res.data.clients)))
        }, [])


    

    return(
        <div className="clients">
            <Logo />
            <Navigation />

            <div className="content">

                <div className="search">
                    <input type="text" placeholder="Recherche..." onChange={(e) => setSearchedClient(e.target.value)} /> 
                </div>
                
                <div className="title">
                    <h2>Prénom/Nom</h2>
                    <h2>Téléphone</h2>
                    <h2>Address</h2>
                </div>
                
                {clientData
                    .filter((client) => client.prenom.toLowerCase().includes(searchedClient.toLowerCase()))
                    .map((client) => (
                        <ClientsDisp client={client} key={client.id} />
                    )
                )}

            </div>
            
        </div>
    )
}

export default Clients;