/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.prueba.apiPrueba.controller;

import com.prueba.apiPrueba.modelo.Producto;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author fernan
 */
public class ControllerProductTest {
    
    public ControllerProductTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of listarProductos method, of class ControllerProduct.
     */
    @Test
    public void testListarProductos() {
        System.out.println("listarProductos");
        ControllerProduct instance = new ControllerProduct();
        List<Producto> expResult = null;
        List<Producto> result = instance.listarProductos();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of agregarProducto method, of class ControllerProduct.
     */
    @Test
    public void testAgregarProducto() {
        System.out.println("agregarProducto");
        Producto p = null;
        ControllerProduct instance = new ControllerProduct();
        instance.agregarProducto(p);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of actualizarProducto method, of class ControllerProduct.
     */
    @Test
    public void testActualizarProducto() {
        System.out.println("actualizarProducto");
        Long id = null;
        Producto productoActualizado = null;
        ControllerProduct instance = new ControllerProduct();
        ResponseEntity<Producto> expResult = null;
        ResponseEntity<Producto> result = instance.actualizarProducto(id, productoActualizado);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of eliminarProducto method, of class ControllerProduct.
     */
    @Test
    public void testEliminarProducto() {
        System.out.println("eliminarProducto");
        Long id = null;
        ControllerProduct instance = new ControllerProduct();
        instance.eliminarProducto(id);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
