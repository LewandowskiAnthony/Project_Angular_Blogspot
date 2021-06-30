export class Post {
  private _title = "";
  private _topic = "";
  private hasLove = false;
  _publishDate: Date;

  constructor(title: string, topic: string){
    this._title = title;
    this._topic = topic;
    this._publishDate = new Date();
  }

  getTitle(){
    return this._title;
  }

  getTopic(){
    return this._topic;
  }

  getDate(){
    return this._publishDate;
  }

  changeLove(){
    if(this.hasLove==true){
      this.hasLove=false;
    }else{
      this.hasLove=true;
    }
  }
}