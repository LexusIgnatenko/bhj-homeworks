document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');
    const tabsContent = document.querySelectorAll('.tab__content')

    tabs.forEach(function (tab, index) {
        tab.onclick = () => {
            if (!tab.classList.contains('tab_active')) {
                for (let index = 0; index < tabs.length; index++) {
                    tabs[index].classList.remove('tab_active');
                    tabsContent[index].classList.remove('tab__content_active');
                }
                tab.classList.add('tab_active');
                tabsContent[index].classList.add('tab__content_active')
            }
        }
    })
});
