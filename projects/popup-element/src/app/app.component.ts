import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
})
export class AppComponent implements OnInit {
  public state: 'opened' | 'closed' = 'closed';

  @Input()
  public set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  public get message(): string { return this._message; }
  private _message: string;

  @Output()
  public closed = new EventEmitter();

  public todo$: Observable<any>;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.cd.markForCheck();
    this.todo$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(tap(() => {
      setTimeout(() => {
        this.state = 'closed';
        this.cd.markForCheck();
      }, 5000);
    }));

    this.todo$.subscribe((v) => console.log(v));
  }
}
