(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{bAEo:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var s=r("LRne"),i=r("JIr8"),p=r("8Y7J"),o=r("IheW");const a="http://192.168.1.22:3333/";let n=(()=>{class e{constructor(e){this.http=e}categories(){return this.http.get(a+"Categories",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}unites(){return this.http.get(a+"Unites",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}imprimantes(){return this.http.get(a+"Imprimantes",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}balances(){return this.http.get(a+"Balances",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}balance(e){return this.http.get(a+"Balance",{params:{Id:e},observe:"body"}).pipe()}caisse(e){return this.http.get(a+"Caisse",{params:{Id:e},observe:"body"}).pipe()}imprimante(e){return this.http.get(a+"Imprimante",{params:{Id:e},observe:"body"}).pipe()}caisses(){return this.http.get(a+"Caisses",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}Produits(){return this.http.get(a+"Produits",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}produit_code_barre(e){return this.http.get(a+"Produit_Par_Code_Barre",{params:{Code:e},observe:"body"}).pipe()}supprimer_produit(e){return this.http.delete(a+"Supprimer_Produit/",{params:{Id_Produit:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}produit(e){return this.http.get(a+"Produit",{params:{Id_Produit:e},observe:"body"}).pipe()}unite(e){return this.http.get(a+"Unite",{params:{Id:e},observe:"body"}).pipe()}utilisateurs(){return this.http.get(a+"Utilisateurs",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}achats(){return this.http.get(a+"Achats",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}achat(e){return this.http.get(a+"Achat",{params:{Id:e},observe:"body"}).pipe()}ajouter_unite(e){return this.http.post(a+"/Creer_Unite",e)}ajouter_imprimante(e){return this.http.post(a+"/Creer_Imprimante",e)}ajouter_balance(e){return this.http.post(a+"/Creer_Balance",e)}ajouter_caisse(e){return this.http.post(a+"/Creer_Caisse",e)}modifier_unite(e){return this.http.post(a+"Modifier_Unite",e)}modifier_caisse(e){return this.http.post(a+"Modifier_Caisse",e)}modifier_balance(e){return this.http.post(a+"Modifier_Balance",e)}modifier_imprimante(e){return this.http.post(a+"Modifier_Imprimante",e)}supprimer_unite(e){return this.http.delete(a+"Supprimer_Unite/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}supprimer_caisse(e){return this.http.delete(a+"Supprimer_Caisse/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}supprimer_balance(e){return this.http.delete(a+"Supprimer_Balance/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}supprimer_imprimante(e){return this.http.delete(a+"Supprimer_Imprimante/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}supprimer_achat(e){return this.http.delete(a+"Supprimer_Achat/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}ajouter_categorie(e){return this.http.post(a+"/Creer_Categorie",e)}ajouter_utilisateur(e){return this.http.post(a+"/Creer_Utilisateur",e)}supprimer_utilisateur(e){return this.http.delete(a+"Supprimer_Utilisateur/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}modifier_utilisateur(e){return this.http.post(a+"Modifier_Utilisateur",e)}utilisateur(e){return this.http.get(a+"Utilisateur",{params:{Id:e},observe:"body"}).pipe()}modifier_categorie(e){return this.http.post(a+"Modifier_Categorie",e)}supprimer_categorie(e){return this.http.delete(a+"Supprimer_Categorie/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}ajouter_produit(e){return this.http.post(a+"/Creer_Produit",e)}modifier_produit(e){return this.http.post(a+"/Modifier_Produit_Struct",e)}modifier_prix(e){return this.http.post(a+"Modifier_Prix",e)}filtre_produit(e,t,r,s,i,p,o,n,h,u){return this.http.get(a+"Filtre_Produit",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p,Champ4:o,Valeur4:n,Champ5:h,Valeur5:u},observe:"body"}).pipe()}filtre_utilisateur(e,t,r,s,i,p){return this.http.get(a+"Filtre_Utilisateur",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p},observe:"body"}).pipe()}filtre_achat(e,t,r,s,i,p,o,n,h,u){return this.http.get(a+"Filtre_Achat",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p,Champ4:o,Valeur4:n,Champ5:h,Valeur5:u},observe:"body"}).pipe()}ajouter_achat(e){return this.http.post(a+"/Creer_Achat",e)}modifier_achat(e){return this.http.post(a+"/Modifier_Achat",e)}valider_achat(e){return this.http.get(a+"Entree",{params:{Id:e},observe:"body"}).pipe()}Detail_achat(e){return this.http.get(a+"Detail_Achat/",{params:{Id:e},responseType:"blob"}).pipe(Object(i.a)(this.handleError()))}image_produit(e){return this.http.get(a+"Produit_Image/",{params:{Id_Produit:e},responseType:"blob"}).pipe(Object(i.a)(this.handleError()))}connexion(e,t){return this.http.get(a+"Connexion_Utilisateur",{params:{Identifiant:e,Mot_de_passe:t},observe:"body"}).pipe()}tvas(){return this.http.get(a+"Tvas",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}ajouter_tva(e){return this.http.post(a+"/Creer_Tva",e)}supprimer_tva(e){return this.http.delete(a+"Supprimer_Tva/",{params:{Id:e},observe:"response"}).toPromise().then(e=>{console.log()}).catch(console.log)}ajouter_vente(e){return this.http.post(a+"/Creer_Vente",e)}modifier_vente(e){return this.http.post(a+"/Modifier_Vente",e)}Detail_vente(e){return this.http.get(a+"Detail_Vente/",{params:{Id:e},responseType:"blob"}).pipe(Object(i.a)(this.handleError()))}valider_vente(e){return this.http.get(a+"Sortie_Vente",{params:{Id:e},observe:"body"}).pipe()}ventes(){return this.http.get(a+"Ventes",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}vente(e){return this.http.get(a+"Vente",{params:{Id:e},observe:"body"}).pipe()}Session_Caisses(){return this.http.get(a+"Session_Caisses",{observe:"body"}).pipe(Object(i.a)(this.handleError()))}modifier_Session_Caisses(e){return this.http.post(a+"/Modifier_Session_Caisse",e)}ajouter_Session_Caisses(e){return this.http.post(a+"/Creer_Session_Caisse",e)}facturation(e){return this.http.post(a+"/Facture_Vente",e)}abondonner(e){return this.http.get(a+"Abondoner_Vente",{params:{Id:e},observe:"body"}).pipe()}fermer_Session_Caisses(e){return this.http.post(a+"/Fermer_Session_Caisse",e)}fermer_tous_Session_Caisses(e){var t=new FormData;return t.append("Utilisateur",e),this.http.post(a+"Fermer_Tous_Session",t)}Ajouter_solde_Session_Caisses(e){return this.http.post(a+"/Solde_Session_Caisse",e)}filtre_vente(e,t,r,s,i,p,o,n){return this.http.get(a+"Filtre_Vente",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p,Champ4:o,Valeur4:n},observe:"body"}).pipe()}filtre_vente_facture(e,t,r,s,i,p,o,n){return this.http.get(a+"Filtre_Vente_Facture",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p,Champ4:o,Valeur4:n},observe:"body"}).pipe()}filtre_session(e,t,r,s,i,p,o,n){return this.http.get(a+"Filtre_Session_Caisse",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p,Champ4:o,Valeur4:n},observe:"body"}).pipe()}session_par_caisse(e,t,r,s){return this.http.get(a+"Session_Par_Caisse",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s},observe:"body"}).pipe()}imprimer(e,t){return this.http.get(a+"Imprime_ticket",{params:{Id:e,Caisse:t},observe:"body"}).pipe()}vente_utilisateur(){return this.http.get(a+"Vente_Utilisateur",{observe:"body"}).pipe()}vente_mois(){return this.http.get(a+"Vente_Mois",{observe:"body"}).pipe()}vente_annee(){return this.http.get(a+"Vente_Annee",{observe:"body"}).pipe()}get_vente_anne(e){return this.http.get(a+"Vente_Mois_Annee",{params:{Id:e},observe:"body"}).pipe()}get_utilisateur_annee(e){return this.http.get(a+"Vente_Utilisateur_Annee",{params:{Id:e},observe:"body"}).pipe()}mettre_a_jour(){return this.http.post(a+"Mettre_a_jour",{observe:"body"}).pipe()}get_somme_ticket_non_facture(){return this.http.post(a+"Get_Somme_Facture",{observe:"body"}).pipe()}Facturation(){return this.http.post(a+"Facturation",{observe:"body"}).pipe()}factures(){return this.http.get(a+"Factures",{observe:"body"}).pipe()}facture(e){return this.http.get(a+"Facture",{params:{Id:e},observe:"body"}).pipe()}groupe_facture_ticket(e){return this.http.get(a+"groupe_facture_ticket",{params:{Id:e},observe:"body"}).pipe()}Init_Utilisateur(){return this.http.post(a+"Init_Utilisateur",{observe:"body"}).pipe()}execice(e){return this.http.post(a+"/Exercice",e)}filtre_facture(e,t,r,s,i,p){return this.http.get(a+"Filtre_Facture",{params:{Champ1:e,Valeur1:t,Champ2:r,Valeur2:s,Champ3:i,Valeur3:p},observe:"body"}).pipe()}importer(e){return this.http.post(a+"/Importer",e)}exporter(e){return localStorage.getItem("jwt_token"),this.http.get(a+"/Exporter",{responseType:"blob"})}id_facture(){return this.http.get(a+"id_facture").pipe()}id_vente(){return this.http.get(a+"id_vente").pipe()}id_achat(){return this.http.get(a+"id_achat").pipe()}ajouter_action(e){return this.http.post(a+"/Creer_Journal",e)}handleError(e="operation",t){return r=>(console.error(r),console.log(`${e} failed: ${r.message}`),Object(s.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(p.Xb(o.a))},e.\u0275prov=p.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);