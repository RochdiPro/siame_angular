(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{y5Rq:function(t,e,a){"use strict";a.r(e),a.d(e,"ListerModule",function(){return K});var i=a("SVse"),o=a("iInd"),r=a("s7LF"),l=a("M9IT"),n=a("Dh3D"),c=a("+0xr"),s=a("PSD3"),d=a.n(s),u=a("8Y7J"),m=a("bAEo"),b=a("kmnG"),h=a("d3UM"),f=a("FKr1"),p=a("qFsG"),g=a("uM5D"),C=a("iadO");function x(t,e){1&t&&(u.Tb(0,"mat-error"),u.Cc(1," Date facture "),u.Sb())}function S(t,e){1&t&&(u.Tb(0,"mat-error"),u.Cc(1," Date "),u.Sb())}function _(t,e){1&t&&u.Ob(0,"mat-header-cell")}function v(t,e){if(1&t){const t=u.Ub();u.Tb(0,"mat-cell",37),u.Tb(1,"i",38),u.ac("click",function(){u.sc(t);const a=e.$implicit;return u.ec().edit(a.id,a.etat)}),u.Sb(),u.Sb()}}function y(t,e){1&t&&(u.Tb(0,"mat-header-cell",39),u.Cc(1," Type "),u.Sb())}function P(t,e){if(1&t&&(u.Tb(0,"mat-cell",40),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.type,"")}}function T(t,e){1&t&&(u.Tb(0,"mat-header-cell",39),u.Cc(1," id "),u.Sb())}function w(t,e){if(1&t&&(u.Tb(0,"mat-cell",40),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.id,"")}}function k(t,e){1&t&&(u.Tb(0,"mat-header-cell",39),u.Cc(1," Utilisateur "),u.Sb())}function D(t,e){if(1&t&&(u.Tb(0,"mat-cell"),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.id_Utilisateur.nom," ")}}function M(t,e){1&t&&(u.Tb(0,"mat-header-cell",39),u.Cc(1," Etat "),u.Sb())}function O(t,e){if(1&t&&(u.Tb(0,"mat-cell",41),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.etat," ")}}function A(t,e){1&t&&(u.Tb(0,"mat-header-cell",39),u.Cc(1," Total "),u.Sb())}function F(t,e){if(1&t&&(u.Tb(0,"mat-cell",41),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.total," ")}}function z(t,e){1&t&&u.Ob(0,"mat-header-cell")}function N(t,e){if(1&t){const t=u.Ub();u.Tb(0,"mat-cell",37),u.Tb(1,"i",42),u.ac("click",function(){u.sc(t);const a=e.$implicit;return u.ec().pdf(a.id)}),u.Sb(),u.Sb()}}function R(t,e){1&t&&u.Ob(0,"mat-header-row")}function j(t,e){1&t&&u.Ob(0,"mat-row")}const I=function(){return[10,50,100]},Q=a("5JmO"),E=a("TruH");Q.vfs=E.pdfMake.vfs;const H=[{path:"",component:(()=>{class t{constructor(t,e,a){this.service=t,this.datePipe=e,this.router=a,this.displayedColumns=["modifier","type","id","utilisateur","etat","total","sup"],this.etat="",this.dataSource=new c.k,this.paginator=l.a,this.sort=n.a,this.form=new r.f({id:new r.d(""),type:new r.d(""),etat:new r.d(""),fournisseur:new r.d(""),date:new r.d(""),date_facture:new r.d("")}),this.liste_produits=[],this.achats()}achats(){this.service.achats().subscribe(t=>{for(let e=0;e<t.length;e++)t[e].total=Number(t[e].total).toFixed(3);this.dataSource.data=t,this.liste_produit=t,this.liste_produit=this.liste_produit.sort((t,e)=>t.id>e.id?-1:1),this.dataSource.data=t,this.liste_produit.paginator=this.paginator})}choix(t){this.user=t.value,this.filtre()}choix_etat(t){this.etat=t.value,this.filtre()}choix_type(t){this.type=t.value,this.filtre()}pdf(t){this.service.achat(t).subscribe(t=>{this.fournisseur=t.fournisseur,this.type_achat=t.type,this.id_facture=t.id_Fournisseur,this.date_facture=this.datePipe.transform(t.date_Facture,"yyyy-MM-dd")}),this.service.Detail_achat(t).subscribe(t=>{const e=new FileReader;e.onloadend=()=>{let t;if(this.Detail=e.result,(0,a("CDzl").parseString)(atob(this.Detail.substr(28)),function(e,a){t=a.Achat}),this.xmldata=t,null!=this.xmldata.Produits[0].Produit)for(let e=0;e<this.xmldata.Produits[0].Produit.length;e++)this.objxml={},this.objxml.id=this.xmldata.Produits[0].Produit[e].Id.toString(),this.objxml.qte=this.xmldata.Produits[0].Produit[e].Qte.toString(),this.objxml.nom=this.xmldata.Produits[0].Produit[e].Nom.toString(),this.objxml.prix=Number(this.xmldata.Produits[0].Produit[e].prix_u_ht.toString()).toFixed(3),this.objxml.prix_ttc=Number(this.xmldata.Produits[0].Produit[e].prix_ttc.toString()).toFixed(3),this.objxml.total_ttc=Number(this.xmldata.Produits[0].Produit[e].total_ttc.toString()).toFixed(3),this.objxml.code=this.xmldata.Produits[0].Produit[e].code.toString(),this.objxml.tva=this.xmldata.Produits[0].Produit[e].tva.toString(),this.liste_produits.push(this.objxml);this.generatePDF()},e.readAsDataURL(t)})}generatePDF(){var t=[];(e=new Array).push("Id"),e.push("Nom"),e.push("Qte"),e.push("Prix U HT"),e.push("%TVA"),e.push("Prix U ttc"),e.push("Total TTC"),t.push(e);for(let i=0;i<this.liste_produits.length;i++){var e;(e=new Array).push(this.liste_produits[i].id),e.push(this.liste_produits[i].nom),e.push(this.liste_produits[i].qte),e.push(this.liste_produits[i].prix),e.push(this.liste_produits[i].tva),e.push(this.liste_produits[i].prix_ttc),e.push(this.liste_produits[i].total_ttc),t.push(e)}console.log(this.liste_produits),console.log(t);var a={defaultStyle:{},pageMargins:[40,100,40,180],info:{title:"achat"},footer:function(t,e){return{margin:35,columns:[{fontSize:9,text:[{text:t.toString()+"/"+e}],relativePosition:{x:250,y:130}}]}},header:[{text:"Achat",fontSize:18,color:"black",bold:!0,relativePosition:{x:250,y:20}},{text:"Total : 55 DT    ",fontSize:10,color:"black",relativePosition:{x:440,y:60}},{text:""+this.datePipe.transform(new Date,"dd/MM/yyyy"),fontSize:6,color:"black",bold:!0,relativePosition:{x:520,y:10}},{text:"Fournisseur : "+this.fournisseur,fontSize:10,color:"black",relativePosition:{x:70,y:60}},{text:" Id_facture : "+this.id_facture,fontSize:10,color:"black",relativePosition:{x:70,y:80}},{text:" Date : "+this.datePipe.transform(this.date_facture,"dd/MM/yyyy"),fontSize:10,color:"black",relativePosition:{x:70,y:100}}],content:[{table:{widths:[40,170,30,50,27,50,50],body:t},fontSize:10,margin:[10,40,10,300]}]};Q.createPdf(a).open({defaultFileName:"achat"+new Date+".pdf"})}ngOnInit(){}edit(t,e){console.log(e),"en cours"==e?this.router.navigate(["/menu/achat/"+t]):d.a.fire({icon:"error",title:"",text:"vous n'avez pas le droit de modifier un achat d\xe9j\xe0 affect\xe9"})}filtre(){var t,e,a,i,o,r,l,n,c;null==this.type&&(this.type=""),null==this.etat&&(this.etat=""),this.filtre_date=null==(null===(t=this.form.get("date"))||void 0===t?void 0:t.value)||null==(null===(e=this.form.get("date"))||void 0===e?void 0:e.value)||""==(null===(a=this.form.get("date"))||void 0===a?void 0:a.value)?"":this.datePipe.transform(null===(i=this.form.get("date"))||void 0===i?void 0:i.value,"yyyy-MM-dd"),this.filtre_date2=null==(null===(o=this.form.get("date_facture"))||void 0===o?void 0:o.value)||null==(null===(r=this.form.get("date_facture"))||void 0===r?void 0:r.value)||""==(null===(l=this.form.get("date_facture"))||void 0===l?void 0:l.value)?"":this.datePipe.transform(null===(n=this.form.get("date_facture"))||void 0===n?void 0:n.value,"yyyy-MM-dd"),this.service.filtre_achat("date",this.filtre_date,"date_facture",this.filtre_date2,"type",this.type,"fournisseur",null===(c=this.form.get("fournisseur"))||void 0===c?void 0:c.value,"etat",this.etat).subscribe(t=>{for(let e=0;e<t.length;e++)t[e].total=Number(t[e].total).toFixed(3);this.dataSource.data=t,this.liste_produit=t,this.liste_produit=this.liste_produit.sort((t,e)=>t.id>e.id?-1:1),this.dataSource.data=t,this.liste_produit.paginator=this.paginator})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(m.a),u.Nb(i.e),u.Nb(o.b))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-lister"]],viewQuery:function(t,e){if(1&t&&(u.Gc(l.a,!0),u.Gc(n.a,!0)),2&t){let t;u.oc(t=u.bc())&&(e.paginator=t.first),u.oc(t=u.bc())&&(e.sort=t.first)}},decls:68,vars:13,consts:[[2,"text-align","center","margin-top","3%","margin-bottom","6%","text-shadow","2px 4px 3px rgba(0,0,0,0.3)","font-size","600%"],[1,"position-relative","custom-control"],[3,"formGroup"],[2,"width","13%","margin-left","2%"],["formControlName","type","aria-placeholder"," ",3,"selectionChange"],["value","re\xe7u"],["value","bl"],["value","facture"],["formControlName","etat","aria-placeholder"," ",3,"selectionChange"],["value","en cours"],["value","Affecter"],[2,"margin-left","2%","width","13%"],["matInput","","placeholder","fournisseur","formControlName","fournisseur",3,"matKeyboard","keyup"],["matInput","","formControlName","date_facture",3,"matDatepicker","dateChange"],["matSuffix","",3,"for"],["picker1",""],[4,"ngIf"],["matInput","","formControlName","date",3,"matDatepicker","dateChange"],["picker2",""],[1,"mat-elevation-z8",2,"height","500px","overflow-y","scroll"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","modifier"],[4,"matHeaderCellDef"],["style","text-align: center;","data-label"," ",4,"matCellDef"],["matColumnDef","type"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","id",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","utilisateur"],[4,"matCellDef"],["matColumnDef","etat"],["data-label","role",4,"matCellDef"],["matColumnDef","total"],["matColumnDef","sup"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["data-label"," ",2,"text-align","center"],["title","edit  ",1,"pe-7s-pen",3,"click"],["mat-sort-header",""],["data-label","id"],["data-label","role"],["title","pdf",1,"pe-7s-print",2,"color","red","margin-left","15px",3,"click"]],template:function(t,e){if(1&t&&(u.Tb(0,"h1",0),u.Cc(1," Achats"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"section",2),u.Tb(4,"mat-form-field",3),u.Tb(5,"mat-label"),u.Cc(6," Type "),u.Sb(),u.Tb(7,"mat-select",4),u.ac("selectionChange",function(t){return e.choix_type(t)}),u.Tb(8,"mat-option",5),u.Cc(9," Re\xe7u "),u.Sb(),u.Tb(10,"mat-option",6),u.Cc(11," BL"),u.Sb(),u.Tb(12,"mat-option",7),u.Cc(13," Facture"),u.Sb(),u.Sb(),u.Sb(),u.Tb(14,"mat-form-field",3),u.Tb(15,"mat-label"),u.Cc(16," Etat "),u.Sb(),u.Tb(17,"mat-select",8),u.ac("selectionChange",function(t){return e.choix_etat(t)}),u.Tb(18,"mat-option",9),u.Cc(19," En cours"),u.Sb(),u.Tb(20,"mat-option",10),u.Cc(21," Affecter "),u.Sb(),u.Sb(),u.Sb(),u.Tb(22,"mat-form-field",11),u.Tb(23,"mat-label"),u.Cc(24," Fournisseur "),u.Sb(),u.Tb(25,"input",12),u.ac("keyup",function(){return e.filtre()}),u.Sb(),u.Sb(),u.Tb(26,"mat-form-field",11),u.Tb(27,"mat-label"),u.Cc(28," Date Facture"),u.Sb(),u.Tb(29,"input",13),u.ac("dateChange",function(){return e.filtre()}),u.Sb(),u.Ob(30,"mat-datepicker-toggle",14),u.Ob(31,"mat-datepicker",null,15),u.Ac(33,x,2,0,"mat-error",16),u.Sb(),u.Tb(34,"mat-form-field",11),u.Tb(35,"mat-label"),u.Cc(36," Date "),u.Sb(),u.Tb(37,"input",17),u.ac("dateChange",function(){return e.filtre()}),u.Sb(),u.Ob(38,"mat-datepicker-toggle",14),u.Ob(39,"mat-datepicker",null,18),u.Ac(41,S,2,0,"mat-error",16),u.Sb(),u.Sb(),u.Sb(),u.Tb(42,"div",19),u.Tb(43,"table",20),u.Rb(44,21),u.Ac(45,_,1,0,"mat-header-cell",22),u.Ac(46,v,2,0,"mat-cell",23),u.Qb(),u.Rb(47,24),u.Ac(48,y,2,0,"mat-header-cell",25),u.Ac(49,P,2,1,"mat-cell",26),u.Qb(),u.Rb(50,27),u.Ac(51,T,2,0,"mat-header-cell",25),u.Ac(52,w,2,1,"mat-cell",26),u.Qb(),u.Rb(53,28),u.Ac(54,k,2,0,"mat-header-cell",25),u.Ac(55,D,2,1,"mat-cell",29),u.Qb(),u.Rb(56,30),u.Ac(57,M,2,0,"mat-header-cell",25),u.Ac(58,O,2,1,"mat-cell",31),u.Qb(),u.Rb(59,32),u.Ac(60,A,2,0,"mat-header-cell",25),u.Ac(61,F,2,1,"mat-cell",31),u.Qb(),u.Rb(62,33),u.Ac(63,z,1,0,"mat-header-cell",22),u.Ac(64,N,2,0,"mat-cell",23),u.Qb(),u.Ac(65,R,1,0,"mat-header-row",34),u.Ac(66,j,1,0,"mat-row",35),u.Sb(),u.Ob(67,"mat-paginator",36),u.Sb()),2&t){const t=u.pc(32),a=u.pc(40);u.Cb(3),u.kc("formGroup",e.form),u.Cb(22),u.kc("matKeyboard","de-CH"),u.Cb(4),u.kc("matDatepicker",t),u.Cb(1),u.kc("for",t),u.Cb(3),u.kc("ngIf",e.form.get("date_facture").invalid),u.Cb(4),u.kc("matDatepicker",a),u.Cb(1),u.kc("for",a),u.Cb(3),u.kc("ngIf",e.form.get("date").invalid),u.Cb(2),u.kc("dataSource",e.dataSource),u.Cb(22),u.kc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.kc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.kc("pageSizeOptions",u.nc(12,I))}},directives:[r.m,r.g,b.c,b.f,h.a,r.l,r.e,f.j,p.b,r.b,g.a,C.b,C.d,b.g,C.a,i.l,c.j,n.a,c.c,c.e,c.b,c.g,c.i,l.a,b.b,c.d,c.a,n.b,c.f,c.h],styles:["table[_ngcontent-%COMP%]{width:100%;overflow-x:scroll!important}.mat-column-id[_ngcontent-%COMP%]{width:100%;text-align:center}@media only screen and (max-width:768px){.mat-table[_ngcontent-%COMP%]{border:0;vertical-align:middle}.mat-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1em}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{border-bottom:5px solid #ddd;display:block;min-height:auto}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;display:block;font-size:1em;text-align:right;font-weight:700;height:auto;margin-bottom:4%;padding-right:5%;padding-bottom:4%}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;text-transform:uppercase;font-weight:400;margin-left:5%;font-size:.85em}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-child{border-bottom:0}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child{margin-top:4%}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-of-type{padding-right:5%}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mat-table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{border:10px solid;clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px}.mat-header-row[_ngcontent-%COMP%]{min-height:0}}"]}),t})()}];let U=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(H)],o.e]}),t})();var G=a("Wp6s"),L=a("bv9b"),$=a("0IaG");let K=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[i.c,U,b.e,p.c,h.b,b.e,G.a,r.r,l.b,c.l,n.c,L.b,r.h,g.b,$.e,C.c,f.i,g.b]]}),t})()}}]);