// Получаем все контейнеры с классом 'rotator'
const rotators = document.querySelectorAll('.rotator');

// Проходим по каждому ротатору отдельно
rotators.forEach(rotator => {
    let cases = Array.from(rotator.children); // Все span-элементы внутри контейнера
    let currentIndex = 0; // Текущий индекс активного элемента

    // Запускаем цикл вращения
    setInterval(() => {
        cases[currentIndex].classList.remove('rotator__case_active'); // Убираем активный класс у текущего элемента
        currentIndex++; // Переходим к следующему элементу
        if (currentIndex === cases.length) currentIndex = 0; // Возвращаемся в начало списка, если достигли конца
        cases[currentIndex].classList.add('rotator__case_active'); // Устанавливаем новый активный элемент
    }, 1000); // Меняем каждую секунду
});
