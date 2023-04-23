const form = document.getElementById('form');
const teamName = document.getElementById('teamName');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const teamNameValue = teamName.value;
    localStorage.setItem('team-name', teamNameValue);
    window.location.href = "offense.html";
})
form.addEventListener('submit', function(e){
    e.preventDefault();
    const teamNameValue = teamName.value;
    localStorage.setItem('team-name', teamNameValue);
    window.location.href = "defense.html";
})	