import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorsServiceService {

  URL = 'https://my-json-server.typicode.com/danultimate/betprotocol/tutors';

  constructor(private http: HttpClient) { }

  public getTutors() {
    return this.http.get(this.URL);
  }
}
