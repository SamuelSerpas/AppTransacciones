import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AuthGuard,
    NavParams,
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService,
       multi: true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
