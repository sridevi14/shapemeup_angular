import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Image } from '../_shared/modals/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  public profileDetails = new BehaviorSubject<User>(null);
  constructor(private firestore: AngularFirestore, public router: Router) {
  }

  createUser(user: User) {
    return this.firestore.collection('users').add(user);
  }

  async updateUser(userdetail: User) {
    await this.firestore.doc('users/' + localStorage.getItem('userId')).update(userdetail);
    //this.router.navigate(['coach'])
    alert("updated");
    
  }


 async updateUsers(user: Image) {
    await this.firestore.doc('users/' + localStorage.getItem('userId')).update(user);
    //this.router.navigate(['coach'])
    alert("updated");
    
  }
 

  

  deleteUser(userID: string) {
    this.firestore.doc('users/' + userID).delete();
  }

  getUser() {
    const workoutsDocuments = this.firestore.collection<any>('users');
    return workoutsDocuments.snapshotChanges()
      .pipe(
        map(changes => changes.map(({ payload: { doc } }) => {
          const data = doc.data();
          const id = doc.id
          return { id, ...data };
        })),
        map((users) => users.find(doc => doc.email === localStorage.getItem('userEmail')))
      )
  }

}
