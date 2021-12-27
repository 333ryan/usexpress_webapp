import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from "ngx-extended-pdf-viewer";
import { NgxExtendedPdfViewerService } from "ngx-extended-pdf-viewer";

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  public firstName = 'Trey';
  public lastName = 'Gordo';
  public homeOwnership = 'Yes';

  public formData: {
    [fieldName: string]: string | string[] | number | boolean;
  } = {};
  pdfSrc = "assets/MCAloan.pdf";
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.assetsFolder = '/src/assets';
    this.updateFormData();
  }

  ngOnInit(): void {
    this.linkPdfForm();
  }

  async linkPdfForm(): Promise<void> {
    await this.pdfService.getFormData().then((res) => {
      console.log(res);
    });
  }

  updateFormData(): void {
    this.formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      homeOwnership: this.homeOwnership
    };
  }
}
