import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; //import angularfire
import { Observable } from 'rxjs/Observable'; //rsjx

@Component({
  selector: 'app-coba',
  templateUrl: './coba.component.html',
  styles: []
})
export class CobaComponent implements OnInit {
  cobaObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  // constructor() { }
  ngOnInit() {
    this.cobaObservable = this.getCoba('/courses');
    console.log(this.cobaObservable);
  }
  getCoba(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
