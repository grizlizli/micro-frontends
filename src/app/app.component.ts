import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'micro-frontends';

  show = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 5000);
  }

  handleModule(module) {
    console.error(module);
  }
}
