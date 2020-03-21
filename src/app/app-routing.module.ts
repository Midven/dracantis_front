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
    component: HomeComponent,
    data : {
      title: "Accueil"
    }
  },
  {
    path: "aide",
    component: AideComponent,
    data : {
      title: "Aide"
    }
  },
  {
    path: "classements",
    component: ClassementsComponent,
    data : {
      title: "Classements"
    }
  },
  {
    path: "competitions",
    component: CompetitionsComponent,
    data : {
      title: "Compétitions"
    }
  },
  {
    path: "elevage",
    component: ElevageComponent,
    data : {
      title: "Elevage"
    }
  },
  {
    path: "entrainements",
    component: EntrainementsComponent,
    data : {
      title: "Entrainements"
    }
  },
  {
    path: "forum",
    component: ForumComponent,
    data : {
      title: "Forum"
    }
  },
  {
    path: "inscription",
    component: InscriptionComponent,
    data : {
      title: "Inscription"
    }
  },
  {
    path: "livredor",
    component: LivredorComponent,
    data : {
      title: "Livre d'or"
    }
  },
  {
    path: "marche",
    component: MarcheComponent,
    data : {
      title: "Marché"
    }
  },
  {
    path: "messagerie",
    component: MessagerieComponent,
    data : {
      title: "Messagerie"
    }
  },
  {
    path: "moncompte",
    component: MoncompteComponent,
    data : {
      title: "Mon compte"
    }
  },
  {
    path: "nouveautes",
    component: NouveautesComponent,
    data : {
      title: "Nouveautés"
    }
  },
  {
    path: "rechercher",
    component: RechercherComponent,
    data : {
      title: "Rechercher"
    }
  },
  {
    path: "soigneur",
    component: SoigneurComponent,
    data : {
      title: "Soigneur"
    }
  },
  {
    path: "sorcier",
    component: SorcierComponent,
    data : {
      title: "Sorcier"
    }
  },  
  {
    path: "dragon",
    component: DragonComponent,
    data : {
      title: "Dragons"
    }
  },
  {
    path: "achat_dragonnet",
    component: AchatdragonnetComponent,
    data : {
      title: "Achat dragonnet"
    }
  },
  {
    path: "historique_dracor",
    component: HistoriquedracorComponent,
    data : {
      title: "Historique DracOr"
    }
  },
  {
    path: "historique_ea",
    component: HistoriqueeaComponent,
    data : {
      title: "Historique Eclat D'Âme"
    }
  },
  {
    path: "historique_ec",
    component: HistoriqueecComponent,
    data : {
      title: "Historique Eclat de Coeur"
    }
  },
  {
    path: "historique_pouvoirs",
    component: HistoriquepouvoirsComponent,
    data : {
      title: "Historique des pouvoirs"
    }
  },
  {
    path: "historique_pseudo",
    component: HistoriquepseudoComponent,
    data : {
      title: "Historique des pseudos"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
