import React, { useState, useEffect } from 'react';
import { actualizarProducto, obtenerProductoPorId } from '../api/api'; 

const Actualizar = ({ id }) => {
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    useEffect(() => {
        const cargarProducto = async () => {
            const response = await obtenerProductoPorId(id);
            setProducto(response.data);
        };
        cargarProducto();
    }, [id]);

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
            await actualizarProducto(id, producto);
            alert('Producto actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar producto', error);
            alert('Hubo un error al actualizar el producto');
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
            <button type="submit">Actualizar Producto</button>
        </form>
    );
};

export default Actualizar;
