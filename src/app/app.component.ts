import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'subscribe-Unsubscribe';
  name = "Angular " + VERSION.major;
 
  showChild = false;
}
