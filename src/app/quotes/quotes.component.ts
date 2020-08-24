import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1,'It’s hard to beat a person who never gives up', 'Ruth', 'Submitted by Babe Ruth', new Date(2020, 7, 21),-6),
    new Quotes(2,'Do one thing every day that scares you', 'Eleanor', 'Submitted by Eleanor Roosevelt', new Date(2019, 4, 6),-2),
    new Quotes(3,'Whatever you are, be a good one.', 'Abraham', 'Abraham Lincoln', new Date(2020, 7, 23),-3),
    new Quotes(4,'Impossible is just an opinion', 'Paulo Coelho', 'Submitted by Paulo Coelho', new Date(2005, 5, 8),-4),
    new Quotes(5,'Hold the vision, trust the process', 'Unknown', 'Submitted by Unknown', new Date(2020, 5, 8),-5),
    new Quotes(6,'The hard days are what make you stronger', 'Raisman', 'Submitted by Aly Raisman', new Date(2020, 6, 8),-1),    
  ]
  votes: number;

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`delete the quote "${this.quotes[index].actualQuote}"?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuotes(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes);
  }

  sortedQuotes(): Quotes[]{
    return this.quotes.sort((a: Quotes, b: Quotes) => b.votes-a.votes)
  }
  

  ngOnInit(): void {
   }

}




