import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/Product'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.executeService()
  }

  /* Metodos = funciones */

  executeService(){ /* esto es un metodo y son funcionalidades de una clase */
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res
        console.log(res)
        return this.productService.products
      },
      err => {
        this.productService.products = err
        return this.productService.products
      }
    )
  }

  updateService(product: Product){
    this.productService.selectedProduct = product;
  }

  createService(form: NgForm){
    if (!form.value._id){
      this.productService.createProduct(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Creado',
            'El Producto se creo correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log("Error", err)
          Swal.fire(
            'Producto No Creado',
            'El Producto no se creo correctamente',
            'error'
          )
          return err
        }
      )
    } else {
      this.productService.updateProduct(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Actualizado',
            'El Producto se Actualizó correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log(err)
          return err
        }
      )
    }
  }

  cleanForm(){
    console.log("Limpiado")
  }

  deleteService(_id: string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar el producto?',
      text: "Recuerda que no puedes revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(_id).subscribe(
          res => {
            console.log(res)
            this.executeService()
          },
          err => {
            console.log(err)
          }
        )
        Swal.fire(
          'Producto Eliminado',
          'El producto se elimino satisfactoriamente',
          'success'
        )
      }
    })
  }

  filterByPrice(){
    this.productService.getProductsByPrice().subscribe(
      res => {
        this.productService.products = res
        console.log(res)
        return this.productService.products
      },
      err => {
        this.productService.products = err
        return this.productService.products
      }
    )
  }

  filterByDate(){
    this.productService.getProductsByDate().subscribe(
      res => {
        this.productService.products = res
        console.log(res)
        return this.productService.products
      },
      err => {
        this.productService.products = err
        return this.productService.products
      }
    )
  }

}
