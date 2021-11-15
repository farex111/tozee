import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CounterComponent } from './homepage/counter/counter.component';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './about/values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CounterComponent,
    AboutComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
