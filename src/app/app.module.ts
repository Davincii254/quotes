import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { HighlightDirective } from './highlight.directive';
import { TimeCounterPipe } from './time-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    HighlightDirective,
    TimeCounterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
>>>>>>> a70129492a45a8a8239c1c89d04dcbe2e0b9619e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
