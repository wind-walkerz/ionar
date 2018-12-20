import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/providers/auth.service';
import { HeaderService } from './header.service';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  openSubMenu: Boolean = false;
  isAuthenticated: Boolean = false;

  project_list = [];

  @HostListener('mouseleave')
  onMouseLeave($event) {
    this.openSubMenu = false;
  }

  constructor(
    private cd: ChangeDetectorRef,
    private _authSvs: AuthService,
    private _headerSvs: HeaderService) {
  }

  ngOnInit() {

    this.getProjectList(this._authSvs.isAuthenticated());

    this._authSvs.authenticationChange$.pipe(untilDestroyed(this)).subscribe((isAuthenticated: Boolean) => {
      this.getProjectList(isAuthenticated);
    });
  }

  ngOnDestroy(): void {
  }

  onLogout() {
    this._authSvs.logout();
  }

  getProjectList = (isAuthenticated: Boolean) => {
    this.isAuthenticated = isAuthenticated;

    if (isAuthenticated) {
      this._headerSvs.getProjectList().subscribe(res => {
        this.project_list = res.data;
      });
    }

    this.cd.markForCheck();
  };

}
