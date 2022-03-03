import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
 import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
 
import { Printer } from '@awesome-cordova-plugins/printer/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { WorkComponent } from './work/work.component';
  
 import { NgxBarcodeModule } from 'ngx-barcode';
 
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
   ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatKeyboardModule,
    MatKeyboardModule,
    NgxBarcodeModule,
    MatFormFieldModule,
    
 
     
    
  ],
  providers: [DatePipe , MatDatepickerModule,Printer,DocumentViewer,FileOpener  ,File , FilePath],
  bootstrap: [AppComponent]
})
export class AppModule { }
