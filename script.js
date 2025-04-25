// Handle explore more button click
document.querySelector('.explore-more').addEventListener('click', function() {
    // Redirect to Ziad's page
    window.location.href = 'Ziad/Ziad/blackbox.html';
});

// Handle user profile click
document.querySelector('.user-profile').addEventListener('click', function() {
    // Redirect to login page
    window.location.href = 'login-signup/project2.html';
});

// Add hover effect to book cards
document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', function() {
        // This would typically open a detailed view of the book
        const bookTitle = this.querySelector('h3').textContent;
        alert(`سيتم عرض تفاصيل الكتاب: ${bookTitle}`);
    });
}); 