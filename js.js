document.addEventListener('DOMContentLoaded', function() {
    console.log('Page fully loaded');

    // Fonction onLoad
    function onPageLoad() {
        console.log('Page chargée');
        addTabIndexToImages();
    }

    // Fonction pour ajouter tabindex
    function addTabIndexToImages() {
        const figures = document.querySelectorAll('figure');
        figures.forEach((figure, index) => {
            figure.setAttribute('tabindex', '0'); // Ajout de tabindex à chaque figure
        });
    }

    // Événement onFocus et onBlur
    document.querySelectorAll('figure').forEach(figure => {
        figure.addEventListener('focus', () => {
            figure.style.border = '2px solid #4CAF50'; // Changement de style pour focus
        });

        figure.addEventListener('blur', () => {
            figure.style.border = ''; // Rétablissement du style d'origine
        });
    });

    // Appel de la fonction onLoad
    onPageLoad();
});