import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent  } from "./quiz/login/login.component";
import { QuizManagementComponent } from "./quiz/quiz-management/quiz-management.component";

const routes: Routes = [
 {
    path: 'quiz',
    component: QuizManagementComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
