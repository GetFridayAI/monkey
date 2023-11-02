import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monkey';

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    // event.preventDefault();
  }
}
