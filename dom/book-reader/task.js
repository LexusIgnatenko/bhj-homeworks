// Задача 4.3 (Онлайн-читалка) + Повышенный уровень сложности:
const arrOfFontSizes = Array.from(document.querySelectorAll('.font-size'));
let activeFontSize = document.querySelector('.font-size_active');

const arrOfColorsAndBackgrounds = Array.from(document.querySelectorAll('.color'));
let activeColor = Array.from(document.querySelectorAll('.color_active'))[0];
let activeBackground = Array.from(document.querySelectorAll('.color_active'))[1];

const book = document.querySelector('.book');

// Изменение размера шрифта:
arrOfFontSizes.forEach(clickItem => {
    clickItem.addEventListener('click', function (event) {
        event.preventDefault();
        activeFontSize.classList.remove('font-size_active');
        activeFontSize = clickItem;
        activeFontSize.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = event.target.dataset.size;

        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    });
});

arrOfColorsAndBackgrounds.forEach(clickItem => {
    // Изменение цвета шрифта:
    if (clickItem.hasAttribute('data-text-color')) {
        clickItem.addEventListener('click', function (event) {
            event.preventDefault();
            activeColor.classList.remove('color_active');
            activeColor = clickItem;
            activeColor.classList.add('color_active');

            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

            const textColor = event.target.dataset.textColor;

            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
        });
    }
    // Изменение фона:
    if (clickItem.hasAttribute('data-bg-color')) {
        clickItem.addEventListener('click', function (event) {
            event.preventDefault();
            activeBackground.classList.remove('color_active');
            activeBackground = clickItem;
            activeBackground.classList.add('color_active');

            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            const bgColor = event.target.dataset.bgColor;
            console.log(bgColor)
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        });
    }
});
