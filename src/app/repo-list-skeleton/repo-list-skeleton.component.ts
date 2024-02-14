import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-list-skeleton',
  templateUrl: './repo-list-skeleton.component.html',
  styleUrls: ['./repo-list-skeleton.component.scss']
})
export class RepoListSkeletonComponent {
@Input() repos!:any;
}
