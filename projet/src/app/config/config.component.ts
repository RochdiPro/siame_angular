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
  constructor() {
    this.liste_produit = JSON.parse(localStorage.getItem('liste_produit') + "");
    this.liste_agent = JSON.parse(localStorage.getItem('liste_agent') + "");
    this.liste_of = JSON.parse(localStorage.getItem('liste_of') + "");

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
        this.obj.code_produit = t2[1]
        this.obj.e100 =  t2[2]

        if (this.obj.code != undefined || this.obj.code != " " || this.obj.code != "") {
          this.liste_of.push(this.obj)
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
        this.obj.code = t2[0]
        this.obj.gamme = t2[1]
        this.obj.culot = t2[2]
        this.obj.puissance = t2[3]
        this.obj.couleur = t2[4]
        if (this.obj.code != undefined  || this.obj.code != " " || this.obj.code != "")  {
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
        '<tr><td>Code Article</td><td><input id="swal-input2" value="" class="swal2-input"  placeholder="619.." >  </td></tr>' +
        '<tr><td> E 100 </td><td><input id="swal-input3" value="oui" class="swal3-input"  placeholder="oui" >  </td></tr>' +

        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value,
        (<HTMLInputElement>document.getElementById('swal-input3')).value,

        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      if (result.isConfirmed) {
        if (this.a[0] == '' || this.a[1] == ''|| this.a[2] == '') {
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
          this.obj.code_produit = this.a[1] 
          this.obj.e100 = this.a[2] 
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
}
