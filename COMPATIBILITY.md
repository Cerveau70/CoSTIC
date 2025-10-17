# Guide de Compatibilité des Couleurs

## Problème résolu
Les couleurs peuvent varier entre différents navigateurs (Chrome, Firefox, Edge, Safari) en raison de différences dans le rendu des couleurs et la gestion des espaces colorimétriques.

## Solutions implémentées

### 1. Variables CSS personnalisées
- Définition de couleurs exactes avec des valeurs hexadécimales fixes
- Utilisation de variables CSS (`:root`) pour garantir la cohérence
- Fallbacks pour les navigateurs plus anciens

### 2. Configuration Tailwind personnalisée
- Couleurs définies dans `tailwind.config.js` avec valeurs exactes
- Classes personnalisées pour les partenaires (`bg-partner-*`)
- Support cross-browser pour les animations

### 3. Classes CSS avec `!important`
- Utilisation de `!important` pour forcer l'application des couleurs
- Évite les conflits avec d'autres styles
- Garantit le rendu identique sur tous les navigateurs

### 4. Support des navigateurs
- **Chrome/Chromium** : Support complet
- **Firefox** : Support complet avec préfixes `-moz-`
- **Safari** : Support complet avec préfixes `-webkit-`
- **Edge** : Support complet avec détection spécifique
- **IE11+** : Support dégradé mais fonctionnel

## Couleurs des partenaires

| Partenaire | Couleur | Code Hex | Classe CSS |
|------------|---------|----------|------------|
| INPHB | Bleu | #2563eb | `bg-partner-blue` |
| UFHB | Vert | #16a34a | `bg-partner-green` |
| ENSEA | Rouge | #dc2626 | `bg-partner-red` |
| UVCI | Violet | #9333ea | `bg-partner-purple` |
| San Pedro | Orange | #ea580c | `bg-partner-orange` |
| Nangui Abrogoua | Indigo | #4f46e5 | `bg-partner-indigo` |
| IRMA | Émeraude | #059669 | `bg-partner-emerald` |
| CRO | Teal | #0d9488 | `bg-partner-teal` |
| Pasteur | Rose | #e11d48 | `bg-partner-rose` |
| UFR | Violet | #7c3aed | `bg-partner-violet` |

## Tests de compatibilité

### Navigateurs testés
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Résolution d'écran
- ✅ 1920x1080 (Full HD)
- ✅ 1366x768 (HD)
- ✅ 2560x1440 (2K)
- ✅ 3840x2160 (4K)

## Maintenance

### Ajout de nouvelles couleurs
1. Ajouter la couleur dans `tailwind.config.js`
2. Définir la variable CSS dans `styles/global.css`
3. Créer les classes utilitaires
4. Tester sur tous les navigateurs

### Mise à jour des couleurs existantes
1. Modifier la valeur hexadécimale dans `tailwind.config.js`
2. Mettre à jour la variable CSS correspondante
3. Vérifier la cohérence visuelle

## Dépannage

### Problème : Couleurs différentes entre navigateurs
**Solution** : Vérifier que les variables CSS sont bien définies et que les classes utilisent `!important`

### Problème : Animations qui ne fonctionnent pas
**Solution** : Vérifier que les préfixes navigateurs sont présents dans le CSS

### Problème : Performance dégradée
**Solution** : Optimiser les animations et utiliser `will-change` pour les éléments animés


