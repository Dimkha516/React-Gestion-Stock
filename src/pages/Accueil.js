import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import Logo from '../components/image/Logo';
import Navigation from '../components/image/Navigation';
import { useState } from 'react';
import AccueilDisp from '../components/image/AccueilDisp';


const Accueil = () => {

    // LES BASES DE DONNEES:
    const [prodData, setProdData] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");

    const [fourData, setFourData] = useState([]);

    const [cliData, setCliData] = useState([]);

    const [histoData, setHistoData] = useState([]);

    // **************************LES VARIABLES:
    const [selectedProduct, setSelectedProduct] = useState("");
    const [correspondPu, setCorrespondPu] = useState("");
    let pu = {
        valuePu: correspondPu
    };

    const [quantity, setQuantity] = useState("");
    let qt = {
        valueQT: parseInt(quantity)
    };

    const [prixUnitaire, setPrixUnitaire] = useState("");


    const [amount, setAmount] = useState("");

    const [numCommande, setNumCommande] = useState("");

    const [mouv, setMouv] = useState("");

    const [fourCli, setFourCli] = useState("");

    const [telephone, setTelephone] = useState("");

    const [adress, setAdress] = useState("");

    // GESTION DES ERREURS:
    const [productError, setProductError] = useState(false);
    const [quantiteError, setQuantiteError] = useState(false);
    const [montantError, setMontantError] = useState(false);
    const [mouvementError, setMouvementError] = useState(false);
    const [numComError, setNumComError] = useState(false);
    const [fourCliError, setFourCliError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);
    const [adressError, setAdressError] = useState(false);


    useEffect(() => {
        getProduit();
        getFournisseur();
        getCli();
        getHisto();
    }, []);

    //************************LES FONCTIONS :

    // RECUPERATION DES BASES DE DONNEES

    const getProduit = () => {
        axios.get("produits.json")
            .then((res) => (setProdData(res.data.produits)));
    };


    const getFournisseur = () => {
        axios.get("fournisseur.json")
            .then((res) => (setFourData(res.data.fournisseurs)))
    }

    const getCli = () => {
        axios.get("clients.json")
            .then((res) => (setCliData(res.data.clients)))
    };

    const getHisto = () => {
        axios
            .get("http://localhost:3000/histo")
            .then((res) => setHistoData(res.data))
    }

    // GENERATEUR NUMERO COMMANDE:
    const aleaNum = (min, max) => {
        setNumCommande(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    // POSTER LA COMMANDE:

    const postHisto = (e) => {
        e.preventDefault();

        if (selectedProduct === "") {
            setProductError(true)
            alert("Veuillez Choisir un Produit sur la liste")
        }

        else if (quantity === "") {
            setQuantiteError(true)
            alert("Veuillz Renseigner la Quantité")
        }

        else if (amount === "") {
            setMontantError(true)
            alert("Cliquez sur le bouton EVALUER d'abord")
        }

        // else if(mouv !== "Sortie") alert("attention");

        else if (numCommande === "") {
            setNumComError(true)
            alert("Vous devez Générer un numéro de commande")
        }

        else if (fourCli === "") {
            setFourCliError(true)
            alert("Donnez le nom du client ou du fournisseur")
        }

        else if (telephone === "") {
            setTelephoneError(true)
            alert("Donnez le Numéro de téléphone")
        }

        else if (adress === "") {
            setAdressError(true)
            alert("Adress manquante")
        }

        else {
            axios.post("http://localhost:3004/histo", {
                date: Date.now(),
                mouvement: mouv,
                numbCommande: numCommande,
                fourClient: fourCli,
                telephone: telephone,
                adress: adress,
                produit: selectedProduct,
                quantite: quantity,
                prixUnit: correspondPu,
                total: amount,
            })
                .then(() => {
                    setProductError(false);
                    setQuantiteError(false);
                    setMontantError(false);
                    setFourCliError(false);
                    setNumComError(false);
                    setTelephoneError(false);
                    setAdressError(false);

                    alert("COMMANDE ENREGISTRÉE AVEC SUCCES")
                    getHisto();
                    window.scrollTo(-4000, -3000)
                })
        }


    }


    return (
        <div className="accueil">
            <Logo />
            <Navigation />

            <div className="content">

                <h1>Mes Opérations</h1>
                <button id="new-commande" onClick={() => window.scrollTo(1000, 800)}>Nouvelle Commande</button>

                <div className="title">
                    <h5 style={{ backgroundColor: "blue", color: "white" }}>Date</h5>
                    <h5 style={{ backgroundColor: "tomato", color: "white" }}>Mouvement</h5>
                    <h5 style={{ backgroundColor: "teal", color: "white" }}>N° Commande</h5>
                    <h5 style={{ backgroundColor: "green", color: "white" }}>Fourniss/Client</h5>
                    <h5 style={{ backgroundColor: "darkBlue", color: "white" }}>Téléphone</h5>
                    <h5 style={{ backgroundColor: "blue", color: "white" }}>Adress</h5>
                    <h5 style={{ backgroundColor: "tomato", color: "white" }}>Produit</h5>
                    <h5 style={{ backgroundColor: "teal", color: "white" }}>Quantité</h5>
                    <h5 style={{ backgroundColor: "green", color: "white" }}>PU</h5>
                    <h5 style={{ backgroundColor: "darkBlue", color: "white" }}>Montant</h5>
                </div>

                <div className="histo">

                    {histoData
                        .sort((a, b) => b.date - a.date)
                        .map((historique) => (
                            <AccueilDisp historique={historique} key={historique.id} />
                        )
                        )}

                </div>


                <h1>LISTE PRODUITS</h1>

                <div className="produit-commande">

                    <div className="produit">

                        <input id="search" type="text" placeholder="Rechercher Produit"
                            onChange={(e) => setSearchProduct(e.target.value)}
                            style={{ margin: "20px", borderRadius: "10px", fontSize: "1.2rem", textAlign: "center" }} />

                        {searchProduct && <button onClick={() => setSearchProduct("")}>Annuler Recherche</button>}
                        <h4 style={{ color: "teal", fontSize: "2rem" }}>Cliquez Sur un Produit pour Séléctionner</h4>

                        {prodData
                            .filter((product) => (product.designation.toLowerCase().includes(searchProduct.toLowerCase())))
                            .map((product) => (

                                <div className="prod-comm">
                                    <div className="list-product">
                                        <ul>
                                            <li>
                                                {/* <img src={product.image} height="50" alt="produits" /> */}
                                                <button
                                                    id={product.designation} onClick={(e) => setSelectedProduct(e.target.id)
                                                        < setCorrespondPu(product.prixUnitaire) < setProductError(false)
                                                        < window.scrollTo(4000, 3000)} style={{ cursor: "pointer" }}
                                                >{product.designation}
                                                </button>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            )
                            )}

                    </div>

                    <div className="commander">
                        <form id="formulaire" onSubmit={(e) => postHisto(e)}>

                            <div className="values">

                                <label htmlFor="select-prod">Produit</label>
                                <input id="select-prod" type="text" placeholder="Selectionnez Produit" autoComplete="off"
                                    readOnly value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}
                                    style={{ border: (productError ? "solid 3px red" : "") }} /> <br />

                                <label htmlFor="qu">QTé</label>
                                <input id="qu" type="number" placeholder="Quantité" min="1"
                                    autoComplete="off" style={{ marginLeft: "45px", border: (quantiteError ? "solid 2px red" : "") }}
                                    onChange={(e) => setQuantity(e.target.value) < setQuantiteError(false)} /> <br />

                                <label htmlFor="pu">PU</label>
                                <input id="pu" type="number" placeholder="Prix Unitaire" readOnly value={correspondPu}
                                    style={{ marginLeft: "55px" }}
                                    onChange={(e) => setPrixUnitaire(e.target.value)} /> <br />

                                <label htmlFor="mont">Montant HT</label>
                                <input id="mont" type="number" placeholder="MONTANT" style={{ color: "red", border: montantError ? "solid 2px red" : "" }}
                                    readOnly value={amount} /> <br />

                                <h3 id="evaluer" onClick={() => setAmount(qt.valueQT * pu.valuePu) < setMontantError(false)} >Evaluer</h3>
                            </div>


                            <div className="infos">


                                <label htmlFor="mouv">Mouvement</label>
                                <select id="mouv" onClick={(e) => setMouv(e.target.value)} style={{ marginLeft: "15px" }}>
                                    <option value="">Définir mouvement</option>
                                    <option value="sortie">Sortie</option>
                                    <option value="entrée">Entrée</option>
                                </select> <br />
                                <br />

                                <label htmlFor="numcom">N°Commande: </label>
                                <h3 id="numcom" onClick={() => (aleaNum(10000, 100000)) < setNumComError(false)}>Générer</h3> <br />

                                <input type="number" placeholder="N°Commande" readOnly value={numCommande}
                                    style={{ border: numComError ? "solid 4px red" : "" }}>
                                </input> <br />
                                <br />

                                <label htmlFor="four-cli">Fournisseur/Client:</label>
                                <input type="text" id="four-cli" onInput={(e) => setFourCli(e.target.value) < setFourCliError(false)}
                                    style={{ marginLeft: "10px", border: fourCliError ? "solid 4px red" : "" }}></input> <br />
                                <br />

                                <label htmlFor="phone">TELEPHONE:</label>
                                <input id="phone" type="text" onInput={(e) => setTelephone(e.target.value) < setTelephoneError(false)}
                                    style={{ marginLeft: "35px", border: telephoneError ? "solid 4px red" : "" }}></input> <br />
                                <br />

                                <label htmlFor="adress">ADRESS:</label>
                                <input type="text" id="adress" onInput={(e) => setAdress(e.target.value) < setAdressError(false)}
                                    style={{ marginLeft: "60px", border: adressError ? "solid 4px red" : "" }}></input> <br />
                                <br />
                            </div>
                            <input type="submit" value="Enregistrer Commande"></input>

                        </form>
                    </div>

                </div>

                {/* <input id="search" type="text" placeholder="Rechercher Produit"
                    onChange={(e) => setSearchProduct(e.target.value)}
                    style={{ margin: "20px", borderRadius: "10px", fontSize: "1.2rem", textAlign: "center" }} />

                {searchProduct && <button onClick={() => setSearchProduct("")}>Annuler Recherche</button>}
                <h4 style={{ color: "teal", fontSize: "2rem" }}>Cliquez Sur un Produit pour Séléctionner</h4>

                {prodData
                    .filter((product) => (product.designation.toLowerCase().includes(searchProduct.toLowerCase())))
                    .map((product) => (

                        <div className="prod-comm">
                            <div className="list-product">
                                <ul>
                                    <li>
                                        <img src={product.image} height="50" alt="produits" />
                                        <h5
                                            id={product.designation} onClick={(e) => setSelectedProduct(e.target.id)
                                                < setCorrespondPu(product.prixUnitaire) < setProductError(false)
                                                < window.scrollTo(4000, 3000)} style={{ cursor: "pointer" }}
                                        >{product.designation}
                                        </h5>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    )
                    )} */}

                <h1>Nouvelle Commande</h1>
                <div className="commande">

                </div>

                {/* <form id="formulaire" onSubmit={(e) => postHisto(e)}>

                    <div className="values">

                        <label htmlFor="select-prod">Produit</label>
                        <input id="select-prod" type="text" placeholder="Selectionnez Produit" autoComplete="off"
                            readOnly value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}
                            style={{ border: (productError ? "solid 3px red" : "") }} /> <br />

                        <label htmlFor="qu">QTé</label>
                        <input id="qu" type="number" placeholder="Quantité" min="1"
                            autoComplete="off" style={{ marginLeft: "45px", border: (quantiteError ? "solid 2px red" : "") }}
                            onChange={(e) => setQuantity(e.target.value) < setQuantiteError(false)} /> <br />

                        <label htmlFor="pu">PU</label>
                        <input id="pu" type="number" placeholder="Prix Unitaire" readOnly value={correspondPu}
                            style={{ marginLeft: "55px" }}
                            onChange={(e) => setPrixUnitaire(e.target.value)} /> <br />

                        <label htmlFor="mont">Montant HT</label>
                        <input id="mont" type="number" placeholder="MONTANT" style={{ color: "red", border: montantError ? "solid 2px red" : "" }}
                            readOnly value={amount} /> <br />

                        <h3 id="evaluer" onClick={() => setAmount(qt.valueQT * pu.valuePu) < setMontantError(false)} >Evaluer</h3>
                    </div>


                    <div className="infos">


                        <label htmlFor="mouv">Mouvement</label>
                        <select id="mouv" onClick={(e) => setMouv(e.target.value)} style={{ marginLeft: "15px" }}>
                            <option value="">Définir mouvement</option>
                            <option value="sortie">Sortie</option>
                            <option value="entrée">Entrée</option>
                        </select> <br />
                        <br />

                        <label htmlFor="numcom">N°Commande: </label>
                        <h3 id="numcom" onClick={() => (aleaNum(10000, 100000)) < setNumComError(false)}>Générer</h3> <br />

                        <input type="number" placeholder="N°Commande" readOnly value={numCommande}
                            style={{ border: numComError ? "solid 4px red" : "" }}>
                        </input> <br />
                        <br />

                        <label htmlFor="four-cli">Fournisseur/Client:</label>
                        <input type="text" id="four-cli" onInput={(e) => setFourCli(e.target.value) < setFourCliError(false)}
                            style={{ marginLeft: "10px", border: fourCliError ? "solid 4px red" : "" }}></input> <br />
                        <br />

                        <label htmlFor="phone">TELEPHONE:</label>
                        <input id="phone" type="text" onInput={(e) => setTelephone(e.target.value) < setTelephoneError(false)}
                            style={{ marginLeft: "35px", border: telephoneError ? "solid 4px red" : "" }}></input> <br />
                        <br />

                        <label htmlFor="adress">ADRESS:</label>
                        <input type="text" id="adress" onInput={(e) => setAdress(e.target.value) < setAdressError(false)}
                            style={{ marginLeft: "60px", border: adressError ? "solid 4px red" : "" }}></input> <br />
                        <br />
                    </div>
                    <input type="submit" value="Enregistrer Commande"></input>

                </form> */}

            </div>



        </div>
    );
};

export default Accueil;