import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInteceptor } from './inteceptors/http-headers.inteceptor';
import { HttpErrorsInteceptor } from './inteceptors/http-errors.inteceptor';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    GaugeModule,
    HttpClientModule,
    FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInteceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInteceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
