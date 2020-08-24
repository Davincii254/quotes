import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  votes: number;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {
    this.votes = this.votes || 0;
  }
  voteUp(): boolean {
    this.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

    
}


// constructor() {
//   // this.votes = this.votes || 0;
// }
// voteUp(): boolean {
//   this.votes += 1;
//   return false;
// }
// voteDown(): boolean {
//   this.votes -= 1;
//   return false;
// }
