import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.executeService()
  }

  executeService(){
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

  accept(){
    alert("Producto Comprado")
  }

}
