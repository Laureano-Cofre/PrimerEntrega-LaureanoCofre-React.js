import React, { useState } from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ productos, agregarAlCarrito }) => {
    const [filtro, setFiltro] = useState('');

    const handleFiltroClick = (banda) => {
        setFiltro(banda);
    };

    const handleMostrarTodosClick = () => {
        setFiltro('');
    };

    const productosFiltrados = filtro
        ? productos.filter(producto => producto.banda === filtro)
        : productos;

    return (
        <div>
            <div className="containerOpciones">
                <div className="opcion" onClick={() => handleFiltroClick('Creedence Clearwater Revival')}>
                    <img src="./public/img/ccr/Creedence-Clearwater-Reviva.jpg" alt="Creedence Clearwater Revival" />
                    <h2>Creedence Clearwater Revival</h2>
                </div>
                <div className="opcion" onClick={() => handleFiltroClick('The Rolling Stones')}>
                    <img src="./public/img/trs/RollingStones4150-8-8-1.jpg" alt="The Rolling Stones" />
                    <h2>The Rolling Stones</h2>
                </div>
                <div className="opcion" onClick={() => handleFiltroClick('The Beatles')}>
                    <img src="./public/img/tb/Beatles_ad_1965_just_the_beatles_crop.jpg" alt="The Beatles" />
                    <h2>The Beatles</h2>
                </div>
            </div>

            <div className="containerBoton">
                <button onClick={handleMostrarTodosClick} className="btn btn-primary">Mostrar Todos</button>
            </div>

            <div className="item-list-container">
                {productosFiltrados.map(producto => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.titulo} />
                        <h3>{producto.titulo}</h3>
                        <p>{producto.banda}</p>
                        <p className="precioProducto">Precio: ${producto.precio}</p>
                        <div className="button-container">
                            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
