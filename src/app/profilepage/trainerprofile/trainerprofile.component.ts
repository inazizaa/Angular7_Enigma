import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  scorepage() {
    this.route.navigate(['/listscore'])
  }
}
