import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mcq = [];
  constructor(private router: Router, private queService: QuestionsService) {
    this.mcq = this.queService.getQues();
   }

  ngOnInit(): void {
  }

  submit(){
    this.queService.setAnswers(this.mcq);
    this.router.navigate(['/result']);
  }

}
