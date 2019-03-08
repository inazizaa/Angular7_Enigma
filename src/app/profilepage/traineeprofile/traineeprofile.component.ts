import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PTraineeService } from './trainee.service';
import { PTrainee } from './trainee';

@Component({
  selector: 'app-traineeprofile',
  templateUrl: './traineeprofile.component.html',
  styleUrls: ['./traineeprofile.component.css']
})
export class TraineeprofileComponent implements OnInit {
  data = [];
  notrainee: number;

  constructor(private route: Router, private traineeService: PTraineeService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let trainee: PTrainee = new PTrainee();
    trainee.trainee_id = this.notrainee
    this.traineeService.getTrainee().subscribe((response) => {
      Object.assign(this.data, response['values'])
      console.log(JSON.stringify(response['values']));
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  materi() {
    this.route.navigate(['/materiPage'])
  }
}
