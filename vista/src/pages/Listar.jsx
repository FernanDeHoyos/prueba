import React, { useEffect, useState } from 'react';
import { obtenerProductos, eliminarProducto } from '../api/api'; 

const Listar = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const response = await obtenerProductos();
        setProductos(response.data);
    };

    const handleEliminar = async (id) => {
        try {
            await eliminarProducto(id);
            alert('Producto eliminado con éxito');
            cargarProductos(); // Recargar la lista de productos
        } catch (error) {
            console.error('Error al eliminar producto', error);
            alert('Hubo un error al eliminar el producto');
        }
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.descripcion} - {producto.precio} - {producto.stock}
                        <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listar;
