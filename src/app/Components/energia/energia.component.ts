import { Component, OnInit } from '@angular/core';
import { ChooseNewsService } from '../../choose-news.service';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.scss']
})
export class EnergiaComponent implements OnInit {
  
  data;
  constructor(private newsService: ChooseNewsService) { 
  
  }

  ngOnInit() {
    this.data=this.newsService.datos;
  }

}
