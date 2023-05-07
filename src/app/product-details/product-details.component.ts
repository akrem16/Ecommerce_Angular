import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id : any | null ;
  title! : string;
  category! : string;
  thumbnail! : any ;
  product! : any[];
  description! : string;
  data: any = {};
  constructor(private route : ActivatedRoute , private S:ProductsService) {  }

  ngOnInit(): void {
    this.id = this .route.snapshot.params['id']
    this.getProduct();
    window.scrollTo(0, 0);


  }
  getProduct(){
    this.S.getproduitByid(this.id).subscribe(res =>{
      this.data = res
    })
  }
}
