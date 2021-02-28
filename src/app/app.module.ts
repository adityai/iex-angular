import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IexQuoteComponentComponent } from './iex-quote-component/iex-quote-component.component';
import { IexQuoteService } from './iex-quote.service';

@NgModule({
  declarations: [
    AppComponent,
    IexQuoteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IexQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
