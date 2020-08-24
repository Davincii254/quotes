import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1,'Only the paranoid survive.', 'Andy', 'Submitted by Andy Grove', new Date(2020, 7, 21),-6),
    new Quotes(2,'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE', 'Whedon', 'Submitted by Joss Whedon', new Date(2019, 4, 6),-2),
    new Quotes(3,'Whatever you are, be a good one', 'Abraham Lincoln', 'Submitted by Abraham Lincoln', new Date(2020, 7, 23),-3),
    new Quotes(4,'Impossible is just an opinion', 'Coelho', 'Submitted by Paulo Coelho', new Date(2005, 5, 8),-4),
    new Quotes(5,'Hold the vision, trust the process', ' Unknown', 'Submitted by  Unknown', new Date(2020, 5, 8),-5),
    new Quotes(6,'People who wonder if the glass is half empty or full miss the point. The glass is refillable', 'Unknown', 'Submitted by Unknown', new Date(2020, 6, 8),-1),    
  ]
  votes: number;

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Want to delete the quote "${this.quotes[index].actualQuote}"?`)
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

