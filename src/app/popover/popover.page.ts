import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ChooseNewsService } from '../choose-news.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public keyWords = [];
  keyWordsSelected=[];
  constructor( private navParams: NavParams, 
               private popoverController: PopoverController,
               private newsService: ChooseNewsService) { 
      

  }

  ngOnInit() {
    this.keyWords=this.newsService.keyWords;
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
    this.newsService.keyWordsSelected=this.keyWords;
    this.newsService.keyWords=this.keyWords;
    //[][][][]][]aquí volveremos a hacer la llamada a la api para cargar los datos.
    this.popoverController.dismiss();
  }

}
