import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: any;

  constructor(public navCtrl: NavController, private sanitize: DomSanitizer) {
    
  }

  urlpaste(){
    this.url = "https://gps.widetech.co/app/app.html?s=NCxqYWxmb25zbzE%3D";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }

}
