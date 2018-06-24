import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introcards',
  templateUrl: './introcards.component.html',
  styleUrls: ['./introcards.component.css']
})
export class IntrocardsComponent implements OnInit {

   ImgObj = [{ url:'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
             { url:'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
             { url:'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}];
  constructor() {}
  
  ngOnInit() {
  }

}
