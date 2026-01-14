export function setupFormListener() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        return formData.get('location');
    });
}