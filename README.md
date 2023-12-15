# devops-mini-proj-tdd-greetings

# authors : "Robin Sallé, Mario Margjini, Joachim Qi"
# group : 63

# To initialize project : npm i

# To test : npm run test


DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions
Informations

    N° de groupe : 63
    Membres du groupe : Mario Margjini, Joachim Qi, Robin Sallé
    https://github.com/joachim-qi-vinci/devops-mini-proj-tdd-greetings.git

Énoncé
Pré-requis :

    Sur base de votre mini-projet 1 (TDD)
    Usage de JEST obligatoire
    Utilisation pulls requests

Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe
Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

Les dépendances doivent être installées
Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
Le code doit être "formatté" correctement (Prettier)
Le code doit être "linté" correctement (Lint)
Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
Le code doit être "buildé" correctement
Une étape indiquant l'heure de fin de la pipeline doit être affichée
Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées. Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles: GitHub Actions Jest coverage
Questions
Décrivez brièvement ce que fait votre fichier YML.

<"Le fichier YML sert a créer une pipeline à notre projet qui va nous permettre de mettre en place de l'intégration continue avec les Github Actions.">

    En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

<"Le "on" sert à définir l'action qui va lancer la pipeline. "on push" lance la pipeline à chaque push d'un developpeur sur le repo github et "on pull request" se lance à la création/l'ouverture d'une pull request". Je conseillerais de le faire à chaque pull Request. Car les pull request me semblent plus adaptées a être utilisées dans un environnement car cela permet d'encourager le feature branching.>

    Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

<"La commande "run" permet de spécifier les différentes commandes à exécuter tandis que la commande, par exemple pour checker le lint on run : npm run lint. "run_on" définit l'environnement de travail(Ubuntu dans notre pipeline)">

    Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

<"La commande "run" permet de spécifier les différentes commandes à exécuter par exemple pour checker le lint on run : npm run lint. Tandis que la commande "use" permet de configurer un environnement ou une action spécifique au niveau du Job en tant que partie du workflow.">

    Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

<"Oui, on peut intervertir l'étape lint avec l'étape prettier car ces 2 étapes ne font que des checks de codes et leurs configurations permettent de travailler ensemble. Mais certaines étapes comme l'installation de nodejs et le npm init ne peuvent pas être changées car tout le reste du code de la pipeline dépend de ces deux actions.">

    Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

<"On devrait se demander si les données sensibles sont bien cachées, si le projet est sensible a des attaques exterieures et on peut utiliser des outils pour analyser le code et nous dire si il est vulnérable">
