import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productInfo:Array<Product>=[];
  flag:boolean = false;

  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
    this.flag=true;
    this.productSer.loadProductDetails().subscribe(data=>this.productInfo=data);
  }

}
