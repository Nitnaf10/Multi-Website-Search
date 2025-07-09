// Liste des sites de recherche
const sites = [
    { name: "Google", url: "https://www.google.com/search?q=", icon: "https://www.google.com/favicon.ico" },
    { name: "Bing", url: "https://www.bing.com/search?q=", icon: "https://www.bing.com/favicon.ico" },
    { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", icon: "https://duckduckgo.com/favicon.ico" },
    { name: "Duck.ai", url: "https://duckduckgo.com/?q=", icon: "https://duckduckgo.com/favicon.ico" },
    { name: "Ecosia.ai", url: "https://www.ecosia.org/search?q=", icon: "https://www.ecosia.org/favicon.ico" },
    { name: "Qwant", url: "https://www.qwant.com/?q=", icon: "https://www.qwant.com/favicon.ico" },
    { name: "Lilo", url: "https://search.lilo.org/?q=", icon: "https://search.lilo.org/favicon.ico" },
    { name: "Wikipedia", url: "https://fr.wikipedia.org/w/index.php?search=", icon: "https://fr.wikipedia.org/favicon.ico" },
    { name: "YouTube", url: "https://www.youtube.com/results?search_query=", icon: "https://www.youtube.com/favicon.ico" },
    { name: "Amazon", url: "https://www.amazon.fr/s?k=", icon: "https://www.amazon.fr/favicon.ico" },
    { name: "Google Maps", url: "https://www.google.com/maps/search/", icon: "https://www.google.com/images/branding/product/ico/maps15_bnuw3a_32dp.ico" },
    { name: "CodePen", url: "https://codepen.io/search/pens?q=", icon: "https://codepen.io/favicon.ico" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/search?q=", icon: "https://developer.mozilla.org/favicon.ico" },
    { name: "Ecosia", url: "https://www.ecosia.org/search?method=index&q=", icon: "https://www.ecosia.org/favicon.ico" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/search?q=", icon: "https://stackoverflow.com/favicon.ico" },
    { name: "GitHub", url: "https://github.com/search?q=", icon: "https://github.com/favicon.ico" },
    { name: "Reddit", url: "https://www.reddit.com/search?q=", icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" },
    { name: "Pinterest", url: "https://www.pinterest.com/search/pins/?q=", icon: "https://s.pinimg.com/images/favicon.ico" },
    { name: "Yahoo", url: "https://search.yahoo.com/search?p=", icon: "https://s.yimg.com/oa/build/images/favicons/yahoo.png" },
    { name: "Flickr", url: "https://www.flickr.com/search/?text=", icon: "https://www.flickr.com/favicon.ico" },
    { name: "Tumblr", url: "https://www.tumblr.com/search/", icon: "https://www.tumblr.com/favicon.ico" },
    { name: "Quora", url: "https://www.quora.com/search?q=", icon: "https://www.quora.com/favicon.ico" },
    { name: "Spotify", url: "https://open.spotify.com/search/", icon: "https://open.spotify.com/favicon.ico" },
    { name: "Trello", url: "https://trello.com/search?q=", icon: "https://trello.com/favicon.ico" },
    { name: "Slack", url: "https://slack.com/search?q=", icon: "https://slack.com/favicon.ico" },
    { name: "Medium", url: "https://medium.com/search?q=", icon: "https://miro.medium.com/v2/resize:fill:120:120/10fd5c419ac61637245384e7099e131627900034828f4f386bdaa47a74eae156" },
    { name: "Coursera", url: "https://www.coursera.org/search?query=", icon: "https://www.coursera.org/favicon.ico" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/search?page_search_query=", icon: "https://www.khanacademy.org/favicon.ico" },
    { name: "Udemy", url: "https://www.udemy.com/courses/search/?q=", icon: "https://www.udemy.com/staticx/udemy/images/v7/apple-touch-icon.png" },
    { name: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=", icon: "https://www.linkedin.com/favicon.ico" },
    { name: "Codecademy", url: "https://www.codecademy.com/search?q=", icon: "https://www.codecademy.com/favicon.ico" },
    { name: "GitLab", url: "https://gitlab.com/search?search=", icon: "https://gitlab.com/favicon.ico" },
    { name: "Twitch", url: "https://www.twitch.tv/directory/search/", icon: "https://www.twitch.tv/favicon.ico" },
    { name: "Notion", url: "https://www.notion.so/search/", icon: "https://www.notion.so/images/favicon.ico" },
    { name: "Le Monde", url: "https://www.lemonde.fr/recherche/?search_keywords=", icon: "https://www.lemonde.fr/favicon.ico" },
    { name: "Le Bien Public", url: "https://www.bienpublic.com/recherche?q=", icon: "https://www.bienpublic.com/favicon.ico" },
    { name: "Startpage", url: "https://www.startpage.com/do/search?q=", icon: "https://www.startpage.com/favicon.ico" },
    { name: "Search Encrypt", url: "https://www.searchencrypt.com/search?q=", icon: "https://www.searchencrypt.com/favicon.ico" },
    { name: "Mojeek", url: "https://www.mojeek.com/search?q=", icon: "https://www.mojeek.com/favicon.ico" },
    { name: "Yandex", url: "https://yandex.com/search/?text=", icon: "https://yandex.com/favicon.ico" },
    { name: "DuckDuckGo Lite", url: "https://lite.duckduckgo.com/lite/index.php?q=", icon: "https://lite.duckduckgo.com/favicon.ico" },
    { name: "Gibiru", url: "https://gibiru.com/search?q=", icon: "https://gibiru.com/assets/img/favicon.ico" },
    { name: "Boardreader", url: "https://boardreader.com/search?q=", icon: "https://boardreader.com/favicon.ico" },
    { name: "MetaGer", url: "https://metager.org/search?q=", icon: "https://metager.org/favicon.ico" },
    { name: "Ecosia.org", url: "https://www.ecosia.org/search?q=", icon: "https://www.ecosia.org/favicon.ico" },
    { name: "Fark", url: "https://www.fark.com/search?q=", icon: "https://www.fark.com/favicon.ico" },
    { name: "Dogpile", url: "https://www.dogpile.com/search?q=", icon: "https://www.dogpile.com/static/info.dogpile.com/favicon-32x32.png" },
    { name: "Search.com", url: "https://www.search.com/search?q=", icon: "https://www.search.com/favicon.ico" },
    { name: "FindSounds", url: "https://www.findsounds.com/search?q=", icon: "https://www.findsounds.com/favicon.ico" },
    { name: "Yandex Images", url: "https://yandex.com/images/search?text=", icon: "https://yandex.com/favicon.ico" },
    { name: "Bing Images", url: "https://www.bing.com/images/search?q=", icon: "https://www.bing.com/favicon.ico" },
    { name: "Sogou", url: "https://www.sogou.com/web?query=", icon: "https://www.sogou.com/favicon.ico" },
    { name: "Aol Search", url: "https://search.aol.com/aol/search?q=", icon: "https://search.aol.com/favicon.ico" },
    { name: "Search Encrypt", url: "https://www.searchencrypt.com/search?q=", icon: "https://www.searchencrypt.com/favicon.ico" },
    { name: "Google Images", url: "https://images.google.com/search?q=", icon: "https://www.google.com/images/branding/product/ico/googleg_32dp.ico" },
    { name: "Google News", url: "https://news.google.com/search?q=", icon: "https://www.gstatic.com/gnews/logo/google_news_180.png" },
    { name: "Google Shopping", url: "https://www.google.com/shopping?q=", icon: "https://www.gstatic.com/gsx/shopping_favicon-32x32.png" },
    { name: "Google Play", url: "https://play.google.com/store/search?q=", icon: "https://play.google.com/favicon.ico" },
    {name: "Google Font", url: "https://fonts.google.com/?query=", icon: "https://www.gstatic.com/images/branding/product/2x/google_fonts_96dp.png"},
    {name: "Google Font - icons", url: "https://fonts.google.com/icons?query=", icon: "https://www.gstatic.com/images/branding/product/2x/google_fonts_96dp.png"}
];


// Trier les sites par nom
sites.sort((a, b) => a.name.localeCompare(b.name));

// Fonction pour peupler le sélecteur avec les sites enregistrés dans les cookies
function populateSiteSelect() {
    const selectedSites = getSelectedSitesFromCookie();
    const siteSelect = document.getElementById('siteSelect');

    selectedSites.forEach(siteName => {
        const existingOption = Array.from(siteSelect.options).find(option => option.value === siteName);
        if (!existingOption) {
            const option = document.createElement('option');
            option.value = siteName;
            option.textContent = siteName;
            siteSelect.appendChild(option);
        }
    });
}

// Fonction pour afficher les boutons
function displayButtons(filteredSites) {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Réinitialiser le conteneur

    filteredSites.forEach(site => {
        const button = document.createElement('button');
        button.className = 'toggle-button';
        button.setAttribute('data-name', site.name);
        button.setAttribute('data-url', site.url);
        button.innerHTML = `<img alt="${site.name}" src="${site.icon}"> ${site.name}`;
        
        // Vérifier si le site est déjà sélectionné
        if (isSiteSelected(site.name)) {
            button.classList.add('toggle');
        }

        // Ajouter un événement de clic pour toggler le bouton
        button.onclick = () => {
            button.classList.toggle('toggle'); // Toggle la classe 'toggle'
            if (button.classList.contains('toggle')) {
                addSiteToSelect(site); // Ajouter le site au sélecteur
                addSiteToCookie(site.name); // Ajouter le site au cookie
            } else {
                removeSiteFromSelect(site); // Retirer le site du sélecteur
                removeSiteFromCookie(site.name); // Retirer le site du cookie
            }
        };

        buttonContainer.appendChild(button);
    });
}

// Fonction pour ajouter un site au sélecteur
function addSiteToSelect(site) {
    const siteSelect = document.getElementById('siteSelect');
    const existingOption = Array.from(siteSelect.options).find(option => option.value === site.name);
    
    if (!existingOption) {
        const option = document.createElement('option');
        option.value = site.name;
        option.textContent = site.name;
        siteSelect.appendChild(option);
    }
}

// Fonction pour retirer un site du sélecteur
function removeSiteFromSelect(site) {
    const siteSelect = document.getElementById('siteSelect');
    const existingOption = Array.from(siteSelect.options).find(option => option.value === site.name);
    
    if (existingOption) {
        siteSelect.remove(existingOption.index);
    }
}

// Fonction pour vérifier si un site est sélectionné
function isSiteSelected(siteName) {
    const selectedSites = getSelectedSitesFromCookie();
    return selectedSites.includes(siteName);
}

// Fonction pour ajouter un site au cookie
function addSiteToCookie(siteName) {
    const selectedSites = getSelectedSitesFromCookie();
    if (!selectedSites.includes(siteName)) {
        selectedSites.push(siteName);
        document.cookie = `selectedSites=${JSON.stringify(selectedSites)}; path=/;`;
    }
}

// Fonction pour retirer un site du cookie
function removeSiteFromCookie(siteName) {
    let selectedSites = getSelectedSitesFromCookie();
    selectedSites = selectedSites.filter(site => site !== siteName);
    document.cookie = `selectedSites=${JSON.stringify(selectedSites)}; path=/;`;
}

// Fonction pour obtenir les sites sélectionnés depuis le cookie
function getSelectedSitesFromCookie() {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('selectedSites='));
    if (cookieValue) {
        const sites = cookieValue.split('=')[1];
        return JSON.parse(sites);
    }
    return [];
}

// Fonction de filtrage des sites
function filterSites() {
    const searchValue = document.getElementById('siteSearch').value.toLowerCase();
    const filteredSites = sites.filter(site => site.name.toLowerCase().includes(searchValue));
    displayButtons(filteredSites);
}

// Événement pour la barre de recherche des sites
document.getElementById('siteSearch').addEventListener('input', filterSites);

// Événement pour le bouton de recherche
document.getElementById('searchButton').addEventListener('click', () => {
    const selectedSite = document.getElementById('siteSelect').value;
    const query = document.getElementById('query').value;
    if (selectedSite) {
        const site = sites.find(site => site.name === selectedSite);
        if (site) {
            window.open(site.url + encodeURIComponent(query), '_blank');
        }
    }
});

displayButtons(sites);
populateSiteSelect();
