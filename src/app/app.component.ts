import { Component, Injectable } from '@angular/core';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { Post } from './models/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';
  posts = [
    new Post("Bienvenue", "Bienvenu les men in black bienvenu"),
    new Post("post de test numéro 2", "qkfjhsbdjhfvbjshdbfhjbsjbfdjhs"),
    new Post("jksdfkjqbjbfjhbqsd", "qbdjfbhqsdbjfhbqsdhbf"),
    new Post("Oulag", "Nouvel ajout oklm")
  ]
}
