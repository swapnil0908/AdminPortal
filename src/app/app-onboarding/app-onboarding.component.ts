import { Component, OnInit } from '@angular/core';
import * as data from './json-files/appOnboarding.json';


@Component({
  selector: 'app-app-onboarding',
  templateUrl: './app-onboarding.component.html',
  styleUrls: ['./app-onboarding.component.css']
})
export class AppOnboardingComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
  }

  openAppMetadata(){
    document.getElementById("columnId-2").style.width = "90%";
  }


  public app_data: any = (data as any).default;
  app_data_model:Array<any>=this.app_data;

  // dropDownFunction(number){
  //   if(number === 1){
  //     document.getElementById("myDropdown-1").classList.toggle("show");
  //   }
  //   else if(number === 2){
  //     document.getElementById("myDropdown-2").classList.toggle("show");
  //   }
  //   else if(number === 3){
  //     document.getElementById("myDropdown-3").classList.toggle("show");
  //   }
  //   else if(number === 4){
  //     document.getElementById("myDropdown-4").classList.toggle("show");
  //   }
  //   else if(number === 5){
  //     document.getElementById("myDropdown-5").classList.toggle("show");
  //   }
  //   else if(number === 6){
  //     document.getElementById("myDropdown-6").classList.toggle("show");
  //   }
  //   else if(number === 7){
  //     document.getElementById("myDropdown-7").classList.toggle("show");
  //   }
  //   else if(number === 8){
  //     document.getElementById("myDropdown-8").classList.toggle("show");
  //   }
  //   else if(number === 9){
  //     document.getElementById("myDropdown-9").classList.toggle("show");
  //   }
  //   else if(number === 10){
  //     document.getElementById("myDropdown-10").classList.toggle("show");
  //   }
  //   else if(number === 11){
  //     document.getElementById("myDropdown-11").classList.toggle("show");
  //   }
  // }

  myFunction(){
    
  }


}
