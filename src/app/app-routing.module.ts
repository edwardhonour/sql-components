import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PingResolver } from './data.resolver';
import { ExampleFormComponent } from './pages/examples/example-form/example-form.component';
import { ExampleUploadFormComponent } from './pages/examples/example-upload-form/example-upload-form.component';
import { DocFormComponent } from './pages/docs/doc-form/doc-form.component';
import { DocUploadFormComponent } from './pages/docs/doc-upload-form/doc-upload-form.component';
import { ExampleTableComponent } from './pages/examples/example-table/example-table.component';
import { ExamplePanelComponent } from './pages/examples/example-panel/example-panel.component';
import { DocInputComponent } from './pages/docs/doc-input/doc-input.component';
import { DocSelectComponent } from './pages/docs/doc-select/doc-select.component';
import { DocRadioGroupComponent } from './pages/docs/doc-radio-group/doc-radio-group.component';
import { DocTextareaComponent } from './pages/docs/doc-textarea/doc-textarea.component';
import { DocDatepickerComponent } from './pages/docs/doc-datepicker/doc-datepicker.component';
import { DocSubmitComponent } from './pages/docs/doc-submit/doc-submit.component';
import { DocTableComponent } from './pages/docs/doc-table/doc-table.component';
import { DocAddTableComponent } from './pages/docs/doc-add-table/doc-add-table.component';
import { DocFullcalendarComponent } from './pages/docs/doc-fullcalendar/doc-fullcalendar.component';
import { DocCardComponent } from './pages/docs/doc-card/doc-card.component';
import { DocPanelComponent } from './pages/docs/doc-panel/doc-panel.component';
import { ExampleCardComponent } from './pages/examples/example-card/example-card.component';
import { ExampleFullcalendarComponent } from './pages/examples/example-fullcalendar/example-fullcalendar.component';
import { ExampleAddTableComponent } from './pages/examples/example-add-table/example-add-table.component';
import { ExampleSubmitComponent } from './pages/examples/example-submit/example-submit.component';
import { ExampleDatepickerComponent } from './pages/examples/example-datepicker/example-datepicker.component';
import { ExampleTextareaComponent } from './pages/examples/example-textarea/example-textarea.component';
import { ExampleRadioGroupComponent } from './pages/examples/example-radio-group/example-radio-group.component';
import { ExampleSelectComponent } from './pages/examples/example-select/example-select.component';
import { ExampleInputComponent } from './pages/examples/example-input/example-input.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sql-form', component: DocFormComponent },
  { path: 'sql-upload-form-example', component: DocUploadFormComponent },
  { path: 'exapmle-form', component: ExampleFormComponent },
  { path: 'example-table/:id/:id2/:id3', component: ExampleTableComponent, resolve: { params: PingResolver }},
  { path: 'example-panel/:id/:id2/:id3', component: ExamplePanelComponent, resolve: { params: PingResolver }},
  { path: 'sql-input', component: DocInputComponent },
  { path: 'example-input', component: ExampleInputComponent },
  { path: 'sql-select', component: DocSelectComponent },
  { path: 'example-select', component: ExampleSelectComponent },
  { path: 'sql-radio-group', component: DocRadioGroupComponent },
  { path: 'example-radio-group', component: ExampleRadioGroupComponent },
  { path: 'sql-textarea', component: DocTextareaComponent },
  { path: 'example-textarea', component: ExampleTextareaComponent },
  { path: 'sql-datepicker', component: DocDatepickerComponent },
  { path: 'example-datepicker', component: ExampleDatepickerComponent },
  { path: 'sql-submit', component: DocSubmitComponent },
  { path: 'example-submit', component: ExampleSubmitComponent },
  { path: 'sql-table', component: DocTableComponent },
  { path: 'example-table', component: ExampleTableComponent },
  { path: 'sql-add-table', component: DocAddTableComponent },
  { path: 'example-add-table', component: ExampleAddTableComponent },
  { path: 'sql-calendar', component: DocFullcalendarComponent },
  { path: 'example-calendar', component: ExampleFullcalendarComponent },
  { path: 'sql-card', component: DocCardComponent },
  { path: 'example-card', component: ExampleCardComponent },
  { path: 'sql-panel', component: DocPanelComponent },
  { path: 'example-panel', component: ExamplePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
