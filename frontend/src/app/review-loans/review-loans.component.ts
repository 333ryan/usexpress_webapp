import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-loans',
  templateUrl: './review-loans.component.html',
  styleUrls: ['./review-loans.component.css']
})
export class ReviewLoansComponent implements OnInit {

  loans: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.loans = [
      {dateSubmitted: '10/23/2021, 3:40pm', name: 'steve', loanType: 'Auto', phone: '4044044040'
        , email: 'steve@gmail.com', },
      {dateSubmitted: '10/20/2021, 9:40pm', name: 'bob', loanType: 'Business', phone: '6786786786'
        , email: 'bob@gmail.com', },
      {dateSubmitted: '10/23/2021, 3:40pm', name: 'steve', loanType: 'Auto', phone: '4044044040'
        , email: 'steve@gmail.com', },
      {dateSubmitted: '10/20/2021, 9:40pm', name: 'bob', loanType: 'Business', phone: '6786786786'
        , email: 'bob@gmail.com', },
      {dateSubmitted: '10/23/2021, 3:40pm', name: 'steve', loanType: 'Auto', phone: '4044044040'
        , email: 'steve@gmail.com', },
      {dateSubmitted: '10/20/2021, 9:40pm', name: 'bob', loanType: 'Business', phone: '6786786786'
        , email: 'bob@gmail.com', },
      {dateSubmitted: '10/23/2021, 3:40pm', name: 'steve', loanType: 'Auto', phone: '4044044040'
        , email: 'steve@gmail.com', },
      {dateSubmitted: '10/20/2021, 9:40pm', name: 'bob', loanType: 'Business', phone: '6786786786'
        , email: 'bob@gmail.com', },
      {dateSubmitted: '10/23/2021, 3:40pm', name: 'steve', loanType: 'Auto', phone: '4044044040'
        , email: 'steve@gmail.com', },
      {dateSubmitted: '10/20/2021, 9:40pm', name: 'bob', loanType: 'Business', phone: '6786786786'
        , email: 'bob@gmail.com', },
    ]
  }



}
