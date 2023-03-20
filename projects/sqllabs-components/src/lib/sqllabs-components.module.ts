import { NgModule } from '@angular/core';
import { SqllabsComponentsComponent } from './sqllabs-components.component';
import { SqlFormComponent } from 'src/app/components/forms/sql-form/sql-form.component';
import { SqlInputComponent } from 'src/app/components/forms/sql-input/sql-input.component';
import { DataService } from 'src/app/data.service';

@NgModule({
  declarations: [
    SqllabsComponentsComponent
  ],
  imports: [
    SqlFormComponent,
    SqlInputComponent
  ],
  exports: [
    SqllabsComponentsComponent,
    SqlFormComponent,
    SqlInputComponent
  ]
})
export class SqllabsComponentsModule { }
