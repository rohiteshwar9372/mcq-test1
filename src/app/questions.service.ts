import { Injectable } from '@angular/core';
import { Question } from './singlequestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private ques = [new Question("Which one is a programming Language?", "Java"),
  new Question("Which one is a programming Language?", "Java"),
  new Question("Which one is a programming Language?", "Java"),
   new Question("Which one is a programming Language?", "Python")];

  private result = 'fail';
  
  constructor() { 
    this.ques = [{'q' : 'Which one is a programming Language?', 'choices':['Java', 'AWS','DOCKER','DEVOPS'], 'ans':'Java', 'selected' : ''},
    {'q' : 'Which one is a programming Language?', 'choices':['Java', 'AWS','DOCKER','DEVOPS'], 'ans':'AWS', 'selected' : ''},
    {'q' : 'Which one is a programming Language?', 'choices':['Java', 'AWS','DOCKER','DEVOPS'], 'ans':'DOCKER', 'selected' : ''},
    {'q' : 'Which one is a programming Language?', 'choices':['Python', 'AWS','DOCKER','DEVOPS'], 'ans':'DEVOPS', 'selected' : ''}];
  }
  getQues() {
    return this.ques;
  }

  setAnswers(ans) {
    this.ques = ans;
    let pass = 0;
    let fail = 0;
    for(let i  = 0; i< this.ques.length ; i++) {
      if(this.ques[i].selected === this.ques[i].ans) {
        pass++;
      } else {
        fail++;
      }
    }
    if(pass > fail) {
      this.result = 'pass';
    }
    
  }

  getResult(){
    return this.result;
  }
}
