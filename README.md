
# Neymo

Service de création et de money locale projet d'etude avec l'école @Hetic !
 
### Commande

Link to of the site : [neymo](https://neymo.benjaminadida.fr/)

>  ***Récupérer le repo***  `git clone https://github.com/lucrampro/local-money.git`

>  ***Lancer le projet***  `npm start` ou `npm run serve`

>  ***Compilé le projet***  `npm run build`

### Problèmatique

Neymo est une application bancaire de monnaie local, qui sera utilisé sur mobile.
cette application sera souvent utilisée dans des conditions non optimum, avec des faibles connexions par exemple ou des coupures d'internet.
alors afin d'avoir une application la moins lourde possible, nous faison attentions à toute les dépendence installer afin d'avoir le build le plus légé possible.

### Technologie

Framework Javascript ***Vue.js***

Nous avons décidé d'utiliser vue js, car elle fait partie de notre stack technique en entreprise, 
ce qui nous permet une plus grande aisance à coder.
une autre raison et l'utilisation de vue cli, qui nous permet d'installer et de gérer très facilement notre pwa.

Un des grands points importants de notre application, ce sont les performances, et Vue apport des performances intéressantes, malrgré qu'il ne soit pas le plus performant des framwork sur le marché, il y a une grande communauté ce qui nous permet de débuger et de maintenir notre code plus facilement, au contraire d'un framework comme Svelte qui est encore jeune.

Librarie Javascript ***Veevalidate***

Nous pensons que Veevalidate est une libraire nécessaire afin de gérer la validation de nos différents formulaire.
Accompagner de VueI18n les messages d'erreur sont gérer par vue Veevalidate et automatiquement lié au rules.

Librarie Javascript ***GreenSock***

Apres reflexion nous pensons que cette librarie est la meilleur pour animé et donner vie a notre application.
GreenSock est recconu pour sa legerté et son optimisation de plus sa syntaxe simple permet une prise en main rapide et efficace.

Bibliothèque de gestionnaire d'état ***Vuex***

Le store de vuex est a été nécessaire à faire a fin d'améliorer l'expérience utilisateur, et le développement de l'application.
Il permet de stocker une partie des informations de l'utilisateur dans le store, ce qui permet des temps de chargement moins long afin qu'il puisse déjà accéder à ses informations sans qu'ils soit forcément à attendre une requête du backend.
Nous utilisons vuex persiste data afin d'aussi améliorer l'expérience utilisateur, pour que l'utilisateur puisse changer de page ou revenir sur l'application sans qu'il ait à se reconnecter de nouveau.
_______

### Pwa

Nous avons mis en place l'application en pwa pour améliorer l'expérience pour que l'utilisateur puisse avoir accès a son application sans qu'il n'ait accès a internet.
Et la pwa permet d'installer notre application sur son téléphone quoi de plus normal pour une application bancaire, qui est censé être consulté régulièrement ?

###  Atomic desing

Nous avons mis en place une logique se basent sur de l'atomic desing afin de créer nos composant.
Il y a une nomenclature spécifique afin de pouvoir repérer plus facilement à quelle famille appartiennent chaque composants.

### nomonclature

a-nomducomposant : pour les atoms
m-nomducomposant : pour les molécules
o-organisme : pour les organismes
l-layout : pour les composants de layouts.

les imports de ses composant sont fait automatiquement dans le main ce qui permet de ne pas les importer a chaque page, et ce qui permet de garder des nom de composant identique sur chaque page.


### SCSS scoped

Nous avons choisis du scss scoped, car c'est un des langages de stylisation le plus proche du css,
ce qui permettra une meilleure maintenance dans le temps car le style d'une page reste en css,
et pour tout autre développeur qui aimerait repasser sur le code dans le futur, il lui sera plus facile pour lui.

la nomonclature des class css est le bem, nous l'avons choisis par defaut.


### Accessibilité

Un des points que nous avons voulus garder c'est l'accessibilité de nos composants, et de ne pas tomber dans le piège du bouton qui est en faite une div,
c'est pour cela que nous avons créé nos composant en respectant la sémantique HTML afin que nos éléments même sans CSS ne perde pas touts leurs sens.
Un des meilleurs exemple de d'utilisation est le a-switch-button et le l-form-register, qui récupère des comportements de base du navigateur afin de mettre une surcouche et CSS et JavaScript.


###  sécurité (vue router)

Le router-vue est les route imbriqué était nécessaire afin de créer une sécurité stable est maintenable dans notre application, ce qui nous à permettre de ne pas autorise certaines pages à certains types d'utilisateur, ou si l'utilisateur n'est pas connecté.


###  Pluging

Nous avons fait des plugins customs afin d'améliorer la stabilité et la maintenabilité de notre code ce qui nous permit de gagner énormément de temps par exemple,  sur l'acheminement des data vers le store, grâce a notre plugin $Api, ou encore animer de manière générique nos composants avec ourAnimation.


###   Responsive

L'application n'a pas était pensé responsive, mais côté front nous avons rendu l'utilisation de l'application en version desktop, ce qui permettra aux entreprises de gérer le compte depuis un terminal plus adapté a leur type d'activité.

###   librairi - perfomance

Comme dit précédemment nous avons des problématiques d'optimisation de performances, nous avons donc choisi d'utiliser le moins de librairie externe a vue, et nous arrivés au résulta de 3 'Veevalidate', 'vue-i18n', 'GreenSock' ce qui est vraiment pas mal, et nous permet d'avoir un build total notre application de : ≈ *(400 KiB)*