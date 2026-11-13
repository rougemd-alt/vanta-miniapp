
const tg = window.Telegram?.WebApp;

// Инициализация Telegram Mini App
if (tg) {
    tg.ready();
    tg.expand();

    // Подстраиваем цвета под интерфейс
    tg.setHeaderColor("#0B0B12");
    tg.setBackgroundColor("#0B0B12");

    // Отключаем вертикальные свайпы закрытия
    if (tg.disableVerticalSwipes) {
        tg.disableVerticalSwipes();
    }
}

// Информация о пользователе Telegram
const telegramUser = tg?.initDataUnsafe?.user;

if (telegramUser) {
    console.log("VANTA user:", telegramUser.id);
}

// Версия приложения
console.log("VANTA Mini App initialized");

