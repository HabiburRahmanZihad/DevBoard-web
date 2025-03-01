document.getElementById('dicover-card').addEventListener('click', function () {
    window.location.href = 'blog.html';
});



function getFormattedDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
}

let realDate = getFormattedDate();
document.getElementById('date-real').innerHTML = realDate;