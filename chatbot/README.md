Ce projet a été fait avec NextJs, deployer sur vercel (https://pokechat-five.vercel.app/).

### Techno utilisé

Le ChatBot à été conçu avec NextJS car c'est la techno qu'on a le plus utilisé en cours et dont j'ai les meilleurs connaissance pour créer ce projet.
Malgré que la doc google pour l'API est pas très fourni pour de l'application basé sur NodeJs cela reste pour moi la meilleur option.

### Intégration de l'API

Pour utiliser l'API je me sers du SDK mis en place dans le package '@google/generative-ai' car il met en place l'objet GoogleGenerativeAI permettant de faire des appels simplifier et authentifier.

### Personnalistion du Modèle

Je n'ai pas réussi a effectuer l'authentification et tous le necessaires au service Google pour pouvoir effectuer le fine-tuning.
Si jamais j'avais réussi à le faire j'aurai pu lui passer en donner des pokemons pour formatter sa réponse comme
{"input": "pikachu", "ouput": "Type 1 : Electrique, Type 2: Aucun, Nature: Souris électrique, Numéro: 25}"

### Elaboration du Prompt

Je demande à l'IA de se faire passer pour un dresseur connaissant l'entiereté de pokemon, en prenant en compte le contexte de la discussion.
Les réponses reçu ne sont pas très fiable mais l'AI ne réponds plus sur d'autre sujet.
