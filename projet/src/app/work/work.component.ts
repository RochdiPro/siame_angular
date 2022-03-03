import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }
  form: any = new FormGroup({
    id: new FormControl(""),
    nom: new FormControl(""),
    code: new FormControl(""),
    categorie: new FormControl(""),
    unite: new FormControl(""),
  });
  nb:any=0;

  ngOnInit(): void {
  }
  value:any="test"
  filtre()
  {
    this.value= this.form.get('nom')?.value;
    this.nb= Number(this.nb)+1;
  }
}
