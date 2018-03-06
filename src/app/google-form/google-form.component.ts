import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styles: []
})
export class GoogleFormComponent implements OnInit {
  browserLang: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.getBrowserLang();
    }

  getBrowserLang() {
    this.browserLang = this.translateService.currentLang;
  }



}
