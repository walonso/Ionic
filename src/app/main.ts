import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
//import * as adapter from 'webrtc-adapter/out/adapter_no_global.js'

platformBrowserDynamic().bootstrapModule(AppModule);
