document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    // Функция проверки видимости элемента
    function checkVisibility(element) {
        let boundingRect = element.getBoundingClientRect();

        return (
            boundingRect.top >= 0 &&
            boundingRect.bottom <= window.innerHeight
        );
    }

    // Обработчик события прокрутки
    function handleScroll() {
        reveals.forEach(reveal => {
            if (checkVisibility(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }

    // Добавляем обработчики событий
    window.addEventListener('scroll', handleScroll);
});
