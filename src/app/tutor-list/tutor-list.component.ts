import { Component, OnInit } from '@angular/core';
import { TutorsServiceService } from '../tutors-service.service';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit {

  tutorsSource: any;
  tutors: any;

  constructor(private service: TutorsServiceService) { }

  ngOnInit() {
    this.getTutors();
  }

  private getTutors() {
    this.service.getTutors()
      .subscribe(data => {
        this.tutorsSource = data;
        this.tutors = data;
        console.log(data);
      });
  }

  public sortTutors(value: string) {
    switch (value) {
      case 'Name':
        this.tutors.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case 'City':
        this.tutors.sort((a, b) => (a.city > b.city) ? 1 : -1);
        break;
      default:
        break;
    }
  }

  public filterTutors(city: string) {    
    const filtered = this.tutorsSource.filter((tutor) => {
      return tutor.city === city;
    });

    console.log(filtered);
    this.tutors = filtered;
  }

}
