const METRICA_COUNTER_ID = XXXXXX; 

(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
    }
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(METRICA_COUNTER_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: "dataLayer" // Раскомментируйте, если используете e-commerce
});

// [ШАБЛОН] Опционально: отслеживание кликов по конкретным элементам (например, "Перейти в каталог")
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.site-link');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ym(METRICA_COUNTER_ID, 'reachGoal', 'click_to_catalog');
        });
    }
});
