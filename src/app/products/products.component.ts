import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { Product } from '../services/api/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({ next: (result: Product[]) => { console.log(result) } })

    const p = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    this.productService.createProduct(p).subscribe(
      {
         next: (result: Product) => { console.log(result) }, 
         error: (error: HttpErrorResponse) => { console.log(error)} });
  }

}
