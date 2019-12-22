import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  
  post = {
    title:"Title",
    isFavorites:true
  }
  tweet={
    body:'...',
    likesCount:10,
    isLiked:true
  }
  courses = [1,2];

  courselist = ['course1', 'course2', 'course3', 'course4'];
  onFavoriteChange(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite changed ...",eventArgs);
  }
}
