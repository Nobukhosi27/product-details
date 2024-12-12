import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id:any
  userProduct: any[]=[]
  
    
   constructor(private productService:ProductService, private route:ActivatedRoute){
  
   }
   ngOnInit(){
    this.route.params.subscribe(params =>{
      this.id = +params['id']
      this.loadUserProduct()
    })
   }
   loadUserProduct(){
    this.productService.getUserProduct(this.id).subscribe({
      next: (products)=>{
        this.userProduct= products.product
        console.log(products);
        
  
      },error: (error)=>{
        console.log(error);
        
      }
    })
    
   }
  }
  

