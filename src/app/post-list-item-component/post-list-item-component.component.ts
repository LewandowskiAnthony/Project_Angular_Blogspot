import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle : string | undefined;
  @Input() postTopic : string | undefined;
  @Input() postDate : Date | undefined;
  @Input() love : number = 0;
  hasLove : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  WinLove(){
    this.love++;
    this.hasLove=true;
  }

  LossLove(){
    if(this.hasLove){
      this.love--;
      this.hasLove=false;
    }
  }
}
