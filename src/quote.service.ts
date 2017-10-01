import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quote.model';

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getQuoteOfTheDay(): Promise<Quote> {
    return this.http.get('/quote.json').toPromise()
      .then(response => response.json());

    // return {
    //   "line": "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On' has solved and always will solve the problems of the human race.",
    //   "author": "Calvin Coolidge"
    // };
  }

}
