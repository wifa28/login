import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public navCtrl: NavController, private faio: FingerprintAIO) { }

  login() {
    this.faio.show({
      title: 'Biometric Authentication',
      subtitle: 'Coolest Plugin ever',
      description: 'Please authenticate',
      fallbackButtonTitle: 'Use Pin',
      disableBackup:true,
    })
      .then((result: any) => console.log(result))
      .catch((error: any) => console.log(error));
  }
}
