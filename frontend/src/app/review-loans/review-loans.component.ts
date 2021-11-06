import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../firestore.service";
import {MessagesService} from "../messages.service";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {LoanListing} from "../loan-listing";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-review-loans',
  templateUrl: './review-loans.component.html',
  styleUrls: ['./review-loans.component.css']
})
export class ReviewLoansComponent implements OnInit {

  dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  loans: Array<LoanListing> = [];
  constructor(private fireService:FirestoreService, private messages: MessagesService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans() {
    this.fireService.getLoansCollection().subscribe(res => {
      this.loans = res.map(e => {
        let loanList = {
          docID: e.payload.doc.id,
          firstName: e.payload.doc.get('firstName'),
          lastName: e.payload.doc.get('lastName'),
          dateSubmitted: e.payload.doc.get('_submittedOn').toDate()
            .toLocaleDateString('en-US', this.dateOptions),
          loanType: e.payload.doc.get('_loanType'),
          phone: e.payload.doc.get('maritalStatus'),
          email: e.payload.doc.get('maritalStatus'),
        };
        return loanList as LoanListing;
      })
    })
  }
}
