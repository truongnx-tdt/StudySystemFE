import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMemberComponent } from './home-member/home-member.component';
import { DefaultComponent } from './default/default.component';
import { HistoryOderComponent } from './history-oder/history-oder.component';
import { AcountMemberComponent } from './acount-member/acount-member.component';
import { SupportComponent } from './support/support.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: '', component: HomeMemberComponent,
    children: [
      {
        path: 'home', component: DefaultComponent
      },
      {
        path: 'history-order', component: HistoryOderComponent
      },
      {
        path: 'account/user-info', component: AcountMemberComponent
      },
      {
        path: 'account/support', component: SupportComponent
      }, {
        path: 'account/feedback', component: FeedbackComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmemberRoutingModule { }
