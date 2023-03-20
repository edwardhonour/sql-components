import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlPanelComponent } from 'src/app/components/layout/sql-panel/sql-panel.component'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SqlTableComponent } from 'src/app/components/table/sql-table/sql-table.component'; 
@Component({
  selector: 'app-example-panel',
  standalone: true,
  imports: [CommonModule, SqlPanelComponent, SqlTableComponent],
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.component.css']
})
export class ExamplePanelComponent implements OnInit, AfterViewInit {

  data: any;
  params: any;
  id: any;
  id2: any;
  id3: any;

  constructor(
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
) { }

  ngOnInit() {
      this._activatedRoute.data.subscribe(({ params }) => {
        this.params=params;
        console.log(this.params)
    })
  }

  ngAfterViewInit(): void {
    this._dataService.pageSubject.subscribe(d => {
      this.data=d;
      console.log(d)
    })
  }

}