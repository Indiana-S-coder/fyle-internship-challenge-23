import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-data-skeleton',
  templateUrl: './user-data-skeleton.component.html',
  styleUrls: ['./user-data-skeleton.component.scss']
})
export class UserDataSkeletonComponent {
@Input() user!: any;
}
