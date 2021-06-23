import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css', '/../../after-login.component.css']
})
export class UserRegisterComponent implements OnInit {
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
  expandedRowIndex :number=-1;
  tableData = [
    {
        "srNo": "1",
        "name": "Ajinkya Patil",
        "designation": "Owner/Lessee",
        "mobileno": "7890567890",
        "usertype": "Lessee/Lease Supervisor",
        "subusertype": "Owner/Lessee"
    },
    {
        "srNo": "2",
        "name": "Vishal Patil",
        "designation": "Owner/Lessee",
        "mobileno": "7890567890",
        "usertype": "Lessee/Lease Supervisor",
        "subusertype": "Owner/Lessee"
    },
    {
      "srNo": "3",
      "name": "Vishal Patil",
      "designation": "Owner/Lessee",
      "mobileno": "7890567890",
      "usertype": "Lessee/Lease Supervisor",
      "subusertype": "Owner/Lessee"
  },
  {
    "srNo": "4",
    "name": "Vishal Patil",
    "designation": "Owner/Lessee",
    "mobileno": "7890567890",
    "usertype": "Lessee/Lease Supervisor",
    "subusertype": "Owner/Lessee"
},
{
  "srNo": "5",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
},
{
  "srNo": "6",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
},
{
  "srNo": "7",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
},
{
  "srNo": "8",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
},
{
  "srNo": "9",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
},
{
  "srNo": "10",
  "name": "Vishal Patil",
  "designation": "Owner/Lessee",
  "mobileno": "7890567890",
  "usertype": "Lessee/Lease Supervisor",
  "subusertype": "Owner/Lessee"
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
