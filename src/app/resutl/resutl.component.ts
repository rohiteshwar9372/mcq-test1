import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-resutl',
  templateUrl: './resutl.component.html',
  styleUrls: ['./resutl.component.css']
})
export class ResutlComponent implements OnInit {

  testResult = '';

  constructor(private que:QuestionsService) { }

  ngOnInit(): void {
    this.testResult = this.que.getResult();
  }

}
