import { Component } from '@angular/core';
import { EnquiryService } from '../enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent {
  enquiry: any = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private enquiryService: EnquiryService) { }

  onSubmit() {
    this.enquiryService.submitEnquiry(this.enquiry).subscribe(response => {
      console.log('Enquiry submitted', response);
      // Reset the form or display a success message
    }, error => {
      console.error('Error submitting enquiry:', error);
      // Handle error case
    });
  }
}
