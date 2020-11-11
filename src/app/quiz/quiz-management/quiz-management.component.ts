import { Component, Input, OnInit , ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz-management',
  templateUrl: './quiz-management.component.html',
  styleUrls: ['./quiz-management.component.css']
})
export class QuizManagementComponent implements OnInit {

  @Input() childMessage: any;
  registerForm: FormGroup;
  submitted = false;
 
  // componenets
  quizList: any[] = [];
  questionList: any[] = [];
  displayView: string = 'homePage';
  selectedValue: string | undefined = undefined;
  correctAnswer: string | undefined = undefined;
  alertMsg: boolean | undefined = undefined;
  enableAnswer: boolean | undefined = undefined;
  enableTimer: boolean | undefined = undefined;
  showQuestions: boolean | undefined = undefined;
  total : number = 0;
  id: number  = 1;
  
  //pagination
  p: number = 1;

 constructor(
   private http: HttpClient, 
   private formBuilder: FormBuilder,
   private router : Router) { }

  ngOnInit(): void {
    this.http.get("/assets/data/quiz.json").subscribe((response: any)=> {
      this.quizList = response.quiz;
    });  

    this.registerForm = this.formBuilder.group({
      languages: ['']
    });
    
  }

  chooseLanguages(event: any){     
     // @ts-ignore TS2532
    this.questionList = this.quizList.find(
      (data: any) => data.languages === event
    ).test;  
   this.showQuestions = true;
  }

  changeId(index : number){
    this.enableAnswer = false;
    this.alertMsg = undefined;
     this.id = index + 1;     
  }

  changePrev(index: number){
    this.enableAnswer = false;
    this.alertMsg = undefined;
    this.id = index - 1;
  } 
 
  onSelectOption(id: any,event: any){
    let selectedOption = event.target.defaultValue;
    let selectedid = this.questionList.filter((value:any)=> {
      return id === value.id;
    });
    if(selectedOption === selectedid[0].answer) {
      this.alertMsg = true;
      this.total++;
      this.enableAnswer = false;
    }else{
      this.alertMsg = false;
      this.enableAnswer = true;
     
    }
    
  } 
  
  onSubmit(){
    this.showQuestions = false;
  }
}
