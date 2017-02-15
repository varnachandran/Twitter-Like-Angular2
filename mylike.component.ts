import {Component,Input} from 'angular2/core'
@Component({
    selector:'mylike',
    template:`
    <div class="like">
    <i class="glyphicon glyphicon-heart" [class.highlighted]="isLike"
    
    (click)="OnLike()"></i>
    <div class="likes">{{numLikes}}</div>
    </div>
    `,
    styles:[`
    .glyphicon-heart{
        
       color:#ccc;
       cursor: pointer;
    }
     .highlighted{
        color:deeppink;
     }
    
    `]
})
export class MyLikeComponent{
@Input() isLike=false;
@Input() numLikes=0;
OnLike(){
this.isLike=!this.isLike;
if(this.isLike)
this.numLikes++;
else
this.numLikes--;
}
}