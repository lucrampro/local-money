
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

le store de vuex est a été n'écéssaire à faire a fin d'améliorer l'experience utilisateur, et le développemnent de l'application.
il permet de stocker une partie des informations de l'utilisateur dans le store, ce qui permet des temps de chargement moins long afin qu'il puisse déja accéder à ses informations sans qu'ils est forcément à attendre une requette du backend. 
nous utilisons vuex persite data afin d'aussi améliorer l'experience utilisateur, pourqu'il puisse changer de page ou revenir sur l'application sans  qu'il est à se reconnecter de nouveau.
_______

### Pwa

nous avons mis en place l'application en pwa pour améliorér l'experience pour que l'utilisateur puisse avoir accés a son application même quand il n'a plus d'accés a internet.
et la pwa permet d'installer notre application sur son téléphone quoi de plus normal pour une application bancaire, qui est censé être consulté régulièrement ?

###  Atomic desing

nous avons mis en place une logique se basent sur de l'atomic desing afin de creer nos composant.
il y a une nomonclature spécifique afin de pouvoir reperer plus facilement a quelle famille apartienents chaques composants.

### nomonclature

a-nomducomposant : pour les atoms
m-nomducomposant : pour les molécules
o-organisme : pour les organisme
l-layout : pour les composants de layouts.

les import de ses composant sont fait automatiquement dans le main ce qui permet de ne pas les importer a chaque page, 
ce qui permet de garder des nom de composant identique sur chaque page.


### SCSS scoped

nous avons chosis du scss scoped, car c'est un des languages de stylisation le plus proche du css,
ce qui permettera une meilleur maintenance dans le temps car le style d'une page reste en css,
et pour tout autre développeur qui aimerait repasser sur le code dans le futur, il lui sera plus facile.

### Accessibilité

Un des points que nous avons voulus garder c'est l'accésibilité de nos composants, et de ne pas tomber dans le piège du button qui est enfaite une div, 
c'est pour cela que nous avons creer nos composant en respectant la sémantique html afin que nos éléments même sans css ne perde pas touts leurs sens.
un des meilleurs exemple de d'utilisation est le a-switch-button et le l-form-register, qui récupère des comportement de base du navigateur afin de mettre un surcouche et css et javascript.


###  sécurité (vue router)

Le router-vue est les route imbriqué était nécessaire afin de creer une sécurité stable est maintenable dans notre application, ce qui nous à permet de ne pas autorisr sertaines page à sertains type d'utilsateur, ou si l'utilisateur n'est pas connecté.


###  Pluging

nous avons fait des pluging customs afin d'améliorer la stabilité et la maintenabilité de notre code se qui nous permit de gagner énormément de temps, sur l'acheminement des data vers le store, grace a notre pluging $requestApi, ou encore animer de manière générique nos composants avex ourAnimation.


###   Responsive

l'application n'a pas était pensé responsive, mais côté front nous avons rendu l'utilisation de l'aplication en version desktop, ce qui permettera au entreprise de gerer le compt depuis un terminal plus adapté a leur type d'activité.

###   librairi - perfomance

Comme dit prècédement nous avons des problèmatiques d'optimisation de performances, nous avons donc choisi d'utiliser le moins de librairi externe a vue,
et nous arrivés au résulta de deux 'Veevalidate + vue-i18n' && 'GreenSock' ce qui est vraiment pas mal, et nous permet d'avoir un build total notre application de : ≈ *(400 KiB)*