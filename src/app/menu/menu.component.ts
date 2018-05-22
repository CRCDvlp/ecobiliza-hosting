import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sesion: boolean = false;

  constructor(private auth: AngularFireAuth) {
    auth.auth.onAuthStateChanged(info => {
      if(info){
        this.sesion = true;
      }else{
        this.sesion = false;
      }
    });
  }

  ngOnInit() {
  }

  logOut(){
    this.auth.auth.signOut();
  }

}
