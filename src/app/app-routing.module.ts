import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { BatchpageComponent } from './batchpage/batchpage.component';
import { TraineeprofileComponent } from './profilepage/traineeprofile/traineeprofile.component';
import { TrainerprofileComponent } from './profilepage/trainerprofile/trainerprofile.component';
import { ListscoreComponent } from './scorepage/listtraineescore/listscore.component';
import { EditscoreComponent } from './scorepage/editscore/editscore.component';
import { MateripageComponent } from './materipage/materipage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: HomepageComponent
  },
  {
    path: 'profilPage',
    component: ProfilepageComponent
  },
  {
    path: 'batchPage',
    component: BatchpageComponent
  },
  {
    path: 'profiltrainee',
    component: TraineeprofileComponent
  },
  {
    path: 'profiltrainer',
    component: TrainerprofileComponent
  },
  {
    path: 'listTrainee',
    component: ListscoreComponent
  },
  {
    path: 'editscore',
    component: EditscoreComponent
  },
  {
    path: 'materiPage',
    component: MateripageComponent
  },
  {
    path: 'loginPage',
    component: LoginpageComponent
  },
  {
    path: 'trainerPage',
    component: TrainerpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
