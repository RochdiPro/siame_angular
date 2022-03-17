import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  liste_produit: any = [];
  liste_agent: any = [];
  liste_of: any = [];
  accees_admin:any;
  constructor() {
    this.liste_produit = JSON.parse(localStorage.getItem('liste_produit') + "");
    this.liste_agent = JSON.parse(localStorage.getItem('liste_agent') + "");
    this.liste_of = JSON.parse(localStorage.getItem('liste_of') + "");
    this.accees_admin = JSON.parse(localStorage.getItem('accees_admin') + "");
    
  }

  ngOnInit(): void {
  }
  ch: any;

  public readof(ev: any): void {
    let file = ev.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;

    fileReader.onloadend = () => {
      this.ch = fileReader.result
      let t = this.ch.split('\n');
      this.liste_of = []

      for (let i = 1; i < t.length; i++) {
        let t2 = t[i].split(",");
        this.obj = {}
        this.obj.code_of = t2[0]
        this.obj.code_fl = t2[1]
        this.obj.e100 =  t2[2]
        this.obj.etat =  "lancer"

 
        if (this.obj.code_of != undefined || this.obj.code_of != " " ) {
         if((this.obj.code_of == "" )==false)
         {
          this.liste_of.push(this.obj)
         }
       
        }
      }
      localStorage.setItem('liste_of', JSON.stringify(this.liste_of));

    }
    fileReader.readAsText(file);
  }
  obj: any = {}
  o: any;
  public readproduit(ev: any): void {
    let file = ev.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;

    fileReader.onloadend = () => {
      this.ch = fileReader.result
      let t = this.ch.split('\n');
      this.liste_produit = []
      for (let i = 1; i < t.length; i++) {
        let t2 = t[i].split(",");
        this.obj = {}
        this.obj.codefl = t2[0]
        this.obj.code = t2[1]
        this.obj.gamme = t2[2]
        this.obj.culot = t2[4]
        this.obj.puissance = t2[3]
        this.obj.couleur = t2[5]
        if (this.obj.code != undefined  || this.obj.code != " "  )  { 
          this.liste_produit.push(this.obj) 
        }
      }
      localStorage.setItem('liste_produit', JSON.stringify(this.liste_produit));

    }
    fileReader.readAsText(file);
  }

  public readagent(ev: any): void {
    let file = ev.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;

    fileReader.onloadend = () => {
      this.ch = fileReader.result
      let t = this.ch.split('\n');
      this.liste_agent = []
      for (let i = 1; i < t.length; i++) {
        let t2 = t[i].split(",");
        this.obj = {}
        this.obj.matricule = t2[0]
        this.obj.nom = t2[1]
         
        if (this.obj.matricule != undefined || this.obj.matricule != ""|| this.obj.matricule != " ") {
          this.liste_agent.push(this.obj)
          
        }
      }
      localStorage.setItem('liste_agent', JSON.stringify(this.liste_agent));

    }
    fileReader.readAsText(file);
  }


  a: any;
  ajouter() {

    Swal.fire({
      title: 'Ordre de fabrication',
      html:
        '<table>' +
        '<tr><td>Code OF</td><td> <input id="swal-input1" value="" class="swal2-input"  placeholder="OF" ></td></tr>' +
        '<tr><td>Code FL</td><td><input id="swal-input2" value="" class="swal2-input"  placeholder="FL..." >  </td></tr>' +
      
        '<tr><td> <h2 style="    margin-top: 25px;">E 100</h2></td><td> '+
        '<input id="input3" name="input3"  type="radio" value="1"   style=" margin-top: 25px;">  oui  '+
        '<input id="input4" name="input4"  type="radio" value="0"    style=" margin-top: 25px;    margin-left: 30px;">  non </td></tr>' +
 
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value,
        (<HTMLInputElement>document.getElementById('input3')).checked,
        (<HTMLInputElement>document.getElementById('input4')).checked,
      ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      let test= this.a[2] || this.a[3] 
      if (result.isConfirmed) {
        if (this.a[0] == '' || this.a[1] == ''|| test == false) {
          Swal.fire({
            title: 'Erreur ',
            text: 'Vérifier vos données  ',
            icon: 'warning',
            confirmButtonText: 'ok',
          })
        }
        else { 
          this.obj = {} 
          this.obj.code_of = this.a[0]
          this.obj.code_fl = this.a[1] 
          this.obj.e100 = this.a[2] 
          this.obj.etat =  "lancer"
          if(this.a[2]==true)
          {
            this.obj.e100=1;
          }else if(this.a[3]==true)
          {
            this.obj.e100=0;

          }
          this.liste_of.push(this.obj)
          localStorage.setItem('liste_of', JSON.stringify(this.liste_of));

          Swal.fire(
            'succés',
            'Ordre de fabrication ',
            'success'
          )
        }
      }

    });
  }


  ajouter_agent() {

    Swal.fire({
      title: 'Agent',
      html:
        '<table>' +
        '<tr><td>Matricule</td><td> <input id="swal-input1" value="" class="swal2-input"  placeholder="" ></td></tr>' +
        '<tr><td>Nom</td><td><input id="swal-input2" value="" class="swal2-input"  placeholder="" >  </td></tr>' +
       
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value,
       
      ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value
 
      if (result.isConfirmed) {
        if (this.a[0] == '' || this.a[1] == '' ) {
          Swal.fire({
            title: 'Erreur ',
            text: 'Vérifier vos données  ',
            icon: 'warning',
            confirmButtonText: 'ok',
          })
        }
        else { 
          this.obj = {} 
          
         this.obj.matricule = this.a[0]
         this.obj.nom =this.a[1]
           
          this.liste_agent.push(this.obj)
          localStorage.setItem('liste_agent', JSON.stringify(this.liste_agent));

          Swal.fire(
            'succés',
            'Agent ',
            'success'
          )
        }
      }

    });
  }
}
