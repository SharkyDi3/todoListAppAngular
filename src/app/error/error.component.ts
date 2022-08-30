import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured. Please Contact Eega Vamshi Sagar (ph-6302898231) Yamnampet'

  constructor() { }

  ngOnInit(): void {
  }

}
