import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getLoansCollection() {
    return this.firestore.collection("users")
      .doc("0KaOT5UUKVSlTA0mUjm9aEyPOfS2").collection("submitted_loans")
      .snapshotChanges();
  }
}
