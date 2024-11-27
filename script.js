document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = '#f4a261';
        alert('Header color changed!');
    });
});
