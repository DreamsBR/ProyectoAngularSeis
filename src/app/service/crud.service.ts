import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newemployee(Record)
  {
    return this.fireservices.collection('Cliente').add(Record);
  }

  get_Allemployee()
  {
    return this.fireservices.collection('Cliente').snapshotChanges();
  }

  update_employee(recordid, record)
  {
    this.fireservices.doc('Cliente/' + recordid).update(record);
  }

  delete_employee(record_id)
  {
    this.fireservices.doc('Cliente/' + record_id).delete();
  }



}
