import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Product } from '../model/product';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {
  product! : any[];
  id! : number;
  listeproduit!:Product[]


  constructor(private S:ProductsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.S.discount().subscribe((dat:Product[])=>{
      return this.listeproduit = dat;
    });
  }

}
