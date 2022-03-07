import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  liste_produit:any=[] ;
  liste_agent:any=[] ;
  liste_of:any=[] ;
  constructor() { 
   
 

    this.liste_produit =  JSON.parse(   localStorage.getItem('liste_produit')+"") ;
    this.liste_agent = JSON.parse(  localStorage.getItem('liste_agent' )+"") ;
    this.liste_of =  JSON.parse( localStorage.getItem('liste_of')+"") ;

  }

  ngOnInit(): void {
  }
  ch:any;

  public readof(ev: any): void {
    let file = ev.target.files[0]  ;
    let fileReader: FileReader = new FileReader();
    let self = this;
   
    fileReader.onloadend = () => { 
      this.ch=fileReader.result
      let t = this.ch.split('\n');
      this.liste_of =[]
    
      for(let i = 1 ; i <t.length; i++)
      { 
        let t2 = t[i].split(",");
        
        this.obj={} 
        this.obj.code=t2[0]

      
        if(this.obj.code!=undefined ||this.obj.code !=" " )
        {
          this.liste_of.push(this.obj) 
        }
      }
      localStorage.setItem('liste_of', JSON.stringify(this.liste_of));

      } 
    fileReader.readAsText(file);
  }
  obj:any={}
  o:any;
  public readproduit(ev: any): void {
    let file = ev.target.files[0]  ;
    let fileReader: FileReader = new FileReader();
    let self = this;
   
    fileReader.onloadend = () => { 
      this.ch=fileReader.result
      let t = this.ch.split('\n');
      this.liste_produit=[]
      for(let i = 1 ; i <t.length; i++)
      { 
         let t2 = t[i].split(",");
         this.obj={}
        this.obj.code=t2[0]
        this.obj.des=t2[1]  
        if(this.obj.code!=undefined)
        {
          this.liste_produit.push(this.obj) 
        }
      }
      localStorage.setItem('liste_produit', JSON.stringify(this.liste_produit));

      } 
    fileReader.readAsText(file);
  }
  public readagent(ev: any): void {
    let file = ev.target.files[0]  ;
    let fileReader: FileReader = new FileReader();
    let self = this;
   
    fileReader.onloadend = () => { 
      this.ch=fileReader.result
      let t = this.ch.split('\n');
      this.liste_agent=[]
      for(let i = 1 ; i <t.length; i++)
      { 
        let t2 = t[i].split(",");
         this.obj={}
        this.obj.code=t2[0]
        this.obj.mot_de_passe=t2[1]  
        this.obj.nom=t2[2].split("\r")[0];  
        if(this.obj.code!=undefined ||this.obj.code !="" )
        {
          this.liste_agent.push(this.obj) 
        }
      }
      localStorage.setItem('liste_agent', JSON.stringify(this.liste_agent));

      } 
    fileReader.readAsText(file);
  }
}
