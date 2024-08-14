import React, { useState } from 'react';
import { agregarProducto } from '../api/api'; 

const Agregar = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await agregarProducto(producto);
            alert('Producto agregado con éxito');
            setProducto({
                nombre: '',
                descripcion: '',
                precio: '',
                stock: ''
            });
        } catch (error) {
            console.error('Error al agregar producto', error);
            alert('Hubo un error al agregar el producto');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" name="descripcion" value={producto.descripcion} onChange={handleChange} required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={producto.precio} onChange={handleChange} required />
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" name="stock" value={producto.stock} onChange={handleChange} required />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default Agregar;
