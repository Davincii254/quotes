export class Quotes {
  
  
  showDescription: boolean;
  // votes: any;
  constructor(public id: number,public actualQuote: string,public quoteAuthor: string, public quoteSubmitter: string, public createTime: Date, public votes: number){
    this.showDescription=true;
  }


  // constructor(votes: number) {
  //   this.votes = votes || 0;
  //   }
    
    voteUp(): void {
      this.votes += 1;
    }
  
    voteDown(): void {
      this.votes -= 1;
    }

    
}



// export class Quotes {

//   showDescription: boolean;
//   constructor(public id: number,public actualQuote: string,public description: string){
//     this.showDescription=true;
//   }