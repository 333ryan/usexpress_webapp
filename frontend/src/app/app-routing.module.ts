import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { ReviewLoansComponent } from "./review-loans/review-loans.component";
import {ApprovedLoansComponent} from "./approved-loans/approved-loans.component";
import {PdfViewComponent} from "./pdf-view/pdf-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'review-loans', component: ReviewLoansComponent },
  { path: 'approved-loans', component: ApprovedLoansComponent },
  { path: 'view-pdf', component: PdfViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
