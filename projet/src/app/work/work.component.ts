import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  nb: any = 0;
  
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
  // traitement sur code a barre 
   value_code: any = "r"
   nb_carton_100:any=""
   nb_carton_10:any=""
  g_code() {
    this.value_code = this.form.get('code')?.value;
    this.nb = Number(this.nb) + 1;
  }
 
  set_agent()
  {

  }
  
  
  // changer le valeurr de led 
  val_led:any="" 
  choix_led(ev:any)
  {
    this.val_led=ev.value;
  }
  // changer le valeur de k 
  val_k:any=""
  choix_kva(ev:any)
  {
    this.val_k=ev.value;
  }

  // changer le valeur w
  val_w:any=""
  choix_w(ev:any)
  {
    this.val_w=ev.value;
  }

  // changer le valeur e
  val_e:any=""
  choix_e(ev:any)
  {
    this.val_e=ev.value;
  }

  // lock et unlock les of et le code agent 
  btnlock: any = false
  lock() {
    this.btnlock = !(this.btnlock)
    if (this.btnlock) {
      this.form.controls['of'].disable();
      this.form.controls['agent'].disable();
      this.form2.controls['w'].disable();
      this.form2.controls['led'].disable();
      this.form2.controls['k'].disable();
      this.form2.controls['E'].disable();

    } else {
      this.form.controls['of'].enable();
      this.form.controls['agent'].enable();
      this.form2.controls['w'].enable();
      this.form2.controls['led'].enable();
      this.form2.controls['k'].enable();
      this.form2.controls['E'].enable();
    }

  }
  // changer le mode auto ou bien manuel 
  mode:any="manuel";
  changermode(event: any) {
     this.mode=event.value 
  }

  // changer le mode de ecriture de code a barre 
  modecode:any=false;
  width  :any= 2;
  height  :any= 15;
  code_mode() {
      this.modecode=!(this.modecode)
  }

  

 
}
