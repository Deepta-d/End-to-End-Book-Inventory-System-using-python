const addBookForm = document.getElementById('addBookForm');

addBookForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page refresh

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const publicationDate = document.getElementById('publication_date').value;
    const isbn = document.getElementById('isbn').value;

    const bookData = {
        title,
        author,
        genre,
        publication_date: publicationDate,
        isbn
    };

    try {
        const response = await fetch('/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message || 'Book added successfully!');
        } else {
            alert('Failed to add book');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the book');
    }

    addBookForm.reset();
});
