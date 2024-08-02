import React from 'react';
import Logo from '../components/image/Logo';
import Navigation from '../components/image/Navigation';

const Stock = () => {
    return (
        <div className="stock">
            <Logo />
            <Navigation />

            <div className="content">
                <h4>Gestion Du Stock</h4>
            </div>
            
            
        </div>
    );
};

export default Stock;