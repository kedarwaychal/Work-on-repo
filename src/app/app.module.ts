import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianFormComponent } from './accordian-form/accordian-form.component';
import { FormsModule } from '@angular/forms';
import { AccordiantabComponent } from './accordiantab/accordiantab.component';
import { AccordianpanelComponent } from './accordiantab/accordianpanel/accordianpanel.component';
import { accordianService } from './shared/Detail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccordianFormComponent,
    AccordiantabComponent,
    AccordianpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [
     accordianService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
