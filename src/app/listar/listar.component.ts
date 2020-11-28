import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {  ClienteNuevoService } from "../service/cliente-nuevo.service";


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public cli : any
  constructor(
    private clienteserv : ClienteNuevoService
  ) { }

  ngOnInit() {


  }

}
