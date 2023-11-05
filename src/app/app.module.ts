import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidePanelNavigationComponent } from './navigation/side-panel-navigation/side-panel-navigation.component';
import { ProfileNavigationComponent } from './navigation/profile-navigation/profile-navigation.component';
import { CardsOverviewComponent } from './cards/overview/overview.component';
import { AccountsOverviewComponent } from './accounts/overview/overview.component';
import { IncomeOverviewComponent } from './income/overview/overview.component';
import { InvestmentsOverviewComponent } from './investments/overview/overview.component';
import { TransactionsOverviewComponent } from './transactions/overview/overview.component';
import { CardComponent } from './cards/card/card.component';
import { AccountComponent } from './accounts/account/account.component';
import { ExpensesOverviewComponent } from './expenses/overview/overview.component';
import { OverviewComponent } from './overview/overview.component';
import { UpcomingExpensesComponent } from './expenses/upcoming/upcoming.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpensesReportComponent } from './expenses/report/report.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { ButtonComponent } from './common/button/button.component';
import { TableComponent } from './common/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidePanelNavigationComponent,
    ProfileNavigationComponent,
    CardsOverviewComponent,
    AccountsOverviewComponent,
    IncomeOverviewComponent,
    InvestmentsOverviewComponent,
    TransactionsOverviewComponent,
    CardComponent,
    AccountComponent,
    ExpensesOverviewComponent,
    OverviewComponent,
    UpcomingExpensesComponent,
    BudgetComponent,
    ExpensesReportComponent,
    DropdownComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
