import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number;

  constructor(private s : ProductsService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

  removeItem(item: any){
  }
  emptycart(){
  }
}
