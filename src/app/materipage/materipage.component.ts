import { Component, OnInit } from '@angular/core';
import { materiPage } from './material';
import { MateriService } from './material.service';
import { MatTableDataSource } from '@angular/material'
import { from } from 'rxjs';

@Component({
  selector: 'app-materipage',
  templateUrl: './materipage.component.html',
  styleUrls: ['./materipage.component.css']
})
export class MateripageComponent implements OnInit {
  listMateri: materiPage[] = [];
  dataSource = new MatTableDataSource(this.listMateri);
  displayedColumns: string[] = ["material_id", "description", "download"];
  constructor(private materiservice: MateriService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.materiservice.getList().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listMateri, response.values);
      this.dataSource.data = this.listMateri;
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }

}
