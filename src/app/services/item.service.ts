import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
  from 'angularfire2/firestore';
import {items} from '../models/item';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 // itemsCollection: AngularFirestoreCollection<Item>;
 items: Observable<any[]>;


  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('workouts').valueChanges();

  }

  getItems() {
    return this.items;
  }
}

