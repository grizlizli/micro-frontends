import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-element',
  templateUrl: './popup-element.component.html',
  styleUrls: ['./popup-element.component.scss']
})
export class PopupElementComponent implements OnInit {
  public message = 'hello';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.message = 'hello, there';
    }, 3000);
  }

}
