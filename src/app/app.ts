import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideUpAnimation } from './animation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [slideUpAnimation]
})
export class App {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
