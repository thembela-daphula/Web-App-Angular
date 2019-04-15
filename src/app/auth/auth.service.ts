import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) { }
  //Login user
  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      return this.router.navigateByUrl('/home');
    }).catch((err) => {
      window.alert(err.message);
    })
  }


}
