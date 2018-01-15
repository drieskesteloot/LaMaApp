import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

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

const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'photography', component: HomePhotographyComponent },
    { path: 'design', component: HomeDesignComponent },
  ];

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
    CarouselDesignComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
