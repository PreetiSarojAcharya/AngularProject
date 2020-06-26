import { Injectable } from '@angular/core';
//import { DBMOBPART } from '../database/db';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComService {
  constructor(private http: Http) {}

  getMobParts() {
    return this.http
      .get('./../../assets/API/mob-parts.json')
      .pipe(map((response) => response.json().apidata));
    //return DBMOBPART;
  }
}
