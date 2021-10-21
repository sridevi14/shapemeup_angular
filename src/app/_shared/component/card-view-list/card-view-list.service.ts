import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardViewListService {

  private categoryList:any[] = [];

  constructor(private firestore: AngularFirestore) { }

  createItem(collectionName, newItem: string) {
    let item: any = { name: newItem }
    return this.firestore.collection(collectionName).add(item);
  }
  deleteItem(collectionName: string, item: string) {
    if (item) {
      return this.firestore.doc(collectionName + '/' + item).delete();
    }
    else {
      return this.firestore.doc(collectionName).delete();
    }
  }

  getItems(collectionName: string, order: string) {
    /*     let collectionDetails = collectionName.split('/');
        if (collectionDetails.length > 1) { */
    return this.firestore.collection<any>(collectionName, ref => ref.orderBy('name', order === 'desc' ? 'desc' : 'asc')).valueChanges({ idField: 'id' });
    /*    } 
        
         else {
          const productsDocuments = this.firestore.collection<any>(collectionDetails[0]);
          return productsDocuments.snapshotChanges()
            .pipe(
              map(changes => changes.map(({ payload: { doc } }) => {
                const data = doc.data();
                const id = doc.id
                return { id, ...data };
              })),
              map((products) => products.find(doc => doc.id === collectionDetails[1]))
            )
        } */

  }
  public get subCategoryList(){
    return this.categoryList;
  }
  public set subCategoryList(value){
    this.categoryList = value;
  }
}

