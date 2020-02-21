import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, CustomFormsModule,HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeComponent },
      { path: 'employees/add', component: EmployeeFormComponent },
      { path: 'employees/:id', component: EmployeeFormComponent },
      { path: 'employees', component: EmployeeComponent }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
