import { Quote } from './quote.model';

export class QuoteService {

  getQuoteOfTheDay(): Quote {
    return {
      "line": "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On' has solved and always will solve the problems of the human race.",
      "author": "Calvin Coolidge"
    };
  }

}
