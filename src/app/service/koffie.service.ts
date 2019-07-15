import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KoffieService {

  CategoryList = [{ kofieId: 1,itemName: "latee.jpg", name: 'Latte', sugars: 2, milk: 'yes', Quantity: 0, Price: 60 },
  { kofieId: 2,itemName: "cuppacino.jpg",name: 'Cuppuccino', sugars: 1, milk: 'yes', Quantity: 0, Price: 90 },
  { kofieId: 3,itemName: "expresso.png",name: 'Expresso', sugars: 2, milk: 'yes', Quantity: 0, Price: 80 },
  {kofieId: 4,itemName: "blackc.jpg",name: 'Plaincoffee', sugars: 3, milk: 'no', Quantity: 0, Price: 50 }
 ];

 Orders = [];
 
 Name
 thePrice

 kofieId: number=null;
 itemName: string = "";
 name: string = "";
 sugars: number = null;
 milk: string = "";
 Quantity: number = 1;
 Price: number = null;
 total : any = 0;
 Talamount: any = 0;

 //mylist
newItem : string =""
newDescription: string = ""
newQuantity : number = null;
newPrice: any = 0;
newNumOf : number = 0;
TotalPrice: number;


 PlaceOrder(kofieId,itemName, name,sugar,milk,Quantity,Price){
  this.CategoryList.push({kofieId: this.kofieId,itemName:this.itemName, name:this.name, sugars:this.sugars, milk:this.milk, Quantity:this.Quantity ,Price:this.Price });
  }

  Order(namez,sugar,milk,Quantity,total){
     this.Orders.push({Name: namez,sugar: sugar, milk:milk, Quantity: Quantity, total: total})
  }

  constructor() { }

  getList(){
    return this.CategoryList;
  }

  // Totalprice(Quantity){

  //   this.TotalPrice = this.thePrice * Quantity ;
  //   return this.TotalPrice;
  // }

  //adding sugar prices 
  Totalprice(Quantity, sugar){
    this.TotalPrice = (this.thePrice + sugar) * Quantity  ;
    return this.TotalPrice;
  }

  
  getOrder(){
    return this.Orders;
  }

  GetIt(namez){
    this.Name = namez.name
    this.thePrice = namez.Price
  }
 
  getPrice(){
    return this.thePrice;
  }
  getName(){
    return this.Name;
  }

 

 CheckOrders(kofieId){
    for(var i=0; i => this.CategoryList.length; i++  ){
      if(this.CategoryList[i].kofieId  == kofieId){
        return this.CategoryList[i];
      }
    }   
}

  TakeOrder(kofieId){
    let orderingApp = []
    this.Orders.forEach(ordering =>{
      if(ordering.kofieId == kofieId){
        orderingApp.push(ordering)
      }
    })
    return orderingApp
}

  // increasing quantity
  incQua(emStaff){
      if(emStaff.NumOf == emStaff.Quantity){
          return alert("Can't add more")
   }else{
       emStaff.Quantity++
       this.newPrice += emStaff.Price
    
      this.newQuantity == emStaff.Quantity
     }
 }
    
       // decreasing quantity
  DecQua(emStaff){
        if(emStaff.Quantity == 0){
          return alert("Can't be in minus")
        }else{
          emStaff.Quantity--
          this.newPrice -= emStaff.Prices
      }
  }
       // for total price
  countPrice(){
   this.newPrice = 0;
    for(let p of this.CategoryList){
           this.newPrice += p.Price*p.Quantity
           
     }
  }
}
