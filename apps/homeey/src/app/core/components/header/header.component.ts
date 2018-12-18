import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/providers/auth.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_dropdown: Boolean = false;
  _openSubMenu: Boolean = false;

  project_list = []

  @HostListener('mouseleave')
  onMouseLeave($event) {
    this._openSubMenu = false;
  }

  constructor(public authSvs: AuthService, private _headerSvs: HeaderService) {
  }

  ngOnInit() {
    this._headerSvs.getProjectList().subscribe(res => {
      this.project_list = res
    });
  }


}
