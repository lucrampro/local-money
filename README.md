
# Neymo

Service de création et de gestion de monnaie locale 
Projet d'étude avec l'école @Hetic !
 
### Commandes

Lien du site : [neymo](https://neymo.benjaminadida.fr/)

>  ***Récupérer le repo***  `git clone https://github.com/lucrampro/local-money.git`

>  ***Lancer le projet***  `npm start` ou `npm run serve`

>  ***Compiler le projet***  `npm run build`

### Problématique

Neymo est une application bancaire de monnaie locale, qui sera utilisée sur mobile.
Cette application sera souvent utilisée dans des conditions non optimales, avec de faibles connexions, par exemple, ou des coupures Internet.
Alors, afin d'avoir une application la moins lourde possible, nous faisons attention à toutes les dépendances installées afin d'avoir le build le plus léger possible.

### Technologies

Framework Javascript ***Vue.js***

Nous avons décidé d'utiliser Vue.js, car il fait partie de notre stack technique en entreprise, ce qui nous permet une plus grande aisance pour coder.
Une autre raison est l'utilisation de Vue-cli, qui nous permet d'installer et de gérer très facilement notre pwa.

Un des grands points importants de notre application, est la performance, et Vue.js apport des performances intéressantes, malgré qu'il ne soit pas le plus performant des framworks sur le marché. Il y a une grande communauté ce qui nous permet de débuger et de maintenir notre code plus facilement, contrairement à un framework comme Svelte qui est encore jeune.

Librarie Javascript ***Veevalidate***

Nous pensons que Veevalidate est une libraire nécessaire afin de gérer la validation de nos différents formulaires.
Accompagné de VueI18n, les messages d'erreur sont gérés par vue Veevalidate et automatiquement liés au rules.

Librarie Javascript ***GreenSock***

Après réflexions, nous pensons que cette librarie est la meilleure pour animer et donner vie a notre application.
GreenSock est reconnu pour sa légerté et son optimisation, de plus, sa syntaxe simple permet une prise en main rapide et efficace.

Bibliothèque de gestionnaire d'état ***Vuex***

Le store de vuex est a été nécessaire à faire à fin d'améliorer l'expérience utilisateur, et le développement de l'application.
Il permet de stocker une partie des informations de l'utilisateur dans le store, ce qui permet des temps de chargement moins longs afin qu'il puisse déjà accéder à ses informations sans qu'il est forcément à attendre une requête du back-end.
Nous utilisons vuex persiste data afin d'améliorer aussi l'expérience utilisateur, pour que l'utilisateur puisse changer de page ou revenir sur l'application sans qu'il ait à se reconnecter de nouveau.
_______

### Pwa

Nous avons mis en place, l'application en pwa pour améliorer l'expérience, pour que l'utilisateur puisse avoir accès a son application sans qu'il n'ait accès à Internet.
Et la pwa permet d'installer notre application sur son téléphone quoi de plus normal pour une application bancaire, qui est censée être consultée régulièrement ?

###  Atomic desing

Nous avons mis en place une logique se basant sur de l'atomic desing afin de créer nos composants.
Il y a une nomenclature spécifique afin de pouvoir repérer plus facilement à quelle famille appartiennent chaques composants.

### nomonclature

a-nomducomposant : pour les atômes
m-nomducomposant : pour les molécules
o-organisme : pour les organismes
l-layout : pour les composants de layouts.

Les imports de ses composants sont fait automatiquement dans le main ce qui permet de ne pas les importer a chaque page, et ce qui permet de garder des noms de composant identique sur chaque page.


### SCSS scoped

Nous avons choisi du SCSS scoped, car c'est un des langages de stylisation les plus proche du CSS,
ce qui permettra une meilleure maintenance dans le temps car le style d'une page reste en CSS,
et pour tout autre développeur qui aimerait repasser sur le code dans le futur qui lui sera plus facile à comprendre.

La nomonclature des classes CSS est le BEM, nous l'avons choisi par défaut.


### Accessibilité

Un des points que nous avons voulu garder c'est l'accessibilité de nos composants, et de ne pas tomber dans le piège du bouton qui est en faite une div,
c'est pour cela que nous avons créé nos composant en respectant la sémantique HTML afin que nos éléments même sans CSS ne perdent pas tout leur sens.
Un des meilleurs exemples de d'utilisation est le a-switch-button et le l-form-register, qui récupère des comportements de base du navigateur afin de mettre une surcouche et CSS et JavaScript.


###  Sécurité (vue router)

Le router-vue et les routes imbriquées étaientt nécessaires afin de créer une sécurité stable est maintenable dans notre application, ce qui nous à permis de ne pas autoriser certaines pages à certains types d'utilisateurs, ou à un utilisateur nons connecté.


###  Pluging

Nous avons fait des plugins customs afin d'améliorer la stabilité et la maintenabilité de notre code ce qui nous permis de gagner énormément de temps par exemple,  sur l'acheminement des data vers le store, grâce à notre plugin $Api, ou encore animer de manière générique nos composants avec ourAnimation.


###   Responsive

L'application n'a pas été pensé3 responsive, mais côté front nous avons rendu l'utilisation de l'application en version desktop, ce qui permettra aux entreprises de gérer le compte depuis un terminal plus adapté à leur type d'activité.

###   librairi - perfomance

Comme dit précédemment, nous avons des problématiques d'optimisation de performances, nous avons donc choisi d'utiliser le moins de librairie externe à vue, et nous sommes arrivés au résultat de 3 'Veevalidate', 'vue-i18n', 'GreenSock' ce qui n'est non négligeable, et nous permet d'avoir un build total notre application de : ≈ *(400 KiB)*