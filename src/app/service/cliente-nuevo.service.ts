import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ClienteNuevoService {

  constructor( public fireserive: AngularFirestore) { }

  AgregarEmpleado(record){

    return this.fireserive.collection('Cliente').add(record);
  }

  public getClientes(){
    return this.fireserive.collection('cliente').snapshotChanges();
  }



}
