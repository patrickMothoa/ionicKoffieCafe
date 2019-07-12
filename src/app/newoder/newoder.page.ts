import { Component, OnInit } from '@angular/core';
import { KoffieService } from '../service/koffie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newoder',
  templateUrl: './newoder.page.html',
  styleUrls: ['./newoder.page.scss'],
})
export class NewoderPage implements OnInit {

  kofieId

  setOrder
  constructor(public servicess : KoffieService, public route : ActivatedRoute ) {
    this.setOrder = this.servicess.getList();
  
   }

   Gets(namez){
    this.servicess.GetIt(namez);
   }

 

  ngOnInit() {
    
 }

}
