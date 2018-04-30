import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { ReactiveFormsModule } from '@angular/forms';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MapComponent } from './map/map.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomePhotographyComponent } from './home-photography/home-photography.component';
import { CarouselPhotographyComponent } from './carousel-photography/carousel-photography.component';
import { PortfolioPhotographyComponent } from './portfolio-photography/portfolio-photography.component';
import { PresentationPhotographyComponent } from './presentation-photography/presentation-photography.component';
import { HomeDesignComponent } from './home-design/home-design.component';
import { PresentationDesignComponent } from './presentation-design/presentation-design.component';
import { PortfolioDesignComponent } from './portfolio-design/portfolio-design.component';
import { CarouselDesignComponent } from './carousel-design/carousel-design.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { GoogleFormComponent } from './google-form/google-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeBoothComponent } from './home-booth/home-booth.component';
import { PresentationBoothComponent } from './presentation-booth/presentation-booth.component';
import { PortfolioBoothComponent } from './portfolio-booth/portfolio-booth.component';
import { PortfolioPhotographySectionsComponent } from './portfolio-photography-sections/portfolio-photography-sections.component';
import { PortfolioDesignSectionsComponent } from './portfolio-design-sections/portfolio-design-sections.component';
import { PortfolioPhotographyTemplate2Component } from './portfolio-photography-template2/portfolio-photography-template2.component';

const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'googleForm', component: GoogleFormComponent },
    { path: 'photography', component: HomePhotographyComponent },
    //{ path: 'photo2', component: PortfolioPhotographySectionsComponent },
    { path: 'photobooth', component: HomeBoothComponent },
    { path: 'design', component: HomeDesignComponent },
    {path: 'not-found', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent },
  ];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    LightboxComponent,
    PortfolioComponent,
    PresentationComponent,
    MapComponent,
    ProjectsComponent,
    ContactFormComponent,
    HomeComponent,
    HomePhotographyComponent,
    CarouselPhotographyComponent,
    PortfolioPhotographyComponent,
    PresentationPhotographyComponent,
    HomeDesignComponent,
    PresentationDesignComponent,
    PortfolioDesignComponent,
    CarouselDesignComponent,
    HomeVideoComponent,
    FieldErrorDisplayComponent,
    GoogleFormComponent,
    NotFoundComponent,
    HomeBoothComponent,
    PresentationBoothComponent,
    PortfolioBoothComponent,
    PortfolioPhotographySectionsComponent,
    PortfolioDesignSectionsComponent,
    PortfolioPhotographyTemplate2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
          return new TranslateCacheService(translateService, translateCacheSettings);
        },
        deps: [ TranslateService, TranslateCacheSettings ]
      }
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
