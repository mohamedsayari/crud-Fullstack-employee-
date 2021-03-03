import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateRappelComponent } from './create-rappel/create-rappel.component';

import { RappelListComponent } from './rappel-list/rappel-list.component';
import { RappelDetailleComponent } from './rappel-detaille/rappel-detaille.component';
import { UpddateRappelComponent } from './upddate-rappel/upddate-rappel.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeDetaileComponent } from './demande-detaile/demande-detaile.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { UppdateDemandeComponent } from './uppdate-demande/uppdate-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateRappelComponent,
    
    RappelListComponent,
    
    RappelDetailleComponent,
    
    UpddateRappelComponent,
    
    CreateDemandeComponent,
    
    DemandeDetaileComponent,
    
    DemandeListComponent,
    
    UppdateDemandeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
