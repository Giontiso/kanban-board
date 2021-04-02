import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestoreService: AngularFirestore) {  }

  public createEntity(collectionName: string, data: {}): Observable<string> {
    return from(this.firestoreService.collection(collectionName).add(data)).pipe(
      map((value: DocumentReference) => value.id),
      take(1)
    );
  }

  public getData<T>(collectionName: string): Observable<T[]> {
    return this.firestoreService.collection(collectionName).snapshotChanges().pipe(
      map((actions)=>
        actions.map((reference) => {
          const data: any = reference.payload.doc.data();
          const id = reference.payload.doc.id;
          return {id, ...data} as T;
        })
      ),
      take(1)
    );
  }
  public deleteEntity(collectionName: string, id: string): Observable<any> {
    return from(this.firestoreService.collection(collectionName).doc(id).delete()).pipe(
      // map((value: DocumentReference) => value.id),
      take(1)
    );
  }

  // public getobjectByRef(collectionName: string, id: string ) : Observable<any> {
  //   // const b = firebase.firestore().doc(collectionName + "/" + id);
  //   return this.firestoreService.collection(collectionName).doc(id).get();
  // }

  // public updateObject(collectionName: string, id: string, data: {}): Observable<string> {
  //   return from(this.firestoreService.collection(collectionName).doc(id).set(data, {merge: true})).pipe(
  //     map((value: DocumentReference) => value.id),
  //     take(1)
  //   );
  // }




  // public handleData<T>(collectionName: string): Observable<T[]> {
  //   return this.firestoreService.collection(collectionName).snapshotChanges().pipe(
  //     map((actions)=>
  //       actions.map((reference) => {
  //         const data: any = reference.payload.doc.data();
  //         const id = reference.payload.doc.id;
  //         return {id, ...data} as T;
  //       })
  //     )
  //   );
  // }


}
