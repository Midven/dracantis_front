import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { HistoriquedracorComponent } from './historiquedracor/historiquedracor.component';
import { HistoriqueeaComponent } from './historiqueea/historiqueea.component';
import { HistoriqueecComponent } from './historiqueec/historiqueec.component';
import { HistoriquepouvoirsComponent } from './historiquepouvoirs/historiquepouvoirs.component';
import { HistoriquepseudoComponent } from './historiquepseudo/historiquepseudo.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "aide",
    component: AideComponent
  },
  {
    path: "classements",
    component: ClassementsComponent
  },
  {
    path: "competitions",
    component: CompetitionsComponent
  },
  {
    path: "elevage",
    component: ElevageComponent
  },
  {
    path: "entrainements",
    component: EntrainementsComponent
  },
  {
    path: "forum",
    component: ForumComponent
  },
  {
    path: "inscription",
    component: InscriptionComponent
  },
  {
    path: "livredor",
    component: LivredorComponent
  },
  {
    path: "marche",
    component: MarcheComponent
  },
  {
    path: "messagerie",
    component: MessagerieComponent
  },
  {
    path: "moncompte",
    component: MoncompteComponent
  },
  {
    path: "nouveautes",
    component: NouveautesComponent
  },
  {
    path: "rechercher",
    component: RechercherComponent
  },
  {
    path: "soigneur",
    component: SoigneurComponent
  },
  {
    path: "sorcier",
    component: SorcierComponent
  },  
  {
    path: "dragon",
    component: DragonComponent
  },
  {
    path: "achat_dragonnet",
    component: AchatdragonnetComponent
  },
  {
    path: "historique_dracor",
    component: HistoriquedracorComponent
  },
  {
    path: "historique_ea",
    component: HistoriqueeaComponent
  },
  {
    path: "historique_ec",
    component: HistoriqueecComponent
  },
  {
    path: "historique_pouvoirs",
    component: HistoriquepouvoirsComponent
  },
  {
    path: "historique_pseudo",
    component: HistoriquepseudoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
