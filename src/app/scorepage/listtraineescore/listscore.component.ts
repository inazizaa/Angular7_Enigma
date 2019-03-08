import { Component, OnInit } from '@angular/core';
import { TraineeScore } from './traineescore';
import { MatTableDataSource } from '@angular/material';
import { TraineeService } from './traineescore.service';

@Component({
  selector: 'app-listscore',
  templateUrl: './listscore.component.html',
  styleUrls: ['./listscore.component.css']
})
export class ListscoreComponent implements OnInit {
  listTrainee: TraineeScore[] = [];
  dataSource = new MatTableDataSource(this.listTrainee);
  displayedColumns: string[] = ["score_id", "name", "knowledge", "proactiveness", "task", "total"]; //harus berurutan sesuai tampilan tabel

  constructor(private traineescoreService: TraineeService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.traineescoreService.getList().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listTrainee, response.values);
      this.dataSource.data = this.listTrainee;
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }
}
