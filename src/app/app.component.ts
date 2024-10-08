import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Yesser';
  image: string = "https://angular.io/assets/images/logos/angular/angular.png";
  name: string = "Hello wrold!";

  Hello() {
    console.log("Hello from Angular");
  }
}
