import { Component, OnInit } from '@angular/core';
import { HomePage } from './homepage';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  listBatch: HomePage[] = [];

  constructor(private homeService: HomepageService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.homeService.getList().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listBatch, response.values);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    }
    );
  }
}

