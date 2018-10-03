import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public keyWords = [
    { val: 'PUE', isChecked: false },
    { val: 'Energia', isChecked: false },
    { val: 'IT', isChecked: false },
    { val: 'Emisiones', isChecked: false },
    { val: 'Potencia', isChecked: false },
    { val: 'Ahorro', isChecked: false },
    { val: 'Gasto', isChecked: false },
    { val: 'Temperatura', isChecked: false },
    { val: 'Refrigeración', isChecked: false },
    { val: 'ERE', isChecked: false },
    { val: 'DCPE', isChecked: false }
   
  ];
  keyWordsSelected=[];
  constructor( private navParams: NavParams, private popoverController: PopoverController) { 

  }

  ngOnInit() {
    
  }
  closePopover(){
    
    this.popoverController.dismiss();
  }
  save(){

    for(var i in this.keyWords){
      if(this.keyWords[i].isChecked==true){
        this.keyWordsSelected.push(this.keyWords[i].val);
      }
    }
    console.log("Esto contiene" + this.keyWordsSelected);
    this.popoverController.dismiss();
  }

}
