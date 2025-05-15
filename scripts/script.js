document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-selector div');
    const bikeImage = document.getElementById('displayBike').querySelector('img');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            bikeImage.classList.add('fade-out');
            
            setTimeout(() => {
                bikeImage.classList.remove('fade-out');

                const selectedColor = option.getAttribute('data-color');
                bikeImage.src = `assets/bikes/mt-09/bike_${selectedColor}.png`;
                bikeImage.alt = `MT-09 ${selectedColor}`;
            }, 500);
        });
    });

    const toTop = document.querySelectorAll(".toTop");

    toTop.forEach(btn => {
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    })

    const toAbout = document.getElementById("toAbout");
    const toShowcase = document.getElementById("toShowcase");

    const about = document.getElementById("about");
    const showcase = document.getElementById("showcase");

    toAbout.addEventListener("click", () => {
        window.scrollTo({
            top: Math.floor(about.offsetTop - 20),
            behavior: "smooth"
        });
    })

    toShowcase.addEventListener("click", () => {
        window.scrollTo({
            top: Math.floor(showcase.offsetTop - 20),
            behavior: "smooth"
        });
    })

    const cursorRounded = document.getElementById('rounded');

    document.body.style.cursor = 'none';

    const moveCursor = (e)=> {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    window.addEventListener('mousemove', moveCursor)
});