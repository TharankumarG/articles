document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articlesContainer');
    const exploreArticlesBtn = document.getElementById('exploreArticlesBtn');
    const articlesSection = document.getElementById('articlesSection');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Sample article data (you would typically fetch this from an API)
    const articles = [
        {
            id: 1,
            title: "The Future of AI in Everyday Life",
            date: "October 26, 2023",
            author: "Jane Doe",
            shortDescription: "Explore how artificial intelligence is quietly integrating into our daily routines, from smart assistants to personalized recommendations.",
            imageUrl: "https://via.placeholder.com/400x180?text=AI+Future",
            isPublished: true
        },
        {
            id: 2,
            title: "Understanding Blockchain Technology",
            date: "October 20, 2023",
            author: "John Smith",
            shortDescription: "Demystifying the distributed ledger: a beginner's guide to blockchain, cryptocurrencies, and its potential beyond finance.",
            imageUrl: "https://via.placeholder.com/400x180?text=Blockchain",
            isPublished: true
        },
        {
            id: 3,
            title: "Web Development Trends for 2024",
            date: "October 15, 2023",
            author: "Alice Johnson",
            shortDescription: "Stay ahead of the curve with insights into the emerging technologies and frameworks shaping the future of web development.",
            imageUrl: "https://via.placeholder.com/400x180?text=Web+Trends",
            isPublished: true
        },
        {
            id: 4,
            title: "Cybersecurity Best Practices for Remote Work",
            date: "October 10, 2023",
            author: "Bob Williams",
            shortDescription: "Protecting your data and privacy in a remote-first world. Essential tips for individuals and organizations.",
            imageUrl: "https://via.placeholder.com/400x180?text=Cybersecurity",
            isPublished: true
        },
        {
            id: 5,
            title: "The Rise of Quantum Computing",
            date: "October 5, 2023",
            author: "Charlie Brown",
            shortDescription: "An introduction to the revolutionary field of quantum computing and its potential to solve previously intractable problems.",
            imageUrl: "https://via.placeholder.com/400x180?text=Quantum",
            isPublished: true
        },
        {
            id: 6,
            title: "Optimizing Performance in JavaScript Applications",
            date: "September 28, 2023",
            author: "Diana Prince",
            shortDescription: "Tips and tricks to make your JavaScript applications run faster and more efficiently.",
            imageUrl: "https://via.placeholder.com/400x180?text=JS+Optimisation",
            isPublished: true
        }
    ];

    function createArticleCard(article) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const img = document.createElement('img');
        img.src = article.imageUrl;
        img.alt = article.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = article.title;

        const cardSubtitle = document.createElement('h6');
        cardSubtitle.className = 'card-subtitle';
        cardSubtitle.textContent = `${article.author} | ${article.date}`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = article.shortDescription;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = `#article-${article.id}`;
        readMoreLink.textContent = 'Read More';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(readMoreLink);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        return cardDiv;
    }

    // Loop through articles and add to the DOM
    articles.forEach(article => {
        if (article.isPublished) { // Check if article is published
            const card = createArticleCard(article);
            articlesContainer.appendChild(card);
        }
    });

    // Smooth scroll to articles section on button click
    exploreArticlesBtn.addEventListener('click', () => {
        articlesSection.scrollIntoView({ behavior: 'smooth' });
    });
});
