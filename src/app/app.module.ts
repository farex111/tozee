import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CounterComponent } from './homepage/counter/counter.component';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './about/values/values.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogComponent } from './blog/blog.component';
import { NewsapiserviceComponent } from './service/newsapiservice/newsapiservice.component';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CounterComponent,
    AboutComponent,
    ValuesComponent,
    SubscribeComponent,
    ContactComponent,
    NotfoundComponent,
    PartnersComponent,
    BlogComponent,
    InstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [NewsapiserviceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
