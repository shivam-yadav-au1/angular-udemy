import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:"Title",
    isFavorites:true
  }
  tweet={
    body:'...',
    likesCount:10,
    isLiked:true
  }
  onFavoriteChange(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite changed ...",eventArgs);
  }
}
