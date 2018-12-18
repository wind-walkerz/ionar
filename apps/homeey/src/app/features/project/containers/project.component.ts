import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../providers/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  project_info: any;

  constructor(
    private _route: ActivatedRoute,
    private _projSvs: ProjectService
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._projSvs.project_id = parseInt(this._route.snapshot.paramMap.get('id'));

    this._projSvs.getProjectInfo().subscribe(res => {
      this.project_info = res;

    });

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
