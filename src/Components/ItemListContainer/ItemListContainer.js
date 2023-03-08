import React from "react";

function ItemListContainer({ greeting }) {
    return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <h2>{greeting}</h2>
        <p style={{ fontStyle: 'italic' }}>Bienvenid@ a la primer entrega</p>
    </div>
    );
};
export default ItemListContainer