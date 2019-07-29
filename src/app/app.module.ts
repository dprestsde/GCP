import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UseServAccountComponent } from './use-serv-account/use-serv-account.component';
import { StorageComponent } from './storage/storage.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  { path: 'storage', component: StorageComponent },
  { path: 'ServiceAccounts', component: UseServAccountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UseServAccountComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
