import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from "ngx-bootstrap/alert";
import { CountdownModule } from 'ngx-countdown';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizManagementComponent } from './quiz-management/quiz-management.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [QuizManagementComponent, LoginComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AlertModule.forRoot(),
    CountdownModule
  ]
})
export class QuizModule { }
