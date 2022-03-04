import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  nb: any = 0;
  page = 0;
  size = 15;
  data2: any = []
  data: any = []
  constructor() { }
  form: any = new FormGroup({
    of: new FormControl(""),
    code: new FormControl(""),
    agent: new FormControl(""),
  });

  form2: any = new FormGroup({
    led: new FormControl(""),
    w: new FormControl(""),
    k: new FormControl(""),
    E: new FormControl(""),
  });


  ngOnInit(): void {
  }
  value_of: any = "ss"
  value_code: any = "ss"
  g_code() {
    this.value_code = this.form.get('code')?.value;
    this.nb = Number(this.nb) + 1;
  }
  g_of() {
    this.value_of = this.form.get('of')?.value;
    this.nb = Number(this.nb) + 1;
  }
  set_agent()
  {

  }
  
  // changer le valeurr de led 
  choix_led(ev:any)
  {

  }

  // lock et unlock les of et le code agent 
  btnlock: any = false
  lock() {
    this.btnlock = !(this.btnlock)
    if (this.btnlock) {
      this.form.controls['of'].disable();
      this.form.controls['agent'].disable();

    } else {
      this.form.controls['of'].enable();
      this.form.controls['agent'].enable();
    }

  }
  // changer le mode auto ou bien manuel 
  mode:any="manuel";
  changermode(event: any) {
     this.mode=event.value 
  }

  // changer le mode de ecriture de code a barre 
  modecode:any=false;
  code_mode() {
    console.log("dddd")
     this.modecode=!(this.modecode)
  }

  
  width  :any= 2;
  height  :any= 30;
 
}
