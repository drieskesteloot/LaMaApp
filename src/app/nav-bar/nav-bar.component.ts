import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateCacheService} from 'ngx-translate-cache';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  browserLang: string;
  constructor(private translateService: TranslateService, private translateCacheService: TranslateCacheService) {
    //translate.setDefaultLang('en');
    //this.browserLang = this.translateService.getBrowserLang();
    //this.translateService.use('en');
    this.translateCacheService.init();
  }

  ngOnInit() {
    this.browserLang = this.translateService.getBrowserLang();
    this.translateService.use(this.browserLang);
    /*
    switch (this.browserLang) {
      case 'en':
        this.translateService.use('en');
        break;
      case 'nl':
        this.translateService.use('nl');
        break;
      case 'fr':
        this.translateService.use('fr');
        break;
      default:
        this.translateService.use('en');
        break;
    }
    */
    //this.translateCacheService.init();
    this.browserLang = this.translateCacheService.getCachedLanguage();
  }

  public switchLanguage(language: string) {
    //this.translateService.use(language);
    this.browserLang = language;
    switch (this.browserLang) {
      case 'en':
        this.translateService.use('en');
        break;
      case 'nl':
        this.translateService.use('nl');
        break;
      case 'fr':
        this.translateService.use('fr');
        break;
        /*
      default:
        this.translateService.use('en');
        break;
        */
    }
  }

}
