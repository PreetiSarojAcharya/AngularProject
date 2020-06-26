import { Injectable } from '@angular/core';
import { DBMOBPART } from '../database/db';

@Injectable({
  providedIn: 'root',
})
export class ComService {
  constructor() {}

  getMobParts() {
    return DBMOBPART;
  }
}
