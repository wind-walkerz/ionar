import { Component, OnInit, OnDestroy } from '@angular/core';
import moment from 'moment';
import { ProjectService } from '../../providers/project.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  protected _moment = moment;

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  chat_feed: any;

  constructor(private _projectSvs: ProjectService) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this._projectSvs.getChatFeed().subscribe(res => {
      console.log(res)
      this.chat_feed = res
    });
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


}
