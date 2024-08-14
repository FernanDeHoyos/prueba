/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.prueba.apiPrueba.controller;

import ch.qos.logback.core.model.Model;
import com.prueba.apiPrueba.modelo.Producto;
import com.prueba.apiPrueba.repository.IrepoProducto;
import jakarta.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Clase ControllerProduct 
 * @author fernan
 */
@RestController
@RequestMapping("/api")
public class ControllerProduct {
    
    @Autowired
    private IrepoProducto repoProducto;
    
    /**
     * Metodo que devuelve una lista de los productos en la tabla producto de la db producto
     * @return lista de los productos con su informacion
     */
    @GetMapping("/leer")
       public List<Producto> listarProductos() {
     return repoProducto.findAll(); // findAll() debería funcionar sin problemas si la interfaz está bien definida
}


    
    /**
     * Metodo para agregar un producto
     * @param p es la data a cargar cuando se vaya a agregar un nuevo producto
     */
    @PostMapping("/agregar")
    public void agregarProducto(@RequestBody Producto p){
        try {
            repoProducto.save(p);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    
    @GetMapping("/{id}")
    public Producto obtenerProductoPorId(@PathVariable Long id)  {
        Optional<Producto> producto = repoProducto.findById(id);
        if (producto.isPresent()) {
            return producto.get();
        } 
        return null;
    }
    
    /**
     * Metodo para hacer una actualizacion de un producto
     * @param id para identificar el producto a actualizar
     * @param productoActualizado sera la nueva data con la actualizacion
     * @return ResponseEntity.notFound().build() si el producto a actualizar no existe o ResponseEntity.ok(productoExistente) al haber coincidencia
     */
    @PutMapping("/update/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoActualizado) {
        Optional<Producto> productoOptional = repoProducto.findById(id);
    
    if (!productoOptional.isPresent()) {
         return ResponseEntity.notFound().build();
    } 
    Producto productoExistente = productoOptional.get();
        productoExistente.setNombre(productoActualizado.getNombre());
        productoExistente.setDescripcion(productoActualizado.getDescripcion());
        productoExistente.setPrecio(productoActualizado.getPrecio());
        productoExistente.setStock(productoActualizado.getStock());
        
        repoProducto.save(productoExistente);
        return ResponseEntity.ok(productoExistente);
}

    /**
     * Metodo para eliminar un producto
     * @param id parametro para identificar el producto a eliminar
     */
    @DeleteMapping("/eliminar/{id}")
    public void eliminarProducto(@PathVariable Long id){
        repoProducto.deleteById(id);
    }
}
