import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from 'mat-input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work2',
  templateUrl: './work2.component.html',
  styleUrls: ['./work2.component.scss']
})
export class Work2Component implements OnInit {

  x: any = "A60 B22"
  nb: any = 0;
  obj: any = {};
  nb_print_carton_10: any = 0;
  nb_print_carton_100: any = 0;
  nb_carton_10_controle_100: any = 0;
  info: any = "";
  value_code: any = ""
  data2: any = []
  data: any = []
  liste_produit: any = [];
  liste_agent: any = [];
  liste_of: any = [];
  val_resume: any = ""
  val_gamme: any = ""
  val_qte_reg: any = ""
  val_des: any = ""
  historique_of: any = [];
  qte_dis_empa: any;
  qte_dis_u: any;
  @ViewChild('ref_of', { static: false }) ref_of: any = MatInputModule;
  @ViewChild('ref_agent', { static: false }) ref_agent: any = MatInputModule;
  @ViewChild('ref_code', { static: false }) ref_code: any = MatInputModule;
  liste_des_codes: any = [];

  constructor(public datePipe: DatePipe, private router: Router) {
    this.liste_produit = JSON.parse(localStorage.getItem('liste_produit_dis') + "");
    this.liste_agent = JSON.parse(localStorage.getItem('liste_agent_dis') + "");
    this.liste_of = JSON.parse(localStorage.getItem('liste_of_dis') + "");
    this.form.controls['code'].disable();
    this.historique_of = JSON.parse(localStorage.getItem('historique_of_dis') + "");

    if (this.liste_agent == undefined || this.liste_of == undefined || this.liste_produit == undefined) {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'data ',
      })
    }

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
  index_ordre_fabrication: any;
  test_et_100: any;
  test_fermer: any = false
  v: any;
  set_of(event: any) {

    if (event.key == "Enter") {
      this.v = this.form.get('of')?.value
      this.test_of = false
      this.test_fermer = false;
      this.nb = 0
      this.nb_carton_10 = 0
      this.nb_carton_100 = 0
      this.nb_carton_10_controle_100 = 0
      this.nb_print_carton_10 = 0
      this.nb_print_carton_100 = 0
      for (let i = 0; i < this.liste_of.length; i++) {

        if (this.liste_of[i].code_of == this.v) {
          if (this.liste_of[i].etat == "lancé") {
            this.test_of = true;
            this.index_ordre_fabrication = i;
            this.test_et_100 = this.liste_of[i].e100;
            Swal.fire({
              icon: 'success',
              title: 'Ordre de fabrication',
              showConfirmButton: false,
              timer: 1000
            })
            this.ref_agent.nativeElement.focus();
            this.form.controls['of'].disable();
            this.getdata_of()
          }
          else {
            this.form.controls["of"].setValue("");
            this.test_of = false;
            Swal.fire({
              icon: 'error',
              title: '',
              text: 'Ordre de fabrication soldé  ',
            })
            this.test_fermer = true
          }
        }
      }
      if (this.test_of == false && this.test_fermer == false) {
        this.form.controls["of"].setValue("");
        Swal.fire({
          icon: 'error',
          title: '',
          text: 'Ordre de fabrication Inconnu ',
        })
      }

    }
  }

  getdata_of() {
    let test_historique_of = false;
    if (this.historique_of == null) {
      this.historique_of = []
    }
    for (let i = 0; i < this.historique_of.length; i++) {
      if (this.historique_of[i].of == this.v) {
        test_historique_of = true;
        this.nb = this.historique_of[i].nb
        this.nb_carton_10 = this.historique_of[i].nb_carton_10;
        this.nb_carton_100 = this.historique_of[i].nb_carton_100;
        this.nb_carton_10_controle_100 = this.historique_of[i].nb_carton_10_controle_100
        this.nb_print_carton_10 = this.historique_of[i].nb_print_carton_10
        this.nb_print_carton_100 = this.historique_of[i].nb_print_carton_100
      }
    }
    if (test_historique_of == false) {
      this.obj = {}
      this.obj.of = this.v;
      this.obj.nb = this.nb;
      this.obj.nb_carton_10 = this.nb_carton_10;
      this.obj.nb_carton_100 = this.nb_carton_100;
      this.obj.nb_carton_10_controle_100 = this.nb_carton_10_controle_100;
      this.obj.nb_print_carton_10 = this.nb_print_carton_10
      this.obj.nb_print_carton_100 = this.nb_print_carton_100
      this.historique_of.push(this.obj)
    }
    localStorage.setItem('historique_of_dis', JSON.stringify(this.historique_of));

    for (let i = 0; i < this.liste_produit.length; i++) {
      if (this.liste_produit[i].code == this.liste_of[this.index_ordre_fabrication].code) {
        this.test_code_produit = true
        let c = this.liste_produit[i].code
        this.value_code = c;
        this.val_resume = this.liste_produit[i].resume
        this.val_gamme = this.liste_produit[i].gamme.trim()
        this.val_des = this.liste_produit[i].des
        this.val_qte_reg = this.liste_produit[i].qte_reg

      }
    }
    this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;

  }

  ngOnInit(): void {
  }
  // traitement sur code a barre 

  nb_carton_100: any = ""
  nb_carton_10: any = ""
  test_code: any = false;
  test_code_produit: any = false;
  index_code_produit: any = -1
  test_correction_code: any = false
  test_redandance: any = false
  result_type_dis: any = false;
  test_produit_redandance: any = false
  lancer_pb: any = false
  test_type_fd = 0;
  resultat_prod: any = []

  // code jdid
  produit_siame: any = false;
  liste_produit_siame = [];
  lire_2_code_a_barre: any = 0;
  code_a_barre_en_attente: any = null;
  le_2_test_code_barre: any = false;
  a: any;
  test_produit_inconnu: any = false;
  test_produit_redondance: any = false;
  test_produit_correspondance: any = false;
  async g_code(event: any) {
    if (event.key == "Enter") {
      let ch = this.form.get('code')?.value
      this.test_produit_inconnu = false;
      this.test_produit_redandance = false;
      this.test_produit_correspondance = false;


      //code jdid
      this.produit_siame = false;

      //  chercher si produit siame qr code (compose de 3 element split par '_' )  ou bien un code a barre non siame ( code fournisseur)
      // si resultat_type_dis = true   produit siame / sinon resultat_type_dis = false   produit fr 
      if (ch.split("_").length == 3) {
        this.produit_siame = true;
        this.v = ch.split("_")[0]

        //chercher produit dans la liste des produit
        for (let i = 0; i < this.liste_produit.length; i++) {
          if (this.liste_produit[i].code == this.v) {
            this.test_produit_inconnu = true
            this.qte_dis_empa = this.liste_produit[i].qte_reg
            this.qte_dis_u = this.liste_produit[i].qte_u
          }
        }
        if (this.test_produit_inconnu == false) { this.erreur_produit_inconnu() }

        // chercher la correspondance produit of 
        if (this.test_produit_inconnu == true) {
          for (let i = 0; i < this.liste_of.length; i++) {
            if (this.liste_of[i].code_of == this.form.get('of')?.value && this.liste_of[i].etat == "lancé" && this.liste_of[i].code == this.v) {
              this.test_produit_correspondance = true;
            }
          }
          if (this.test_produit_correspondance == false) { this.erreur_produit_correspondance_produit_of() }
        }

        // chercher la redondance 
        if (this.test_produit_inconnu == true && this.test_produit_correspondance == true) {

          for (let cpt = 0; cpt < this.liste_des_codes.length; cpt++) {
            if (ch == this.liste_des_codes[cpt]) {
              this.test_produit_redandance = true
            }
          }
          if (this.test_produit_redandance == true) { this.erreur_produit_Redondance() }
          else { this.liste_des_codes.push(ch) }

        }

        // fait le traitement si tout est correct 
        if (this.test_produit_inconnu == true && this.test_produit_correspondance == true && this.test_produit_redandance == false) {
          this.traitement(ch)
        }
      }

      else {
        let code_siame = ""
        let type = ""
        //chercher code a barre produit dans la liste des produit code 1 ou bien code 2           
        for (let i = 0; i < this.liste_produit.length; i++) {
          if (this.liste_produit[i].code_a_barre == ch || this.liste_produit[i].code_a_barre2 == ch) {
            this.test_produit_inconnu = true
            this.qte_dis_empa = this.liste_produit[i].qte_reg
            this.qte_dis_u = this.liste_produit[i].qte_u           
          }
        }
        if (this.test_produit_inconnu == false) { this.erreur_produit_inconnu() }

        // chercher la correspondance produit of  code a barre 1  et code 2 si le cas 
        if (this.test_produit_inconnu == true) {
          type = "complexe"
          for (let i = 0; i < this.liste_produit.length; i++) { 
            if (this.liste_produit[i].code_a_barre == ch && this.liste_produit[i].code_a_barre2 == "null") {
              code_siame = this.liste_produit[i].code
              type = "simple"
              }
          }
          if (type == "simple") {
            for (let i = 0; i < this.liste_of.length; i++) {
              if (this.liste_of[i].code_of == this.form.get('of')?.value && this.liste_of[i].etat == "lancé" && this.liste_of[i].code == code_siame) {
                this.test_produit_correspondance = true
              }
            }
          }
          else {
             for (let i = 0; i < this.liste_produit.length; i++) { 
              if (this.liste_produit[i].code_a_barre == this.code_a_barre_en_attente && this.liste_produit[i].code_a_barre2 == ch) {
                code_siame = this.liste_produit[i].code
              } else if (this.liste_produit[i].code_a_barre2 == this.code_a_barre_en_attente && this.liste_produit[i].code_a_barre == ch) {
                code_siame = this.liste_produit[i].code
              }
            }
          }

          if (this.code_a_barre_en_attente == null) {
            this.code_a_barre_en_attente = ch            
             this.form.controls["code"].setValue("");
            this.test_produit_correspondance = "wait"
          }
          else {
            for (let i = 0; i < this.liste_of.length; i++) {
              if (this.liste_of[i].code_of == this.form.get('of')?.value && this.liste_of[i].etat == "lancé" && this.liste_of[i].code == code_siame) {
                this.test_produit_correspondance = true
              }
            }
          }
        }
        
        if (this.test_produit_inconnu == true && this.test_produit_correspondance == false) { this.erreur_produit_correspondance_produit_of() ;this.code_a_barre_en_attente = null  }  
        // fait le traitement si tout est correct 
        if (this.test_produit_inconnu == true && (this.test_produit_correspondance == true || type =="simple")  ) {
          this.traitement(ch)
        }

      }
    }
  }
  // async g_code1(event: any) {
  //   if (event.key == "Enter") {
  //     let ch = this.form.get('code')?.value
  //     this.result_type_dis = false
  //     this.test_produit_redandance = false
  //     this.test_code_produit = false
  //     this.test_code = false
  //     this.lancer_pb = false
  //     if (ch.split("_").length == 3) { this.result_type_dis = true }
  //     this.test_redandance = false;
  //     if (this.result_type_dis == false) {
  //       this.v = ch
  //       for (let i = 0; i < this.liste_produit.length; i++) {
  //         if (this.liste_produit[i].code_a_barre == this.v) {
  //           for (let j = 0; j < this.liste_of.length; j++) {
  //             if (this.liste_produit[i].code == this.liste_of[j].code && this.liste_of[j].etat == "lancé") {
  //               this.v = this.liste_produit[i].code
  //             }
  //           }
  //         }
  //       }
  //     }
  //     else {
  //       this.v = ch.split("_")[0]
  //     }

  //     let code = ""
  //     // chercher produit et get code of et  code siame 
  //     for (let i = 0; i < this.liste_produit.length; i++) {
  //       if (this.liste_produit[i].code == this.v) {
  //         this.test_code_produit = true
  //         this.index_code_produit = i;
  //         code = this.liste_produit[i].code
  //         this.qte_dis_empa = this.liste_produit[i].qte_reg
  //         this.qte_dis_u = this.liste_produit[i].qte_u
  //         if (this.liste_produit[i].redandance + "" == "0") { this.test_produit_redandance = true }
  //       }
  //     }

  //     // message produit inconu 
  //     if (this.test_code_produit == false) {

  //       this.form.controls['code'].disable();
  //       this.test_correction_code = true
  //       this.lancer_pb = true
  //       Swal.fire({
  //         icon: 'error',
  //         title: " Produit Inconnu  ",
  //         html:
  //           '<table>' +
  //           '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input" style="    margin-left: 16%;"    ></td></tr>' +
  //           '</table>',
  //         focusConfirm: false,
  //         preConfirm: () => {
  //           return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
  //           ]
  //         },
  //         allowOutsideClick: () => !Swal.isLoading()
  //       }).then((result) => {
  //         this.a = result.value

  //         let test = this.a[2] || this.a[3]
  //         if (result.isConfirmed) {
  //           if (this.a[0] == 'utilisateur') {
  //             this.test_correction_code = false
  //             this.form.controls["code"].setValue("");
  //             this.form.controls['code'].enable();
  //             this.ref_code.nativeElement.focus();

  //           }
  //           else {
  //             Swal.fire({

  //               text: 'Vérifier vos données',
  //               imageUrl: './../assets/images/panne.png',
  //               imageWidth: 400,
  //               imageHeight: 400,

  //             })
  //           }
  //         }
  //       });

  //     }
  //     else {
  //       // get true false if code fl ==  code empallage
  //       for (let i = 0; i < this.liste_of.length; i++) {
  //         if (this.liste_of[i].code == code) {
  //           if (this.liste_of[i].code_of == this.form.get('of')?.value && this.liste_of[i].etat == "lancé") {
  //             this.test_code = true;
  //             this.form.controls["code"].setValue("");
  //           }
  //         }
  //       }
  //     }


  //     // message erreur code produit et code fl et code of
  //     if (this.test_code == false && this.test_redandance == false && this.lancer_pb == false) {
  //       this.form.controls['code'].disable();
  //       this.test_correction_code = true
  //       this.lancer_pb = true

  //       Swal.fire({
  //         icon: 'error',
  //         title: " l'ordre de fabrication et le code d'emballage ne correspondent pas  ",
  //         html:
  //           '<table>' +
  //           '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input" style="    margin-left: 16%;"    ></td></tr>' +
  //           '</table>',
  //         focusConfirm: false,
  //         preConfirm: () => {
  //           return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
  //           ]
  //         },
  //         allowOutsideClick: () => !Swal.isLoading()
  //       }).then((result) => {
  //         this.a = result.value

  //         let test = this.a[2] || this.a[3]
  //         if (result.isConfirmed) {
  //           if (this.a[0] == 'utilisateur') {
  //             this.test_correction_code = false
  //             this.form.controls['code'].enable();
  //             this.form.controls["code"].setValue("");

  //             this.ref_code.nativeElement.focus();

  //           }
  //           else {

  //             Swal.fire({
  //               text: 'Vérifier vos données',
  //               imageUrl: './../assets/images/panne.png',
  //               imageWidth: 400,
  //               imageHeight: 400,

  //             })
  //           }
  //         }
  //       });

  //     }

  //     //  test produit redandance
  //     else if (this.test_produit_redandance == true && this.test_code_produit == true && this.lancer_pb == false) {
  //       for (let cpt = 0; cpt < this.liste_des_codes.length; cpt++) {
  //         if (ch == this.liste_des_codes[cpt]) {
  //           this.test_redandance = true
  //         }
  //       }
  //       if (this.test_redandance) {
  //         Swal.fire({
  //           text: 'Redondance',
  //           icon: 'error',
  //         })
  //         this.form.controls['code'].enable();
  //         this.form.controls["code"].setValue("");
  //         this.ref_code.nativeElement.focus();
  //         this.lancer_pb = true
  //       }
  //       else {
  //         this.liste_des_codes.push(ch)

  //       }
  //     }


  //     // tous est bien ajouter data 
  //     if (this.test_code == true && this.test_redandance == false && this.lancer_pb == false) {

  //       this.value_code = this.form.get('code')?.value;
  //       this.liste_des_codes.push(ch)
  //       if (this.qte_dis_u == 1) {
  //         let n = this.nb;
  //         this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : 1";
  //         this.nb = 1;
  //         await this.delai(300);
  //         window.print()
  //         if (Number(this.nb) < Number(this.qte_dis_empa)) {
  //           this.nb = Number(n) + 1;
  //         }
  //         if ((Number(this.nb) % Number(this.qte_dis_empa)) == 0) {
  //           this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;
  //           await this.delai(300);
  //           window.print()
  //           this.nb = 0;
  //           this.nb_carton_10 = this.nb_carton_10 + 1
  //         }
  //       }
  //       else {
  //         if (Number(this.nb) < Number(this.qte_dis_empa)) {
  //           this.nb = Number(this.nb) + 1;
  //         }
  //         if ((Number(this.nb) % Number(this.qte_dis_empa)) == 0) {
  //           this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;

  //           await this.delai(200);
  //           window.print()
  //           this.nb = 0;
  //           this.nb_carton_10 = this.nb_carton_10 + 1
  //         }
  //       }

  //       this.save_data_of()
  //     }


  //   }
  // }


  // chercher produit 
  
  async chercher_produit(code: any) {
    let test = false;

    return false;
  }

  // message erreur code inconnu  et bloque app 
  erreur_produit_inconnu() {
    Swal.fire({
      icon: 'error',
      title: " Produit Inconnu  ",
      html:
        '<table>' +
        '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input" style="    margin-left: 16%;"    ></td></tr>' +
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      let test = this.a[2] || this.a[3]
      if (result.isConfirmed) {
        if (this.a[0] == 'utilisateur') {
          this.test_correction_code = false
          this.form.controls["code"].setValue("");
          this.form.controls['code'].enable();
          this.ref_code.nativeElement.focus();

        }
        else {
          Swal.fire({

            text: 'Vérifier vos données',
            imageUrl: './../assets/images/panne.png',
            imageWidth: 400,
            imageHeight: 400,

          })
        }
      }
    });
  }

  // message erreur Redondance  et bloque app 
  erreur_produit_Redondance() {
    Swal.fire({
      text: 'Redondance',
      icon: 'error',
    })
    this.form.controls['code'].enable();
    this.form.controls["code"].setValue("");
    this.ref_code.nativeElement.focus();
    this.lancer_pb = true
  }

  // message erreur si produit ne correspondance pas ovec le produit
  erreur_produit_correspondance_produit_of() {
    Swal.fire({
      icon: 'error',
      title: " l'ordre de fabrication et le code d'emballage ne correspondent pas  ",
      html:
        '<table>' +
        '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input" style="    margin-left: 16%;"    ></td></tr>' +
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      let test = this.a[2] || this.a[3]
      if (result.isConfirmed) {
        if (this.a[0] == 'utilisateur') {
          this.test_correction_code = false
          this.form.controls['code'].enable();
          this.form.controls["code"].setValue("");

          this.ref_code.nativeElement.focus();

        }
        else {

          Swal.fire({
            text: 'Vérifier vos données',
            imageUrl: './../assets/images/panne.png',
            imageWidth: 400,
            imageHeight: 400,

          })
        }
      }
    });

  }


  // taitement et lancement de l'impression 
  async traitement(ch: any) {
    this.value_code = this.form.get('code')?.value;
    if (this.qte_dis_u == 1) {
      let n = this.nb;
      this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : 1";
      this.nb = 1;
      await this.delai(300);
      window.print()
      if (Number(this.nb) < Number(this.qte_dis_empa)) {
        this.nb = Number(n) + 1;
      }
      if ((Number(this.nb) % Number(this.qte_dis_empa)) == 0) {
        this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;
        await this.delai(300);
        window.print()
        this.nb = 0;
        this.nb_carton_10 = this.nb_carton_10 + 1
      }
    }
    else {
      if (Number(this.nb) < Number(this.qte_dis_empa)) {
        this.nb = Number(this.nb) + 1;
      }
      if ((Number(this.nb) % Number(this.qte_dis_empa)) == 0) {
        this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;

        await this.delai(200);
        window.print()
        this.nb = 0;
        this.nb_carton_10 = this.nb_carton_10 + 1
      }
    }
    this.code_a_barre_en_attente=null;
    this.form.controls["code"].setValue("");
    this.save_data_of()
  }



  correction_code() {
    Swal.fire({
      icon: 'error',
      title: " Code ",
      html:
        '<table>' +
        '<tr> <td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input"   style="    margin-left: 16%;" ></td></tr>' +
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      let test = this.a[2] || this.a[3]
      if (result.isConfirmed) {
        if (this.a[0] == 'utilisateur') {
          this.test_correction_code = false
          this.form.controls['code'].enable();
          this.form.controls["code"].setValue("");
          this.ref_code.nativeElement.focus();
        }
        else {
          Swal.fire({

            text: 'Vérifier vos données',
            imageUrl: './../assets/images/panne.png',
            imageWidth: 400,
            imageHeight: 400,

          })
        }
      }
    });

  }


  // temps d'attente pour le traitement de fonction 
  delai(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Enregistrer les données de of pour la prochaine étape 
  save_data_of() {
    let i = -1;
    for (let j = 0; j < this.historique_of.length; j++) {
      if (this.historique_of[j].of == this.form.get('of')?.value) {
        i = j;
       }
    }
    if (i > -1) {
      this.historique_of[i].nb = this.nb;
      this.historique_of[i].nb_carton_10 = this.nb_carton_10;
      this.historique_of[i].nb_carton_100 = this.nb_carton_100;
      this.historique_of[i].nb_carton_10_controle_100 = this.nb_carton_10_controle_100;
      this.historique_of[i].nb_print_carton_10 = this.nb_print_carton_10
      this.historique_of[i].nb_print_carton_100 = this.nb_print_carton_100
      localStorage.setItem('historique_of_dis', JSON.stringify(this.historique_of));
    }
  }

  // traitement sur agent 
  test_agent: any = false;
  nom_agent: any = ""
  set_agent(event: any) {
    if (event.key == "Enter") {
      let v = this.form.get('agent')?.value
      this.test_agent = false
      for (let i = 0; i < this.liste_agent.length; i++) {
        if (this.liste_agent[i].matricule == v) {
          this.nom_agent
          this.test_agent = true;
          this.nom_agent = this.liste_agent[i].nom
          this.lock();
          this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : *";
          Swal.fire({
            icon: 'success',
            title: 'agent',
            showConfirmButton: false,
            timer: 1000
          })
          if (this.test_of) {
            this.ref_code.nativeElement.focus();
          }
          else {
            this.ref_of.nativeElement.focus();
            this.form.controls['agent'].disable();

          }

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
    ///// lina code 
    this.form.controls['code'].enable();

    if (this.form.get('of')?.value == "" || this.form.get('agent')?.value == "" || this.test_agent == false || this.test_of == false) {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'ordre de fabrication ou agent manquant ',
      })
    }
    else {

      if (this.btnlock == false) {
        this.btnlock = true
        this.form.controls['of'].disable();
        this.form.controls['agent'].disable();
        this.form.controls['code'].enable();
      } else {

        Swal.fire({
          title: " Changer l'ordre de fabrication  ",
          html:
            '<table>' +
            '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input"  margin-left: 16%;" ></td></tr>' +
            '</table>',
          focusConfirm: false,
          preConfirm: () => {
            return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
            ]
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          this.a = result.value

          let test = this.a[2] || this.a[3]
          if (result.isConfirmed) {
            if (this.a[0] == 'utilisateur') {
              this.btnlock = false
              this.form.controls['of'].enable();
              this.form.controls['agent'].enable();
              this.form.controls['code'].disable();
            }
            else {
              Swal.fire({
                title: 'Erreur ',
                text: 'Vérifier vos données  ',
                icon: 'warning',
                confirmButtonText: 'ok',
              })
            }
          }
        });
      }
    }
  }


  // Parametre de code a barre  
  width: any = 2;
  height: any = 21;
  width_qr: any = 90;
  async slodee() {
    Swal.fire({
      title: " soldé  l'ordre de fabrication  ",
      html:
        '<table>' +
        '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input"   margin-left: 16%;" ></td></tr>' +
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value

      let test = this.a[2] || this.a[3]
      if (result.isConfirmed) {
        if (this.a[0] == 'utilisateur') {
          this.liste_of[this.index_ordre_fabrication].etat = "soldé"
          localStorage.setItem('liste_of_dis', JSON.stringify(this.liste_of));
          this.router.navigate(['/']);
        }
        else {
          Swal.fire({
            title: 'Erreur ',
            text: 'Vérifier vos données  ',
            icon: 'warning',
            confirmButtonText: 'ok',
          })
        }
      }
    });

  }

  async imprimer_slodee() {
    Swal.fire({
      title: " soldé l'ordre de fabrication  ",
      html:
        '<table>' +
        '<tr><td>Code </td><td> <input type="password" id="swal-input1" value="" class="swal2-input"   margin-left: 16%;" ></td></tr>' +
        '</table>',
      focusConfirm: false,
      preConfirm: () => {
        return [(<HTMLInputElement>document.getElementById('swal-input1')).value,
        ]
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      this.a = result.value
      let test = this.a[2] || this.a[3]
      if (result.isConfirmed) {
        if (this.a[0] == 'utilisateur') {
          this.imprimer_slodee_traitement()
        }
        else {
          Swal.fire({
            title: 'Erreur ',
            text: 'Vérifier vos données  ',
            icon: 'warning',
            confirmButtonText: 'ok',
          })
        }
      }
    });
  }

  async imprimer_slodee_traitement() {

    if (this.nb > 0) {
      this.info = "OF : " + this.form.get('of')?.value + " ,agent: " + this.form.get('agent')?.value + ",Date : " + new Date().toLocaleString() + " , Qte : " + this.nb;
      await this.delai(400);
      window.print()
      this.liste_of[this.index_ordre_fabrication].etat = "soldé"
      localStorage.setItem('liste_of_dis', JSON.stringify(this.liste_of));
      this.router.navigate(['/']);
    }
    else if (this.nb == 0) {
      Swal.fire({
        title: 'Erreur ',
        icon: 'warning',
        confirmButtonText: 'ok',
      })
    }
  }

  reset() {
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
        this.val_resume = "";
        this.val_des = "";
        this.val_gamme = "";
        this.val_qte_reg = "";
        this.nb = 0
        this.nb_carton_10 = 0
        this.nb_carton_100 = 0
        this.nb_carton_10_controle_100 = 0
        this.nb_print_carton_10 = 0
        this.nb_print_carton_100 = 0

        Swal.fire(
          'Réinitialiser!',
          ' ',
          'success'
        )
      }
    })
  }

  sup_agent() {
    this.form.controls["agent"].setValue("");

  }


  sup_code() {
    this.form.controls["code"].setValue("");

  }

  sup_of() {
    this.form.controls["of"].setValue("");
  }

  correction ()
  {
    let x  =  Number (this.liste_des_codes.length - this.nb) 
    for (let i =  this.liste_des_codes.length ; i > x-1 ; i--)
    {
      this.liste_des_codes.splice(i,1)
    }
    this.nb=0

  }

}
