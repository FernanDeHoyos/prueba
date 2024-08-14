import React, { useState } from 'react';
import { agregarProducto } from '../api/api';
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Agregar = () => {
    const navigate = useNavigate()
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
            Swal.fire(
                'Agregado!',
                'El producto ha sido Agregado.',
                'success'
            );
            setProducto({
                nombre: '',
                descripcion: '',
                precio: '',
                stock: ''
            });
        } catch (error) {
            Swal.fire(
                'Error!',
                'Error al agregar producto',
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
            <h2 className="mb-4">Agregar Producto</h2>
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
                    Agregar Producto
                </Button>
            </Form>
        </Container>
    );
};

export default Agregar;
