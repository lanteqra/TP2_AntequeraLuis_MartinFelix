# TP2_AntequeraLuis_MartinFelix

Travail Pratique 2 - Git, grille et composants Tailwind, animations - Technique d’intégration des interfaces Web 2

## Auteur :

Luis Antequera - Félix Martin
Étudiants en Techniques d'intégration des interfaces Web
AEC - Développement Web - (NWE.2U) | Cégep de Trois-Rivières | Hiver 2026

## Liens :

- **Github projet :** https://github.com/lanteqra/TP2_AntequeraLuis_MartinFelix
- **Maquette :** (conçue par l’équipe de design graphique) https://www.figma.com/proto/tgDVwXAZ4RMOzcG0OawRPF/Untitled?node-id=7%3A9368&scaling=min-zoom&page-id=0%3A1

## Description :

Dans le cadre du cours Techniques d'intégration des interfaces Web 2, ce travail pratique consiste à concevoir et intégrer le site web de notre oeuvre cinématographique favorite :

**Interstellar** - https://www.imdb.com/fr/title/tt0816692/?ref_=mv_close

## Pages du site :

1. index.html -> Accueil
2. tournage.html -> Tournage

## Technologies :

- HTML5 sémantique
- CSS3 (méthodologie BEM, animations)
  - Animations CSS :
    - Section Images et extraits : apparition en cascade des images avec "fadeScaleIn" et apparition de la vidéo avec "fadeIn", avec des délais échelonnés. Effet de zoom et luminosité au survol des images. Le "z-index" au survol permet à l'image sélectionnée de passer au premier plan. Toutes les animations utilisent "cubic-bezier(0.16, 1, 0.3, 1)" pour un rendu fluide. (Styles déclares dans style.css)
    - Section Faits divers : L'image apparaît avec un effet de fondu et de translation verticale (faitDiversFadeUp). Les .fait-divers__stat apparaissent en cascade avec un effet d'apparition en scale et opacité, avec des délais échelonnés (faitDiversStatPopIn) - (styles déclarés dans style.css). Au survol, les statistiques ont un effet d'agrandissement scale(1.05), une ombre claire, avec une transition fluide de 300ms (styles déclarés en Tailwind).

- Composants Tailwind :
  - Barre de navigation : "Simple Responsive Navigation Bar" - https://www.creative-tim.com/twcomponents/component/simple-responsive-navigation-bar
  - Carrousel : "Carousel with indicator buttons" - https://daisyui.com/components/carousel/#carousel-with-indicator-buttons
  - Accordéon :  "Accordion" - https://tailwindflex.com/@abhirajk/accordion-2

- Javascript (animations)
  - Animation Js :
    - Carousel personnalisé avec auto-slide et dots de navigation - js/carousel.js 
    - Cartes distribution animation sur la "y" avec GSAP ScrollTrigger - js/castCards.js - https://gsap.com/docs/v3/Plugins/ScrollTrigger/
    - images animation sur la "x" avec GSAP ScrollTrigger - js/bloopersImg.js - https://gsap.com/docs/v3/Plugins/ScrollTrigger/

**note :** Tous les composants Tailwind (navbar, carrousel, accordéon) ainsi que les animations CSS et JavaScript utilisées dans ce projet ont été modifiés et adaptés à partir de leurs versions de base afin de correspondre à l'identité visuelle du projet (palette de couleurs, typographies et thème Interstellar).

## Tâches :

| Membre       | Tâche réalisée                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| Luis         | Configuration initiale du projet (Tailwind, structure HTML)                                                  |
| Luis         | Navbar responsive (grille, menu hamburger, palette de couleurs) - Composant Tailwind                         |
| Félix        | Footer                                                                                                       |
| Luis         | index : Section hero - carrousel avec animation js - Composant Tailwind                                      |
| Luis         | index : Section distribution avec animation Js                                                               |
| Luis         | index : Section images-extraits avec animation CSS                                                           |
| Félix        | tournage : Section fait-divers avec animation CSS                                                            |
| Félix        | tournage : Section tournage et bloopers avec animation Js                                                    |
| Félix        | tournage : Section anecdotes avec hover - Composant Tailwind                                                 |
| Luis         | index : Section raisons avec hover                                                                           |
| Luis         | Validation W3C (html et css) - Google/Lighthouse  - WAVE  | Des ajustements du code                          |

## Validation W3C :

- HTML : 
  **index.html - tournage.html**
  Les pages HTML du site ont été validées avec succès via https://validator.w3.org/#validate_by_input
  Mais Les seules erreurs/avertissements restants dans le rapport sont : 
    * Les erreurs liées à la syntaxe Tailwind CSS (@theme, @apply), inhérentes à l'utilisation du CDN Tailwind Play, qui n'est pas reconnu par le validateur W3C car ce n'est pas du CSS standard.
    * Les avertissements concernant l'attribut "name" des éléments personnalisés (<box-icon>) (web component de la librairie Boxicons), non reconnu par le validateur car il ne fait pas partie du schéma HTML standard.
  Ces erreurs ont été approuvées et sont ignorées, tel que confirmé par le professeur.

- CSS : "valide conformément à la recommandation CSS niveau 3 + SVG !" via https://jigsaw.w3.org/css-validator/validator.html.fr#validate_by_input 
- Méthodologie BEM : La méthodologie BEM a été appliquée de manière cohérente à l'ensemble des classes CSS du projet, assurant une structure claire et maintenable.
- Score d'accessibilité Google - Lighthouse : 100%
- Score d'accessibilité Wave ( Web accessibility evaluation tool - extension Chrome) : 10 / 10
  notes sur les alertes restant : 
    - Note sur les liens redondants (logo + "Accueil") WAVE signale que le logo et le lien "Accueil" pointent vers la même URL (index.html). Ce choix est volontaire afin que les deux éléments restent pleinement fonctionnels et navigables pour tous les utilisateurs, y compris au clavier.
    -  Note sur la vidéo YouTube, La bande-annonce intégrée provient de YouTube. Les sous-titres dépendent de la disponibilité fournie par la plateforme (CC) et ne sont pas gérés directement par notre code.