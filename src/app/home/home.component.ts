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


  alerWithSuccess(event : any){
    // JSON.stringify(); //Send data
    // JSON.parse(); // Recive Data
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exit = this.cartProduct.find(item => item.id == event.id)
      if(exit){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))
      }
    }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))

      }
    
  }



  wishelist(event : any){
    // JSON.stringify(); //Send data
    // JSON.parse(); // Recive Data
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exit = this.cartProduct.find(item => item.id == event.id)
      if(exit){
        Swal.fire(
          'Good job!',
          'You clicked !',
          'success'
        )
      }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))
      }
    }
      else{
        this.cartProduct.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProduct))

      }
    
  }

}
