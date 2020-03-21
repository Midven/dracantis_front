import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenucommunautaireComponent } from './menucommunautaire/menucommunautaire.component';
import { FooterComponent } from './footer/footer.component';
import { AideComponent } from './aide/aide.component';
import { ClassementsComponent } from './classements/classements.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ElevageComponent } from './elevage/elevage.component';
import { EntrainementsComponent } from './entrainements/entrainements.component';
import { ForumComponent } from './forum/forum.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LivredorComponent } from './livredor/livredor.component';
import { MarcheComponent } from './marche/marche.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { SoigneurComponent } from './soigneur/soigneur.component';
import { SorcierComponent } from './sorcier/sorcier.component';
import { DragonComponent } from './dragon/dragon.component';
import { AchatdragonnetComponent } from './achatdragonnet/achatdragonnet.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HistoriquedracorComponent } from './historiquedracor/historiquedracor.component';
import { HistoriqueeaComponent } from './historiqueea/historiqueea.component';
import { HistoriqueecComponent } from './historiqueec/historiqueec.component';
import { HistoriquepouvoirsComponent } from './historiquepouvoirs/historiquepouvoirs.component';
import { HistoriquepseudoComponent } from './historiquepseudo/historiquepseudo.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenucommunautaireComponent,
    FooterComponent,
    AideComponent,
    ClassementsComponent,
    CompetitionsComponent,
    ElevageComponent,
    EntrainementsComponent,
    ForumComponent,
    InscriptionComponent,
    LivredorComponent,
    MarcheComponent,
    MessagerieComponent,
    MoncompteComponent,
    NouveautesComponent,
    RechercherComponent,
    SoigneurComponent,
    SorcierComponent,
    DragonComponent,
    AchatdragonnetComponent,
    ConnexionComponent,
    HistoriquedracorComponent,
    HistoriqueeaComponent,
    HistoriqueecComponent,
    HistoriquepouvoirsComponent,
    HistoriquepseudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
