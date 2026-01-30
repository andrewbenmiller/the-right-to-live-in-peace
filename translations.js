// Translation system for The Right To Live In Peace
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navMission: "Mission",
        navResources: "Resources",
        navContact: "Contact",
        
        // Common
        siteTitle: "The Right To Live In Peace",
        lastUpdated: "Last Updated",
        emailUs: "Email Us",
        signGuestbook: "Sign Guestbook",
        switchToSpanish: "Cambia al Español",
        switchToEnglish: "Switch to English",
        
        // Home page
        marqueeText: "🌟 Welcome to The Right To Live In Peace - Promoting Harmony and Understanding 🌟",
        words: ['PEACE', 'LOVE', 'HARMONY', 'UNITY', 'HOPE', 'JOY'],
        
        // About page
        aboutContent: "i love katie",
        
        // Mission page
        missionContent: "make katie likey",
        
        // Contact page
        contactContent: "please contact Rondel",
        
        // Guestbook page
        guestbookTitle: "📝 Sign Our Guestbook",
        guestbookIntro: "We'd love to hear from you! Please take a moment to share your thoughts, experiences, or messages of peace. Your words inspire others and help build our community of peace advocates.",
        guestbookEntries: "GUESTBOOK ENTRIES",
        lastEntry: "Last Entry",
        leaveMessage: "✍️ Leave Your Message",
        nameLabel: "Name:",
        emailLabel: "Email:",
        locationLabel: "Location:",
        websiteLabel: "Website:",
        messageLabel: "Message:",
        signGuestbookButton: "Sign Guestbook",
        recentMessages: "📖 Recent Messages",
        viewMoreEntries: "[View More Entries]",
        archive: "[Archive]",
        guestbookQuote: "\"The guestbook is a testament to the power of shared hope and collective action for peace.\" - Our Webmaster",
        guestbookThankYou: "Thank you, {name}!\n\nYour message has been added to our guestbook.\n\nEntry #{entry}\nDate: {date}\n\nThank you for sharing your thoughts about peace!",
        guestbookFillFields: "Please fill in at least your name and message.",
        placeholderLocation: "City, Country",
        placeholderWebsite: "http://",
        placeholderMessage: "Share your thoughts about peace...",
        
        // Resources page
        resourcesNational: "National",
        resourcesBayArea: "Bay Area",
        resourcesOtherNorthern: "Other Northern & Central California",
        resourcesLosAngeles: "Los Angeles",
        resourcesSanDiego: "San Diego",
        resourcesOtherSouthern: "Other Southern California",
        phoneNumber: "Phone Number",
        hotline: "Hotline",
        legalAssistance: "Legal Assistance",
        operatingHours: "Operating Hours",
        website: "Website",
        hours: "Hours of Operation",
        provides: "Provides",
        email: "Email",
        chirlaDescription: "immigration legal services, deportation defense, family unity services, DACA/citizenship assistance, workers' rights, and community education for immigrants nationwide.",
        rapidResponseLegalSupport: "rapid response legal support for Southern California community members detained by immigration enforcement agents.",
        rapidResponseLegalSupportGeneral: "rapid response legal support for community members detained by immigration enforcement agents.",
        sharedHotline: "shared hotline number for Monterey and San Benito Counties",
        counties: "Counties"
    },
    es: {
        // Navigation
        navHome: "Inicio",
        navAbout: "Acerca de",
        navMission: "Misión",
        navResources: "Recursos",
        navContact: "Contacto",
        
        // Common
        siteTitle: "El Derecho a Vivir en Paz",
        lastUpdated: "Última Actualización",
        emailUs: "Envíenos un Correo",
        signGuestbook: "Firmar el Libro de Visitas",
        switchToSpanish: "Cambia al Español",
        switchToEnglish: "Switch to English",
        
        // Home page
        marqueeText: "🌟 Bienvenido a El Derecho a Vivir en Paz - Promoviendo Armonía y Comprensión 🌟",
        words: ['PAZ', 'AMOR', 'ARMONÍA', 'UNIDAD', 'ESPERANZA', 'ALEGRÍA'],
        
        // About page
        aboutContent: "amo a katie",
        
        // Mission page
        missionContent: "hacer que a katie le guste",
        
        // Contact page
        contactContent: "por favor contacte a Rondel",
        
        // Guestbook page
        guestbookTitle: "📝 Firma Nuestro Libro de Visitas",
        guestbookIntro: "¡Nos encantaría saber de usted! Por favor tómese un momento para compartir sus pensamientos, experiencias o mensajes de paz. Sus palabras inspiran a otros y ayudan a construir nuestra comunidad de defensores de la paz.",
        guestbookEntries: "ENTRADAS DEL LIBRO DE VISITAS",
        lastEntry: "Última Entrada",
        leaveMessage: "✍️ Deje Su Mensaje",
        nameLabel: "Nombre:",
        emailLabel: "Correo Electrónico:",
        locationLabel: "Ubicación:",
        websiteLabel: "Sitio Web:",
        messageLabel: "Mensaje:",
        signGuestbookButton: "Firmar Libro de Visitas",
        recentMessages: "📖 Mensajes Recientes",
        viewMoreEntries: "[Ver Más Entradas]",
        archive: "[Archivo]",
        guestbookQuote: "\"El libro de visitas es un testimonio del poder de la esperanza compartida y la acción colectiva por la paz.\" - Nuestro Webmaster",
        guestbookThankYou: "¡Gracias, {name}!\n\nSu mensaje ha sido agregado a nuestro libro de visitas.\n\nEntrada #{entry}\nFecha: {date}\n\n¡Gracias por compartir sus pensamientos sobre la paz!",
        guestbookFillFields: "Por favor complete al menos su nombre y mensaje.",
        placeholderLocation: "Ciudad, País",
        placeholderWebsite: "http://",
        placeholderMessage: "Comparta sus pensamientos sobre la paz...",
        
        // Resources page
        resourcesNational: "Nacional",
        resourcesBayArea: "Área de la Bahía",
        resourcesOtherNorthern: "Otras Áreas del Norte y Centro de California",
        resourcesLosAngeles: "Los Ángeles",
        resourcesSanDiego: "San Diego",
        resourcesOtherSouthern: "Otras Áreas del Sur de California",
        phoneNumber: "Número de Teléfono",
        hotline: "Línea Directa",
        legalAssistance: "Asistencia Legal",
        operatingHours: "Horario de Atención",
        website: "Sitio Web",
        hours: "Horario de Operación",
        provides: "Proporciona",
        email: "Correo Electrónico",
        chirlaDescription: "servicios legales de inmigración, defensa contra deportación, servicios de unidad familiar, asistencia con DACA/ciudadanía, derechos de los trabajadores y educación comunitaria para inmigrantes en todo el país.",
        rapidResponseLegalSupport: "apoyo legal de respuesta rápida para miembros de la comunidad del Sur de California detenidos por agentes de inmigración.",
        rapidResponseLegalSupportGeneral: "apoyo legal de respuesta rápida para miembros de la comunidad detenidos por agentes de inmigración.",
        sharedHotline: "número de línea directa compartido para los condados de Monterey y San Benito",
        counties: "Condados"
    }
};

// Language management
let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    translatePage();
    updateLanguageToggle();
}

function translatePage() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        if (translation) {
            if (element.tagName === 'INPUT') {
                if (element.type === 'submit') {
                    element.value = translation;
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Translate placeholder attributes separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLang][key];
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Translate title (preserve link if it exists)
    const titleElement = document.querySelector('h1[data-i18n-title]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-i18n-title');
        if (translations[currentLang][titleKey]) {
            const link = titleElement.querySelector('a');
            if (link) {
                // Preserve the link and just update its text
                link.textContent = translations[currentLang][titleKey];
            } else {
                titleElement.textContent = translations[currentLang][titleKey];
            }
        }
    }
    
    // Translate marquee
    const marqueeText = document.querySelector('.marquee-text');
    if (marqueeText && translations[currentLang].marqueeText) {
        const text = translations[currentLang].marqueeText;
        marqueeText.innerHTML = text + ' &nbsp;&nbsp;&nbsp;&nbsp; ' + text + ' &nbsp;&nbsp;&nbsp;&nbsp; ' + text + ' &nbsp;&nbsp;&nbsp;&nbsp; ';
    }
    
    // Translate animated words
    if (translations[currentLang].words) {
        window.translatedWords = translations[currentLang].words;
    }
}

function updateLanguageToggle() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = currentLang === 'en' ? translations.en.switchToSpanish : translations.es.switchToEnglish;
        toggle.title = currentLang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés';
    }
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
});

