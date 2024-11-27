document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const links = document.querySelectorAll("header nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Tooltip for skills
    const badges = document.querySelectorAll(".badge");
    badges.forEach(badge => {
        badge.addEventListener("mouseenter", function () {
            alert(`Skill: ${badge.getAttribute("data-skill")}, Level: ${badge.getAttribute("data-percent")}%`);
        });
    });
});

// Tüm butonları seçin
const buttons = document.querySelectorAll('.card-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const cardContent = this.parentElement;
        const extraInfo = cardContent.querySelector('.extra-info');
        if (extraInfo.classList.contains('hidden')) {
            extraInfo.classList.remove('hidden');
            this.textContent = 'Daha Az Bilgi';
        } else {
            extraInfo.classList.add('hidden');
            this.textContent = 'Daha Fazla Bilgi';
        }
    });
});

