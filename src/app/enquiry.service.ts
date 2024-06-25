import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private apiUrl = 'https://your-api-endpoint/enquiries';

  constructor(private http: HttpClient) { }

  submitEnquiry(enquiry: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enquiry);
  }
}
