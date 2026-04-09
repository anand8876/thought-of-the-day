const quotes = [
    {
        text: "Efficiency is doing things right; effectiveness is doing the right things.",
        author: "Peter Drucker"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Alone we can do so little; together we can do so much.",
        author: "Helen Keller"
    },
    {
        text: "Management is doing things right; leadership is doing the right things.",
        author: "Peter Drucker"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Quality is not an act, it is a habit.",
        author: "Aristotle"
    },
    {
        text: "A leader is one who knows the way, goes the way, and shows the way.",
        author: "John C. Maxwell"
    },
    {
        text: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
        author: "Paul J. Meyer"
    },
    {
        text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation is the ability to see change as an opportunity - not a threat.",
        author: "Steve Jobs"
    },
    {
        text: "The goal is not to be better than the other man, but your previous self.",
        author: "Dalai Lama"
    },
    {
        text: "Excellence is not a skill. It is an attitude.",
        author: "Ralph Marston"
    },
    {
        text: "It's not about ideas. It's about making ideas happen.",
        author: "Scott Belsky"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

let currentQuoteIndex = -1;

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
    
    currentQuoteIndex = newIndex;
    return quotes[currentQuoteIndex];
}

function displayQuote() {
    // Add fade-out effect
    quoteText.classList.add('fade-out');
    quoteAuthor.classList.add('fade-out');

    setTimeout(() => {
        const quote = getRandomQuote();
        quoteText.innerText = quote.text;
        quoteAuthor.innerText = `- ${quote.author}`;
        
        // Remove fade-out to trigger fade-in
        quoteText.classList.remove('fade-out');
        quoteAuthor.classList.remove('fade-out');
    }, 400);
}

function copyToClipboard() {
    const text = `"${quoteText.innerText}" ${quoteAuthor.innerText}`;
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event Listeners
newQuoteBtn.addEventListener('click', displayQuote);
copyBtn.addEventListener('click', copyToClipboard);

// Initial display
window.addEventListener('DOMContentLoaded', displayQuote);
