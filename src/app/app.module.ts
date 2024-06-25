import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Ensure FormsModule is imported
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { InsightProComponent } from './insight-pro/insight-pro.component';
import { CustomerProComponent } from './customer-pro/customer-pro.component';
import { CompanyInsightsComponent } from './company-insights/company-insights.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,  // Ensure FormsModule is imported
    HttpClientModule,
    AppRoutingModule,
    HomeComponent,  // Import standalone components here
    AboutComponent,
    ProductComponent,
    ContactComponent,
    EnquiryFormComponent,
    InsightProComponent,
    CustomerProComponent,
    CompanyInsightsComponent
  ],
  providers: []
})
export class AppModule { }
