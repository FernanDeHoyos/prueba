import React, { useEffect, useState } from 'react';
import { obtenerProductos, eliminarProducto } from '../api/api';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listar = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const response = await obtenerProductos();
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener productos', error);
            alert('Hubo un error al obtener los productos');
        }
    };

    const handleEliminar = async (id) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Una vez eliminado, no podrás recuperar este producto.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                await eliminarProducto(id);
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                );
                cargarProductos(); // Recargar la lista de productos
            } catch (error) {
                console.error('Error al eliminar producto', error);
                Swal.fire(
                    'Error!',
                    'Hubo un error al eliminar el producto.',
                    'error'
                );
            }
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-4">
                <h2>Lista de Productos</h2>
                <Button 
                    variant="success" 
                    href="/agregar" 
                    className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Agregar Producto
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    href={`/update/${producto.id}`} 
                                    className="me-2">
                                    Actualizar
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleEliminar(producto.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Listar;
