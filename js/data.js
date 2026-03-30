/**
 * Centralized data for the AI Tools Portal.
 * To add a tool: Add a new object to the 'tools' array following the structure below.
 */

const tools = [
  {
    id: "formateur-gamifie",
    title: "FORMATEUR GAMIFIÉ",
    subtitle: "(ChatGPT)",
    type: "ChatGPT",
    image: "assets/images/formateur_gamefie.png",
    url: "https://chatgpt.com/g/g-69b18ce5ef8c81918410524a5bc7eac1-formateur-gamifie",
    shortDescription: "Transforme vos sujets de formation en expériences interactives : scénarios à branchements, storyboards, mini-jeux et contenus modulaires.",
    longDescription: `Expert en ingénierie pédagogique et "Learning Storytelling". Son rôle est de transformer vos sujets de formation en expériences textuelles immersives et interactives. Création de scénarios à branchements, Contenus d'apprentissage modulaires, Storyboards pour vos outils auteurs, Mini-jeux.`,
    needsChatGPTLogin: true
  },
  {
    id: "marketing-assist",
    title: "MARKETING ASSIST",
    subtitle: "(ChatGPT)",
    type: "ChatGPT",
    image: "assets/images/Marketing_assist.png",
    url: "https://chatgpt.com/g/g-69b17bed91d8819180e872ec8458971b-marketing-assist",
    shortDescription: "Votre assistant marketing tout-en-un : 44 workflows couvrant l'audit, la création, le SEO, l'analyse de données, le reporting client et bien plus.",
    longDescription: `Assistant marketing : Audit & Restructuration, Finance & Budget , Création & Copywriting, Analyse & Data, SEO Intégral,Reporting Client
    <br><br>
    L'ensemble des 44 workflows :
    <br>1. Audit express Google Ads
    <br>2. Audit express Meta Ads
    <br>3. Audit express LinkedIn Ads
    <br>4. Audit express Reddit Ads
    <br>5. Diagnostic du wasted spend
    <br>6. Analyse du chevauchement d’audiences
    <br>7. Restructuration de compte publicitaire
    <br>8. Refonte des conventions de nommage
    <br>9. Plan de tracking UTM
    <br>10. Audit de tracking pixels / conversions
    <br>11. Vérification de la qualité des données
    <br>12. Analyse du funnel d’acquisition complet
    <br>13. Analyse du chemin de conversion
    <br>14. Comparaison des modèles d’attribution
    <br>15. Analyse du CPA par segment
    <br>16. Analyse du ROAS marginal
    <br>17. Analyse LTV vs CAC
    <br>18. Prévision budgétaire par canal
    <br>19. Scénarios de scaling budgétaire
    <br>20. Contrôle du pacing media
    <br>21. Réallocation budgétaire cross-canal
    <br>22. Détection des campagnes à couper
    <br>23. Identification des campagnes à scaler
    <br>24. Détection de fatigue créative
    <br>25. Analyse des winners créatifs
    <br>26. Génération de nouvelles variantes d’annonces
    <br>27. Itération d’angles marketing
    <br>28. Recyclage de contenu en ads
    <br>29. Recyclage de contenu en emails
    <br>30. Rédaction de hooks publicitaires
    <br>31. Rédaction de scripts vidéo UGC
    <br>32. Rédaction de copy Meta Ads
    <br>33. Rédaction de copy Google Ads
    <br>34. Rédaction de copy LinkedIn Ads
    <br>35. Audit de landing page orienté conversion
    <br>36. Diagnostic UX/CRO de landing page
    <br>37. Plan de tests A/B landing pages
    <br>38. Analyse statistique de tests A/B
    <br>39. Audit SEO technique
    <br>40. Recherche de mots-clés SEO
    <br>41. Détection de cannibalisation SEO
    <br>42. Stratégie de SEO programmatique
    <br>43. Synthèse hebdomadaire de performance client
    <br>44. Plan d’action priorisé 30/60/90 jours`,
    needsChatGPTLogin: true
  },
  {
    id: "scrapper-linkedin",
    title: "SCRAPPER LINKEDIN",
    subtitle: "(en ligne)",
    type: "App Web",
    image: "assets/images/Srapper_Hunter.png",
    url: "https://scrapper-hunter.vercel.app/",
    shortDescription: "Recherchez par secteur et fonction, et exportez un CSV prêt à l'emploi : entreprise, nom, poste, URL LinkedIn et tentative de tel Pro et email Pro…",
    longDescription: `Permet de rechercher sur linkedin, par secteur d'activité et fonction.
Sortie un CSV avec : Entreprise, Site Web, Domaine, Nom,  Prenom,  Poste, Email Pro, Statut Email, Score Email, Telephone Pro, Type Telephone, Source Telephone, Credits Utilises, 	URL LinkedIn`
  },
  {
    id: "ai-marketing-audit-seo",
    title: "AI MARKETING – AUDIT SEO",
    subtitle: "(en ligne)",
    type: "App Web",
    image: "assets/images/AI MARKETING - AUDIT SEO.png",
    url: "https://ai-marketing-claude.vercel.app/",
    shortDescription: "Auditez automatiquement n'importe quel site : SEO, CTA, tracking, score sur 100 et rapport PDF téléchargeable.",
    longDescription: `Analyse marketing orientée SEO d'un site internet. L'application "AI Marketing Suite" est un outil d'audit de sites web qui évalue automatiquement la performance marketing de n'importe quelle URL. Elle analyse en profondeur plusieurs critères clés comme le SEO, l'efficacité de la conversion (CTA), la confiance et les outils de tracking. Enfin, elle génère un score global sur 100 et offre la possibilité de télécharger un rapport PDF détaillé pour vous aider à optimiser votre stratégie digitale.`
  },
  {
    id: "nano-banana-2",
    title: "NANO BANANA 2 – PROMPT OPTIMIZER",
    subtitle: "(en ligne)",
    type: "App Web",
    image: "assets/images/Nano bannana 2 prompt optimizer.png",
    url: "https://new-nano-bannana-prompt-optimizer-v.vercel.app/",
    shortDescription: "Transformez une idée simple en prompt ultra-optimisé pour la génération d'images, avec option personnage récurrent et analyse JSON.",
    longDescription: `L'application transforme vos idées simples en prompts ultra-optimisés et prêts à l'emploi pour la génération d'images avec Nano Banana 2 ou Gemini. Elle enrichit automatiquement vos requêtes avec des paramètres techniques avancés (mathématiques optiques, imperfections réalistes, negative prompts) pour garantir un rendu professionnel. Avec une option pour la création spécifique de personnages récurrents. Ainsi que la description d’image en code .JSON pour une parfaite compréhension par l’IA.`
  },
  {
    id: "assistant-prospection-b2b",
    title: "ASSISTANT PROSPECTION B2B",
    subtitle: "(ChatGPT)",
    type: "Sequoia (ChatGPT)",
    image: "assets/images/assistant_prospection_B2B.png",
    url: "https://chatgpt.com/g/g-68f8aaa5d330819186847ff66284df18-assistant-expert-en-prospection-b2b",
    shortDescription: "Rédigez des messages de prospection, construisez des offres commerciales et orientez vos prospects selon les expertises Sequoia.",
    longDescription: `<strong>1. Rédiger des messages de prospection</strong>
    <br>Je crée des emails, messages LinkedIn, relances et scripts d’appel, avec un ton cohérent avec Sequoia : stratégique, humain, orienté transformation, engagement et impact.
    <br><br>
    <strong>2. Construire des offres commerciales</strong>
    <br>Je transforme un besoin prospect en proposition claire : contexte, enjeux, recommandation, bénéfices, différenciation et appel à l’action.
    <br><br>
    <strong>3. Positionner les expertises Sequoia selon le bon angle</strong>
    <br>Je peux orienter un prospect vers le bon pôle : 
    <ul>
      <li><strong>People</strong> : communication interne, engagement collaborateur, culture d’entreprise, dispositifs de « new com interne »</li>
      <li><strong>Learning</strong> : expériences formatives, blended learning, brand culture, montée en compétences</li>
      <li><strong>Branding</strong> : plateforme de marque, discours, identité, architecture de marque</li>
      <li><strong>Stories</strong> : contenus éditoriaux, médias corporate, vidéo, podcasts, magazines, storytelling de marque</li>
    </ul>
    <br>
    <strong>4. T’aider à générer des leads plus qualifiés</strong>
    <br>Je peux te proposer :
    <ul>
      <li>des angles d’approche par cible,</li>
      <li>des séquences de relance,</li>
      <li>des arguments différenciants,</li>
      <li>des accroches plus fortes,</li>
      <li>des formulations qui augmentent les chances d’obtenir un rendez-vous.</li>
    </ul>
    <br>
    <strong>En pratique, tu peux me demander par exemple :</strong>
    <ul>
      <li>« rédige un mail de prospection pour une DRH »</li>
      <li>« prépare une offre Sequoia People pour un groupe en transformation »</li>
      <li>« trouve un angle LinkedIn pour vendre Sequoia Learning »</li>
      <li>« retravaille ce message pour qu’il soit plus premium et plus engageant »</li>
    </ul>
    <br>
    <em>Je ne remplace pas le commercial : <strong>je lui fais gagner du temps, de la précision et de l’impact.</strong></em>
    <br>Envoie-moi une cible, un prospect ou un besoin, et je te prépare quelque chose de concret.`,
    needsChatGPTLogin: true
  },
  {
    id: "chercheur-slide-pptx",
    title: "CHERCHEUR DE SLIDE .PPTX",
    subtitle: "(en ligne)",
    type: "Under Construction",
    image: "assets/images/Chercheur de slides.png",
    url: "https://powerpoint-thema-search.vercel.app/",
    shortDescription: "recherche de slides comportant un mot clé ",
    longDescription: `Recherche de slides par mot clé sur le serveur : « Reco » avec prévisualisation du contexte et lien, numéro de la slide et lien vers le fichier powerpoint.`,
    isUnderConstruction: true
  },
  {
    id: "formation-tonalite-ia",
    title: "FORMATION TONALITÉ IA",
    subtitle: "(en ligne)",
    type: "Formation",
    image: "assets/images/formation_tonalite_ia.png",
    url: "https://tonalite-ia.netlify.app",
    shortDescription: "C'est un module de formation en ligne pour maîtriser la tonalité, le style que doit utiliser l'IA pour la rédaction, accompagnée de son pdf (lien en description).",
    longDescription: `C'est une formation prévue pour 1h avec un formateur et une dizaine de personnes, seul 30 mins devrait suffire. Vous pourrez conserver l'essentiel du module sur le pdf : <a href="https://netmediaeu-my.sharepoint.com/:b:/g/personal/rpaolozzi_netmedia_group/IQBRoAjQ5x8rQqrFbjzbMuOtAQYfSGVwCDkm_hvEzyKSx2A?e=83UR15" target="_blank" rel="noopener noreferrer">📄 Télécharger le PDF de la formation</a>`,
    isBonus: true
  }
];

// Exporting the data for use in script.js
window.toolsData = tools;
