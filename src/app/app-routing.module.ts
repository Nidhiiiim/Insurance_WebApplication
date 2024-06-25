import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { InsightProComponent } from './insight-pro/insight-pro.component';
import { CustomerProComponent } from './customer-pro/customer-pro.component';
import { CompanyInsightsComponent } from './company-insights/company-insights.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'insight-pro', component: InsightProComponent },
  { path: 'customer-pro', component: CustomerProComponent },
  { path: 'company-insights', component: CompanyInsightsComponent }
];

@NgModule({
  declarations: [
    EnquiryFormComponent, // Declare non-standalone components
  ],
  imports: [
    RouterModule.forRoot(routes),
    HomeComponent,  // Import standalone components here
    AboutComponent,
    ProductComponent,
    ContactComponent,
    InsightProComponent,
    CustomerProComponent,
    CompanyInsightsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
