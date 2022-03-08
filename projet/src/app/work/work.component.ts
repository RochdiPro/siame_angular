import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  nb: any = 0;
  info: any = "";
  data2: any = []
  data: any = []
  liste_produit: any = [];
  liste_agent: any = [];
  liste_of: any = [];
  val_led: any = "" 
  val_k: any = "" 
  val_w: any = "" 
  val_e: any = ""
  src_img:any="./../../assets/images/"+this.val_led+".png"

  constructor() {
    this.liste_produit = JSON.parse(localStorage.getItem('liste_produit') + "");
    this.liste_agent = JSON.parse(localStorage.getItem('liste_agent') + "");
    this.liste_of = JSON.parse(localStorage.getItem('liste_of') + "");
    this.form.controls['code'].disable();

  }
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

  // traitement sur ordre de fabrication  
  test_of: any = false;
  index_ordre_fabrication:any;
  set_of(event: any) {

    if (event.key == "Enter") {
      let v = this.form.get('of')?.value
      this.test_of = false
      for (let i = 0; i < this.liste_of.length; i++) {
        if (this.liste_of[i].code_of == v) {
          this.test_of = true;
          this.index_ordre_fabrication = i;
        }
      }

      if (this.test_of == false) {
        this.form.controls["of"].setValue("");
        Swal.fire({
          icon: 'error',
          title: '',
          text: 'Ordre de fabrication Inconnu ',
        })
      }
      else {
        for (let i = 0; i < this.liste_produit.length; i++) {
          if (this.liste_produit[i].code == this.liste_of[this.index_ordre_fabrication].code_produit) {
            this.test_code_produit = true
              let c = this.liste_produit[i].code 
              this.value_code = c;

             this.val_e = this.liste_produit[i].couleur             
             this.val_led = this.liste_produit[i].gamme.trim() 
              this.val_w = this.liste_produit[i].puissance 
              this.val_k=this.liste_produit[i].couleur 
          }
        }
      }
    }
  }

  ngOnInit(): void {
  }
  // traitement sur code a barre 
  value_code: any = ""
  nb_carton_100: any = ""
  nb_carton_10: any = ""
  test_code: any = false;
  test_code_produit: any = false;
  index_code_produit:any=-1
  g_code(event: any) {
    if (event.key == "Enter") {
      let v = this.form.get('code')?.value
      this.test_code = false
      this.test_code_produit = false
      for (let i = 0; i < this.liste_produit.length; i++) {
        if (this.liste_produit[i].code == v) {
          this.test_code_produit = true
          this.index_code_produit=i;
        }
      }

      for (let i = 0; i < this.liste_of.length; i++) {
        if (this.liste_of[i].code_produit == v) {
          if (this.liste_of[i].code_of == this.form.get('of')?.value) {
            this.test_code = true;
            this.form.controls["code"].setValue("");

          }
        }
      }
      if (this.test_code_produit == false) {
        this.form.controls["code"].setValue("");
        Swal.fire({
          icon: 'error',
          title: '',
          text: "Produit Inconnu ",
        })
      } else {
        if (this.test_code == false) {
          this.form.controls["code"].setValue("");
          Swal.fire({
            icon: 'error',
            title: '',
            text: "l'ordre de fabrication et le code d'emballage ne correspondent pas ",
          })
        }
      }

      if (this.test_code == true) {
        this.value_code = this.form.get('code')?.value;         
        this.nb = Number(this.nb) + 1;
        if((Number(this.nb) % 10)==0)
        {
          window.print()
          this.nb=0;
          this.nb_carton_10= Number(this.nb_carton_10)+1
        }
        if((Number(this.nb) % 100)==0)
        {
          window.print()
          this.nb=0;
          this.nb_carton_10= 0
          this.nb_carton_100= Number(this.nb_carton_100)+1
        }
         
      }
      
    }
    // this.info = "Code article OF : "+ c + " Gamme "+this.val_led+"Culot : "+this.val_e + "  Puissance : "+ this.val_w + "  couleur : "+this.val_e 
  }


  // traitement sur agent 
  test_agent: any = false;
  set_agent(event: any) {

    if (event.key == "Enter") {
      let v = this.form.get('agent')?.value
      this.test_agent = false
      for (let i = 0; i < this.liste_agent.length; i++) {
        if (this.liste_agent[i].matricule == v) {
          this.test_agent = true;
        }
      }
      if (this.test_agent == false) {
        this.form.controls["agent"].setValue("");
        Swal.fire({
          icon: 'error',
          title: '',
          text: 'Agent Inconnu ',
        })
      }
    }
  }
 
  // lock et unlock les of et le code agent 
  btnlock: any = false
  lock() {
    console.log(this.test_agent)
    console.log(this.test_of)
    if (this.form.get('of')?.value == "" || this.form.get('agent')?.value == "" || this.test_agent == false || this.test_of == false) {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'ordre de fabrication ou agent manquant ',
      })
    }
    else {
      this.btnlock = !(this.btnlock)
      if (this.btnlock) {
        this.form.controls['of'].disable();
        this.form.controls['agent'].disable();
        this.form.controls['code'].enable();
      } else {
        this.form.controls['of'].enable();
        this.form.controls['agent'].enable();
        this.form.controls['code'].disable();

      }

    }

  }
  // changer le mode auto ou bien manuel 
  mode: any = "manuel";
  changermode(event: any) {
    this.mode = event.value
  }

  // changer le mode de code a barre 
 
  width: any = 1;
  height: any = 50;  
  imprimer()
  {
     window.print()
  }

  reset()
  {
    Swal.fire({
      title: 'Êtes-vous sûr? ',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.form.controls["code"].setValue("");
        this.form.controls["of"].setValue("");
        this.form.controls["agent"].setValue("");
        this.val_k = "";
        this.val_w= "";
        this.val_led = "";
        this.val_e = "";

        Swal.fire(
          'Réinitialiser!',
          ' ',
          'success'
        )
      }
    })
  }


}
