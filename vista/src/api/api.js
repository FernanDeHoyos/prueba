import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your Spring Boot server's URL

export const agregarProducto = (producto) => {
    return axios.post(`${API_URL}/agregar`, producto);
};

export const actualizarProducto = (id, producto) => {
    return axios.put(`${API_URL}/update/${id}`, producto);
};

export const obtenerProductos = () => {
    return axios.get(`${API_URL}/productos`);
};

export const eliminarProducto = (id) => {
    return axios.delete(`${API_URL}/producto/${id}`);
};
