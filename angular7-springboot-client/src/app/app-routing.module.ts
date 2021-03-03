import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RappelListComponent } from './rappel-list/rappel-list.component';
import { CreateRappelComponent } from './create-rappel/create-rappel.component';
import { RappelDetailleComponent } from './rappel-detaille/rappel-detaille.component';
import { UpddateRappelComponent } from './upddate-rappel/upddate-rappel.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { UppdateDemandeComponent } from './uppdate-demande/uppdate-demande.component';
import { DemandeDetaileComponent } from './demande-detaile/demande-detaile.component';



const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  
  { path: '', redirectTo: 'rappel', pathMatch: 'full' },
  { path: 'rappels', component: RappelListComponent },
  { path: 'plus', component: CreateRappelComponent },
  { path: 'upddate/:id', component: UpddateRappelComponent },
  { path: 'detaille/:id', component: RappelDetailleComponent },


  { path: '', redirectTo: 'demande', pathMatch: 'full' },
  { path: 'demandes', component: DemandeListComponent },
  { path: 'ajout', component: CreateDemandeComponent },
  { path: 'uppdate/:id', component: UppdateDemandeComponent },
  { path: 'detaile/:id', component: DemandeDetaileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
