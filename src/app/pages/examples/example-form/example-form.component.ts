import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlFormComponent } from 'src/app/components/forms/sql-form/sql-form.component'; 
import { SqlDatepickerComponent } from 'src/app/components/forms/sql-datepicker/sql-datepicker.component'; 
import { SqlInputComponent } from 'src/app/components/forms/sql-input/sql-input.component'; 
import { SqlRadioGroupComponent } from 'src/app/components/forms/sql-radio-group/sql-radio-group.component'; 
import { SqlSelectComponent } from 'src/app/components/forms/sql-select/sql-select.component'; 
import { SqlTextareaComponent } from 'src/app/components/forms/sql-textarea/sql-textarea.component'; 
import { SqlSubmitComponent } from 'src/app/components/forms/sql-submit/sql-submit.component'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-example-form',
  standalone: true,
  imports: [CommonModule, SqlFormComponent, SqlDatepickerComponent, SqlInputComponent,
  SqlRadioGroupComponent, SqlSelectComponent, SqlSubmitComponent, SqlTextareaComponent, FormsModule],
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent {

  my_date: any;

}
