import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserDataComponent } from './user/addUser/add-user-data/add-user-data.component';
import { ChildComponentComponent } from './user/addUser/edit-user/child-component.component';
//import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: '',component: LoginComponent},
  {
    path: 'user',
    children: [
      {
        path: '',component: UserComponent,
      
      },

      {
        path: 'addUser',component: AddUserDataComponent,
        //path: 'editUser',component: ChildComponentComponent
      
      }
    ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
