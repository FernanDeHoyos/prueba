/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.prueba.apiPrueba.controller;

import com.prueba.apiPrueba.modelo.Producto;
import com.prueba.apiPrueba.repository.IrepoProducto;
import java.util.Arrays;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.AfterEach;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ControllerProductTest {

    @Mock
    private IrepoProducto repoProducto;

    @InjectMocks
    private ControllerProduct controllerProduct;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of listarProductos method, of class ControllerProduct.
     */
    @Test
    public void testListarProductos() {
        Producto producto1 = new Producto(1L, "Camisa", "Azul", 20.0, 10);
        Producto producto2 = new Producto(2L, "Pantalón", "Negro", 30.0, 15);
        when(repoProducto.findAll()).thenReturn(Arrays.asList(producto1, producto2));

        List<Producto> productos = controllerProduct.listarProductos();
        assertEquals(2, productos.size());
        verify(repoProducto, times(1)).findAll();
    }

    /**
     * Test of agregarProducto method, of class ControllerProduct.
     */
    @Test
    public void testAgregarProducto() {
        Producto producto = new Producto(1L, "Zapatos", "Negros", 50.0, 5);
        when(repoProducto.save(producto)).thenReturn(producto);

        controllerProduct.agregarProducto(producto);
        verify(repoProducto, times(1)).save(producto);
    }

    /**
     * Test of actualizarProducto method, of class ControllerProduct.
     */
    @Test
    public void testActualizarProducto() {
        Long id = 1L;
        Producto productoExistente = new Producto(id, "Camisa", "Roja", 25.0, 10);
        Producto productoActualizado = new Producto(id, "Camisa", "Rojo", 20.0, 8);

        when(repoProducto.findById(id)).thenReturn(Optional.of(productoExistente));
        when(repoProducto.save(productoExistente)).thenReturn(productoExistente);

        ResponseEntity<Producto> response = controllerProduct.actualizarProducto(id, productoActualizado);
        assertEquals(ResponseEntity.ok(productoExistente), response);
        assertEquals("Rojo", productoExistente.getDescripcion());
        verify(repoProducto, times(1)).findById(id);
        verify(repoProducto, times(1)).save(productoExistente);
    }

    /**
     * Test of eliminarProducto method, of class ControllerProduct.
     */
    @Test
    public void testEliminarProducto() {
        Long id = 1L;
        doNothing().when(repoProducto).deleteById(id);

        controllerProduct.eliminarProducto(id);
        verify(repoProducto, times(1)).deleteById(id);
    }
}