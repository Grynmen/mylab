// ==========================================
// 1. MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});

// ==========================================
// 2. WORDS OF COMMUNITY CAROUSEL DATA & LOGIC
// ==========================================
const communityQuotes = [
    {
        words: "The strength of a community lies in the trees planted for those yet to come.",
        name: "Mohamed Aseel",
        handle: "@alivaage",
        date: "3rd November 2026"
    },
    {
        words: "Empowering local youth through education is the most sustainable investment we can make.",
        name: "Hussain Jaufar",
        handle: "@bashimaage",
        date: "12th October 2026"
    },
    {
        words: "Together, small actions create massive positive impacts across our island.",
        name: "Hussain Ashrag",
        handle: "@h_OfDragons",
        date: "28th September 2026"
    },
    {
        words: "Proud to see real community development led by driven and passionate individuals.",
        name: "Mariyam",
        handle: "@mariyambu",
        date: "15th August 2026"
    }
];

let currentQuoteIndex = 0;

// DOM Elements
const quoteTextEl = document.querySelector('.words-body .userwords');
const usernameEl = document.querySelector('.words-card-footer .username');
const userhandleEl = document.querySelector('.words-card-footer .useraddress');
const quoteDateEl = document.querySelector('.words-header .date');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

function updateQuote(index) {
    const quoteContainer = document.querySelector('.words-body');
    
    // Smooth transition effect
    quoteContainer.style.opacity = '0';
    quoteContainer.style.transform = 'translateY(4px)';

    setTimeout(() => {
        const item = communityQuotes[index];
        quoteTextEl.textContent = item.words;
        usernameEl.textContent = item.name;
        userhandleEl.textContent = item.handle;
        quoteDateEl.textContent = item.date;

        quoteContainer.style.opacity = '1';
        quoteContainer.style.transform = 'translateY(0)';
    }, 200);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % communityQuotes.length;
        updateQuote(currentQuoteIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex - 1 + communityQuotes.length) % communityQuotes.length;
        updateQuote(currentQuoteIndex);
    });
}
