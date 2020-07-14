now = new Date();
hour = now.getHours();

salutation = document.getElementById('salutation');

if (5 <= hour && hour <= 18) {
    salutation.textContent = "Bonjour"
}
else {
    salutation.textContent = "Bonsoir"
}