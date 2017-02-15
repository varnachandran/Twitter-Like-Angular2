import {Component} from 'angular2/core';
import {MyLikeComponent} from './mylike.component'
import {MyTweetComponent} from './mytweet.component'
import {MyTweetService} from './mytweet.service'
import {TweetService} from './tweet.service'

@Component({
    selector:'myapp',
    template:`
    <h1>Twitter-like UI using Angular Components</h1>
    <p>
    <div *ngFor="#tweet of tweets">
    <p>
    <mytweet [tweet]="tweet"></mytweet>
    </div>
    `,
    directives: [MyTweetComponent],
    providers: [MyTweetService]
})
export class AppComponent{
    tweets;
constructor(mytweetservice:MyTweetService){
        console.log("REached")
        this.tweets = mytweetservice.getTweets();
    
}
}