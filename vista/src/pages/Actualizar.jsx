import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { actualizarProducto, obtenerProductoPorId } from '../api/api';
import { Button, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Actualizar = () => {
    const navigate = useNavigate()
    const { id } = useParams(); // Obtener el id del parámetro de la URL
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    useEffect(() => {
        const cargarProducto = async () => {
            try {
                if (id) { // Asegúrate de que id no sea undefined o null
                    const response = await obtenerProductoPorId(id);
                    setProducto(response.data);
                } else {
                    console.error('ID no definido');
                }
            } catch (error) {
                console.error('Error al obtener el producto', error);
                alert('Hubo un error al obtener el producto');
            }
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
            Swal.fire(
                'Atcualizado!',
                'Producto actualizado',
                'success'
            );
        } catch (error) {
            console.error('Error al actualizar producto', error);
            Swal.fire(
                'Error!',
                'Hubo un error al actualizar el producto',
                'error'
            );
        }
    };

    return (
        <Container className="mt-4">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
            variant="link" // Sin fondo
            onClick={() => navigate(-1)}
            className="d-flex align-items-center p-0"
            style={{ fontSize: '0.875rem' }} // Tamaño más pequeño
        >
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Regresar
        </Button>
            <h2 className="mb-4">Actualizar Producto</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nombre" 
                        value={producto.nombre} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="descripcion" 
                        value={producto.descripcion} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="precio" 
                        value={producto.precio} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStock">
                    <Form.Label>Stock:</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="stock" 
                        value={producto.stock} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Actualizar Producto
                </Button>
            </Form>
        </Container>
    );
};

export default Actualizar;
