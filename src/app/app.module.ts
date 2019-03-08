import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { BatchpageComponent } from './batchpage/batchpage.component';
import { TraineeprofileComponent } from './profilepage/traineeprofile/traineeprofile.component';
import { TrainerprofileComponent } from './profilepage/trainerprofile/trainerprofile.component';
import { ListscoreComponent } from './scorepage/listtraineescore/listscore.component';
import { EditscoreComponent } from './scorepage/editscore/editscore.component';
import { MateripageComponent } from './materipage/materipage.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    ProfilepageComponent,
    BatchpageComponent,
    TraineeprofileComponent,
    TrainerprofileComponent,
    ListscoreComponent,
    EditscoreComponent,
    MateripageComponent,
    TrainerpageComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
