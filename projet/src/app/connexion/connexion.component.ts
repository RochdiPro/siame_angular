import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
 import { FileOpener } from '@ionic-native/file-opener/ngx';



import { Platform } from '@angular/cdk/platform';
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file/ngx';

import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  cnx: FormGroup;
  value = '';
  cercle: any = false;
  connecter: any = false;

  infonet: any = {};

  constructor( private file: File, private plt: Platform, private fileOpener: FileOpener, private printer: Printer, private fb: FormBuilder, private router: Router, private datePipe: DatePipe) {
    this.cnx = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      pwd: ['', Validators.required],
    });
  }

  action: any = {} 
  pdfObj: any;
  res: any; 
  connexion() {
    this.cercle = true;

    if (this.cnx.get("id")?.value == "infonet_admin") {
      this.infonet.role = "admin";
      this.infonet.nom = "admin";
      localStorage.setItem('User', JSON.stringify(this.infonet));
      localStorage.setItem('session', JSON.stringify(this.infonet));
      this.router.navigate(['/menu/accueil']);
      this.connecter = true;

    }
   

    setTimeout(() => {
      if (this.connecter == false) {
        Swal.fire({
          icon: 'error',
          title: " échec de connexion",
          text: 'veuillez vérifier la connexion',
        })
      }
      this.cercle = false;

    },
      5000);
  }

  ngOnInit(): void {
  }


   pdf()
   {

   }
   
  
   write(){
    const writeSecretFile = async () => {
      await Filesystem.writeFile({
        path: 'secrets/text.txt',
        data: "This is a test",
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    };
    Swal.fire({
      icon: 'error',
      title: "   ",
      text: 'wrie'+writeSecretFile,
    })
}
  read(){
    const readSecretFile = async () => {
      const contents = await Filesystem.readFile({
        path: 'secrets/text.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    
      console.log('secrets:', contents);
    };
}
  

}