import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
//import adapter from 'webrtc-adapter/out/adapter_no_global.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  @ViewChild('videoContainer') videoContainer;
  private video: HTMLVideoElement;

  constructor(public navCtrl: NavController, private inAppBroser: InAppBrowser, private platform: Platform
    , private androidPermissions: AndroidPermissions) {

    this.video = document.createElement('video');
    this.video.width = 640;
    this.video.height = 480;
    this.video.setAttribute('autoplay', '');
    
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        );
console.log('1');
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
      });
    }


  }

  ngAfterViewInit() {
    this.videoContainer.nativeElement.appendChild(this.video);
    console.log('2');
    this.initWebRTC();
  }


  openWebPage() {

    navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: true
    })
    .then(mediaStream => {
        console.log("Video camera platform ready", mediaStream)
    });



    const options : InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBroser.create("https://webrtc.github.io/samples/src/content/getusermedia/gum/",'_self', options)
    
  }

  initWebRTC() {
    const constraints = {
      video: true,
      audio: false
    };

    const handleSuccess = (stream: MediaStream) => {
      (<any>window).stream = stream; // make stream available to browser console
     // this.video.srcObject = stream;
    };

    const handleError = (error: any) => {
      const p = document.createElement('p');
      p.innerHTML = 'navigator.getUserMedia error: ' + error.name + ', ' + error.message;
      //this.videoContainer.nativeElement.appendChild(p);
    };
console.log('llego aca?')
    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  }

}
