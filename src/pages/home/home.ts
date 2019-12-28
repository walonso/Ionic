import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private inAppBroser: InAppBrowser) {

  }

  openWebPage() {

    const options : InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBroser.create("https://gps.widetech.co/app/app.html?s=NCxqYWxmb25zbzE%3D",'_self', options)
    
  }

}
