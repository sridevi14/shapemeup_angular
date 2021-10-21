import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { TabContainerPage } from './tab-container.page';


const routes: Routes = [
  {
    path: '',
    component: TabContainerPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../../home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard]
      },
      /*       {
              path: 'plan',
              loadChildren: () => import('../../../plan/plan.module').then(m => m.PlanPageModule),
              canActivate: [AuthGuard]
            }, */
      {
        path: 'clients',
        loadChildren: () => import('../../../client/client.module').then(m => m.ClientPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../../../profile/profile.module').then(m => m.ProfilePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'chat',
        loadChildren: () => import('../../../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../../../calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabContainerPageRoutingModule { }
