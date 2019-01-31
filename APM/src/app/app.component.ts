import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageHeading}}</h1>
    <pm-products></pm-products>
  </div> 
  `
})
export class AppComponent {
  pageHeading: String = 'Acme Product Management';
}