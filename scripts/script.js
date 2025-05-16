document.addEventListener('DOMContentLoaded', function() {
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

    const toSpecs = document.getElementById("toSpecs");
    const toShowcase = document.getElementById("toShowcase");

    const specs = document.getElementById("specs");
    const showcase = document.getElementById("showcase");

    toSpecs.addEventListener("click", () => {
        window.scrollTo({
            top: Math.floor(specs.offsetTop - 20),
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

    window.addEventListener('mousemove', moveCursor);


    const copyright = document.getElementById('copyright');
    const year = new Date().getFullYear();

    copyright.innerHTML = `© ${year} Rdap`;
});