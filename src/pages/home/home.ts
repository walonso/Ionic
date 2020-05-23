import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AndroidPermissions } from '@ionic-native/android-permissions';


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
    this.inAppBroser.create("https://gps.widetech.co/app/app.html?s=MTA0NzU2LGxjYXN0cm9j",'_self', options)
    
  }

}
