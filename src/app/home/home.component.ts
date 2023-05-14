import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() products : any = {}
  cartProduct:any[] = [];
  listeproduit!:Product[]



  constructor(private S:ProductsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.S.getproduit().subscribe((dat:Product[])=>{
      return this.listeproduit = dat;
    });
  }

  onSelect(id : any) {
    this.router.navigate(['/product', id]);
  }
}
