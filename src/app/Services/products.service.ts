import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartProduct:any[] = [];

  id! : number;

  constructor(private http:HttpClient , private router: Router, private route: ActivatedRoute) { }
  getproduit(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  getNewproduit(){
    return this.http.get<Product[]>('http://localhost:3000/Newproduct')
  }
  discount(){
    return this.http.get<Product[]>(' http://localhost:3000/Discount')
  }
  getproduitByid(id:any){
    return this.http.get<Product[]>('http://localhost:3000/products/'+id)
  }

    // getProductById(id: number) {
    //   return this.product.find(product => product.id === id);

    // }

  onSelect(id : any) {
    return this.router.navigate(['/product', id]);
  }



  
}
