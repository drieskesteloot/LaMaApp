import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateCacheService} from 'ngx-translate-cache';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styles: []
})
export class GoogleFormComponent implements OnInit {
  browserLang: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}

  getBrowserLang() {
    this.browserLang = this.translateService.currentLang;
  }

  setBrowserLang(language: string) {
    this.browserLang = language;
  }



}
