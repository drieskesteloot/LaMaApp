import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MapComponent } from './map/map.component';
import { ProjectsComponent } from './projects/projects.component';


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
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
