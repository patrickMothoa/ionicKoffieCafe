import { Component, OnInit } from '@angular/core';
import { KoffieService } from '../service/koffie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.page.html',
  styleUrls: ['./placeorder.page.scss'],
})
export class PlaceorderPage implements OnInit {
  kofieId
  setOrder
  newName;
  sugar
  milk
  Quantity 
  totalprices

  constructor(public servicess : KoffieService, public route : ActivatedRoute ) {
    this.newName = this.servicess.getName();
  }

  getSuger(event){
    this.sugar = event.detail.value;
  }

  getMilk(event){
    this.milk = event.detail.value;
  }

  getQuantity(event){
    this.Quantity = event.detail.value;
    console.log(this.Quantity);
    
  }

  Order(){
    this.servicess.Order(this.newName,this.sugar,this.milk,this.Quantity,this.servicess.Totalprice(this.Quantity, this.sugar))
    //this.setOrder = this.servicess.TakeOrder(this.kofieId);
  }

  Totalprice(){
    this.totalprices = this.servicess.Totalprice(this.Quantity, this.sugar)

    // this.totalprices = this.servicess.Totalprice(this.Quantity,this.sugar)
  }



  ngOnInit()  {
    this.route.paramMap.subscribe(params => {
    this.kofieId = params.get('kofieId');

    this.setOrder = this.servicess.TakeOrder(this.kofieId)
   })
 }

}
