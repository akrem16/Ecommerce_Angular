import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data : any = {}
  @Output() item = new EventEmitter()
  product! : any[];


  constructor(private S:ProductsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.S.getproduit().subscribe((dat:Product[])=>{
      return this.product = dat;
    });
  }

  onSelect(id : any) {
    this.router.navigate(['/product', id]);
  }
  add(){
    this.item.emit(this.data)

  }

}
