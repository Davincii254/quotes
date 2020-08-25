export class Quotes {
  
  
    showDescription: boolean;

    constructor(public id: number,public actualQuote: string,public quoteAuthor: string, public quoteSubmitter: string, public createTime: Date, public votes: number){
      this.showDescription=true;
    }
  
  
  
      voteUp(): void {
        this.votes += 1;
      }
    
      voteDown(): void {
        this.votes -= 1;
      }
  
      
  }
  