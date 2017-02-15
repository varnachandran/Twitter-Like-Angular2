import {Component,Input} from 'angular2/core'
import {MyLikeComponent} from './mylike.component'

@Component({
selector:'mytweet',
template: `
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{ tweet.imageUrl }}" >
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">
    <span class="author">{{tweet.author}}</span>
    <span class="handle">{{tweet.handle}}</span>
    </h4>
    <span class="body">{{tweet.body}}</span>
    <mylike [numLikes]="tweet.numLikes" [isLike]="tweet.isLike"></mylike>
  </div>
</div>
`,
styles:[`
    .media{
        
        font-size:40
        margin-bottom: 20px;
    
    }
    .handle {
            color: #ccc;
        }
        
        
        .media-object {
            border-radius: 10px;
        }
    `
],
directives: [MyLikeComponent],

})

export class MyTweetComponent{
@Input() tweet;


    constructor(){
        console.log(this.tweet);
    }
    
    
}