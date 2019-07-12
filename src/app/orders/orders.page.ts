import { Component, OnInit } from '@angular/core';
import { KoffieService } from '../service/koffie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  kofieId
  setOrder
  Name;
  ordering;Quantity;
  sugar
  milk
  totalprice: any;
  constructor(public servicess : KoffieService, public route : ActivatedRoute ) {
    this.setOrder = this.servicess.getOrder();
    
    this.Name = this.servicess.getName();
   }

  // getSuger(event){
  //   this.sugar = event.detail.value;
  // }

  // getMilk(event){
  //   this.milk = event.detail.value;
  // }

  // getQuantity(event){
  //   this.Quantity = event.detail.value;
  //   console.log(this.Quantity);
    
  // }

  // Order(sugar,milk,Quantity,total){
  //   this.servicess.Order(sugar,milk,Quantity,total);
  //  // this.setOrder = this.servicess.Order(this.kofieId);
  // }

  CheckOrders(kofieId){
  this.servicess.CheckOrders(kofieId);
  }

  ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //   this.kofieId = params.get('kofieId');
 
  //   this.setOrder = this.servicess.TakeOrder(this.kofieId)
  //  })
 }

}
