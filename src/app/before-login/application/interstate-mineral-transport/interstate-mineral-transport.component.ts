import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interstate-mineral-transport',
  templateUrl: './interstate-mineral-transport.component.html',
  styleUrls: ['./interstate-mineral-transport.component.css', '../../before-login.component.css']
})
export class InterstateMineralTransportComponent implements OnInit {
  APPLICATION_TYPE: any = {
    INDIVIDUAL: 'Individual',
    ORGANIZATION: 'Organization'
  }
  selectedApplicationType: string = "Individual";
  public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];
  constructor() { }

  ngOnInit(): void {
  }
  changeApplicationType(event: any) {
    console.log(this.selectedApplicationType)
  }

}
