import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../Services/products.service';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  listeproduit!:Product[]



  constructor(private S:ProductsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.S.getNewproduit().subscribe((dat:Product[])=>{
      return this.listeproduit = dat;
    });
  }

}
