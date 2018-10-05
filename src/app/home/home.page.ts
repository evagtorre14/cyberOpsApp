import { Component, OnInit } from '@angular/core';
import { ChooseNewsService } from '../choose-news.service';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data1: any;
  data2: any;
  data3: any;
  datos: any;
  tipoNoticia;
  energia;
  medioAmbiente;
  finanzas;
  value=0;
  numRandom;
  
  constructor( private newsService: ChooseNewsService, private nav:NavController, private mododalCtrl: ModalController, private popoverController: PopoverController) { 
   
     
  }
  //Podemos coger los datos desde otro método.
  ngOnInit(){
  
    this.newsService.tipoNoticia=this.tipoNoticia;
    
    this.newsService
    .getData2() 
     .subscribe(data=> {
       console.log("esto es el data" + data);
      
      this.datos = data;
     
      this.newsService.datos=data;
    })
    //console.log("estos son los datos:" + this.datos);
    //console.log("estos son los datos:" + this.datos);
  
    //this.numeros=[];
    /*
    this.newsService
     .getData('everything?q=centro&pageSize=1') 
      .subscribe(data=> {
        console.log("estos son los datos:" + data);
       this.data1 = data;
       this.newsService.data1=data;
       
      
      }),
        
    this.newsService
      .getData('everything?q=potencia&pageSize=1')
      .subscribe(data=> {
          //console.log(data);
        this.data2 = data;
        this.datos=this.data2;
        this.newsService.datos=data;
        this.newsService.data2=data;
       
          }),

    this.newsService
      .getData('everything?q=financiero&pageSize=1')
      .subscribe(data=> {
          //console.log(data);
        this.data3 = data;
        this.newsService.data3=data;
       
          })*/
  }
  changeToMedioambiente(){
    this.tipoNoticia="Medio Ambiente";
    this.newsService.tipoNoticia=this.tipoNoticia;
    this.medioAmbiente=true;
    this.energia=false;
    this.finanzas=false;
    
  }
  changeToEnergia(){
    this.numRandom= Math.floor(Math.random()*3);
    this.tipoNoticia="Energía";
    this.newsService.tipoNoticia=this.tipoNoticia;
    this.medioAmbiente=false;
    this.energia=true;
    this.finanzas=false;
    console.log(this.numRandom);
    
  }
  changeToFinanciero(){
    this.tipoNoticia="Finanzas";
    this.newsService.tipoNoticia=this.tipoNoticia;
    this.medioAmbiente=false;
    this.energia=false;
    this.finanzas=true;
  }
  async openPopover(ev: Event){
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        custom_id:this.value
      },
      event: ev
    });
    popover.present();


  }

}
