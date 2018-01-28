import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Flashlight]
})
export class HomePage {
  btn_title: any;
  constructor(public navCtrl: NavController, private fl: Flashlight) {
    this.btn_title = 'Toggle Flashlight';
  }
  switchFlashLight(){
    this.fl.available().then((resp) => {
      this.fl.toggle().then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
      alert('FlashLight is not available');
    });
  }

}
