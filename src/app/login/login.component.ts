import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    usuario: '',
    contra: ''
  }
  operacion: string;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.auth.auth.signInWithEmailAndPassword(this.loginObj.usuario, this.loginObj.contra).then( login => {
      this.operacion = "Inicio de sesion correcto";
    }).catch( error => {
      this.operacion = "Inicio de sesion incorrecto";
    });
  }
}
