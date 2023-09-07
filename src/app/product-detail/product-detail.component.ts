import { Component ,Input } from '@angular/core';
import { Product } from '../services/api/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() 
  product :Product ={};
}
