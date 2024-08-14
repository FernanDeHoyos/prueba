/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.prueba.apiPrueba.repository;

import com.prueba.apiPrueba.modelo.Producto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

/**
 * clase Interface para hacer uso de los metodos mas comunes a la hora de hacer un CRUD
 * @author fernan
 */
public interface IrepoProducto extends CrudRepository<Producto, Long>, JpaSpecificationExecutor<Producto>{
    public List<Producto> ListarProduc();
}
