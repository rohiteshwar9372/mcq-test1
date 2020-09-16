import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from 'src/app/questions.service';
import { Question } from 'src/app/singlequestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() ques = [];
  ans;
  constructor(private queservice:QuestionsService) {
    this.ans = queservice.getQues();
   }

  ngOnInit(): void {
  }

  onSelect(ans, i) {
    this.ans[i].selected = ans;
  }

}
