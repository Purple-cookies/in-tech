// Данные мероприятий
const eventsData = [
    { 
        name: "Муниципальный этап Всероссийской командной инженерной олимпиады по 3D-технологиям", 
        month: "декабрь", 
        season: "Зима", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Муниципальный этап Всероссийской командной инженерной олимпиады по 3D-технологиям — это масштабное соревнование для школьников, увлекающихся 3D-моделированием и прототипированием. Участники работают в командах, решая реальные инженерные задачи: от создания 3D-моделей до печати на 3D-принтерах. В программе: объемное рисование, 3D-сканирование, создание прототипов устройств. Победители получают дипломы и возможность участвовать в региональном этапе. Возраст участников: 10-17 лет. Формат: командный. Продолжительность: 2 дня."
    },
    { 
        name: "Региональный отборочный этап олимпиады «Инженеры будущего: 3D-технологии»", 
        month: "февраль", 
        season: "Зима", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Региональный отборочный этап олимпиады «Инженеры будущего: 3D-технологии» — это престижное соревнование, которое собирает лучшие команды из городов региона. Участники демонстрируют навыки 3D-проектирования в программах Blender, Tinkercad, Fusion 360, а также умение работать с 3D-принтерами и 3D-сканерами. Конкурсные задания включают создание инженерных конструкций, дизайн изделий, прототипирование механизмов. Лучшие команды проходят в финал и представляют свой регион на всероссийском уровне. Возраст: 12-18 лет. Обязательна предварительная регистрация."
    },
    { 
        name: "Муниципальный этап конкурса «Молодой изобретатель»", 
        month: "сентябрь", 
        season: "Осень", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "Конкурс «Молодой изобретатель» — это уникальная площадка для юных изобретателей и рационализаторов. Участники представляют свои проекты перед экспертным жюри, в составе которого преподаватели вузов, инженеры и представители бизнеса. Номинации: техническое изобретение, ИТ-проект, экологическая разработка, социальная инженерия. Победители получают ценные призы, сертификаты на обучение и возможность представить свой проект на городской выставке инноваций. Возраст: 7-18 лет. Формат: индивидуальный или командный."
    },
    { 
        name: "Открытые соревнования по радиоуправляемым моделям", 
        month: "сентябрь", 
        season: "Осень", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Зрелищные соревнования по радиоуправляемым моделям — это праздник для всех любителей техники и скорости! Участники соревнуются в управлении радиоуправляемыми машинами, квадрокоптерами и авиамоделями на специально оборудованных трассах. Программа включает: гонки на время, слалом, фристайл, воздушный бой квадрокоптеров. Все участники получают памятные дипломы, а победители — кубки и призы от партнеров. Возраст: 8-18 лет. Модели можно приносить свои или использовать предоставленные организаторами."
    },
    { 
        name: "«Наноград-Сургут»", 
        month: "осенние каникулы", 
        season: "Осень", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "«Наноград-Сургут» — это образовательная интенсив-программа для старшеклассников, интересующихся наукой и технологиями. В течение недели участники погружаются в мир нанотехнологий, биотехнологий и инновационного предпринимательства. Программа включает: лекции от ведущих ученых, мастер-классы по работе в лабораториях, проектные сессии, деловые игры, встречи с предпринимателями. В конце смены команды защищают свои стартап-проекты перед экспертами. Участие бесплатное, по конкурсному отбору. Возраст: 14-17 лет."
    },
    { 
        name: "Неделя высоких технологий и технопредпринимательства", 
        month: "март", 
        season: "Весна", 
        category: "it",categoryName: "IT-направления", 
        description: "Неделя высоких технологий — это ежегодный фестиваль, объединяющий школьников, студентов и профессионалов в сфере IT и инженерии. В течение недели проходят: хакатоны, лекции от лидеров IT-индустрии, мастер-классы по программированию, робототехнике, 3D-моделированию, профориентационные тренинги. Участники могут посетить экскурсии на hi-tech предприятия, поучаствовать в квизах и конкурсах с призами. Специальный трек для родителей: встречи с экспертами по профориентации детей. Вход свободный, требуется регистрация."
    },
    { 
        name: "Чемпионат «Профессионалы» (категория «Юниоры»)", 
        month: "октябрь", 
        season: "Осень", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Чемпионат «Профессионалы» в категории «Юниоры» — это масштабные соревнования профессионального мастерства для школьников. Участники соревнуются в компетенциях: мобильная робототехника, прототипирование, электроника, системное администрирование, веб-дизайн. Конкурсные задания максимально приближены к реальным профессиональным задачам. Победители получают ценные призы, возможность стажировки в технологических компаниях и дополнительные баллы при поступлении в профильные вузы. Возраст: 12-16 лет. Участие по предварительной заявке."
    },
    { 
        name: "Муниципальный этап соревнований по робототехнике", 
        month: "февраль", 
        season: "Зима", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Муниципальные соревнования по робототехнике — это отборочный этап для участия в региональных и всероссийских робототехнических турнирах. Категории: Lego-роботы (WRO), свободная категория, кегельринг, сумо, творческая категория. Участники демонстрируют навыки сборки, программирования и управления роботами. В жюри — эксперты из вузов и инженерных центров. Победители награждаются дипломами и путевками на региональный этап. Возраст: 7-17 лет. Регистрация открывается за месяц до соревнований."
    },
    { 
        name: "Соревнования по моделям метательных планеров «ТехноАвиа»", 
        month: "февраль", 
        season: "Зима", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "Соревнования «ТехноАвиа» посвящены авиамоделированию — одному из самых увлекательных направлений технического творчества. Участники конструируют и запускают модели метательных планеров, соревнуясь в дальности и точности полета. Программа: мастер-классы по аэродинамике и конструированию, теоретическая часть, соревновательный этап. Каждый участник получает набор материалов для изготовления собственного планера. Победители награждаются призами и дипломами. Возраст: 10-16 лет. Участие бесплатное."
    },
    { 
        name: "Турнир по квантошахматам", 
        month: "декабрь", 
        season: "Зима", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "Квантошахматы — это интеллектуальная игра нового поколения, объединяющая классические шахматы и цифровые технологии. Турнир проводится на интерактивных досках с использованием элементов дополненной реальности. Участники не только демонстрируют стратегическое мышление, но и осваивают цифровые инструменты. Программа: мастер-класс по квантошахматам, отборочные туры, финальные партии. Все участники получают сертификаты, победители — кубки и призы. Возраст: 8-18 лет. Требуется предварительная регистрация."
    },
    { 
        name: "IT-хакатон", 
        month: "апрель", 
        season: "Весна", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "IT-хакатон — это 48-часовой марафон разработки для юных программистов, дизайнеров и IT-специалистов. Команды работают над решением реальных кейсов от партнеров — IT-компаний и городских организаций. Номинации: веб-разработка, мобильные приложения, игры, искусственный интеллект. Участникам доступны консультации наставников,кофе-брейки, призы и мерч. Лучшие проекты получают поддержку для дальнейшего развития. Возраст: 12-18 лет. Участие командное (3-5 человек)."
    },
    { 
        name: "Открытый образовательный Хакатон «Про100Дизайн»", 
        month: "март", 
        season: "Весна", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Хакатон «Про100Дизайн» — это соревнование для юных дизайнеров и 3D-моделлеров. Участники создают дизайн-проекты в номинациях: UI/UX дизайн, 3D-моделирование, графический дизайн, промышленный дизайн. Работа проходит в командах с опытными наставниками. В программе: лекции по дизайн-мышлению, работа в профессиональном ПО, защита проектов перед экспертами из индустрии. Победители получают призы и возможность пройти стажировку в дизайн-студиях. Возраст: 12-18 лет. Обязательна регистрация."
    },
    { 
        name: "Медиа-хакатон", 
        month: "май", 
        season: "Весна", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "Медиа-хакатон — это уникальное событие для юных блогеров, видеографов и фотографов. Участники учатся создавать качественный контент о науке и технологиях. Программа: мастер-классы от профессиональных медиаспециалистов, работа над собственными проектами (видеоролики, фоторепортажи, посты в соцсетях), конкурс с призами. Лучшие работы публикуются в официальных сообществах In Tech. Возраст: 10-17 лет. Участие индивидуальное или командное. Вход свободный."
    }
];

// Сортировка месяцев
const monthOrder = {
    "сентябрь": 1, "октябрь": 2, "осенние каникулы": 2.5, "ноябрь": 3,
    "декабрь": 4, "январь": 5, "февраль": 6, "март": 7,
    "апрель": 8, "май": 9
};

const sortedEvents = [...eventsData].sort((a, b) => {
    const orderA = monthOrder[a.month.toLowerCase()] || 99;
    const orderB = monthOrder[b.month.toLowerCase()] || 99;
    return orderA - orderB;
});

let currentFilter = "all";
let currentCategory = "all";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesCount');
    if (badge) badge.textContent = favorites.length;
}

function isFavorite(eventName) {
    return favorites.includes(eventName);
}

function showToast(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function toggleFavorite(eventName) {
    const index = favorites.indexOf(eventName);
    if (index === -1) {
        favorites.push(eventName);
        showToast('❤️ Добавлено в избранное');
    } else {
        favorites.splice(index, 1);
        showToast('🤍 Удалено из избранного');
    }
    saveFavorites();
    renderEvents();
    renderFavorites();
}

function openModal(event) {
    const modal = document.getElementById("eventModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalMonth = document.getElementById("modalMonth");
    const modalSeason = document.getElementById("modalSeason");
    const modalCategory = document.getElementById("modalCategory");
    
    if (!modal || !event) return;
    
    modalTitle.textContent = event.name;
    modalDescription.textContent = event.description;
    modalMonth.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + event.month.charAt(0).toUpperCase() + event.month.slice(1);
    
    let seasonEmoji = "";
    if (event.season === "Зима") seasonEmoji = "❄️";
    else if (event.season === "Весна") seasonEmoji = "🌸";
    else if (event.season === "Осень") seasonEmoji = "🍂";modalSeason.innerHTML = seasonEmoji + " " + event.season;
    
    let categoryEmoji = "";
    if (event.category === "robotics") categoryEmoji = "🤖";
    else if (event.category === "3d") categoryEmoji = "🎨";
    else if (event.category === "it") categoryEmoji = "💻";
    else if (event.category === "innovation") categoryEmoji = "💡";
    modalCategory.innerHTML = categoryEmoji + " " + event.categoryName;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModalWindow() {
    const modal = document.getElementById("eventModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function renderEvents() {
    const eventsGrid = document.getElementById("eventsGrid");
    const eventsCountSpan = document.getElementById("eventsCount");
    if (!eventsGrid) return;
    
    let filtered = sortedEvents.filter(event => {
        const seasonMatch = currentFilter === "all" || event.season === currentFilter;
        const categoryMatch = currentCategory === "all" || event.category === currentCategory;
        return seasonMatch && categoryMatch;
    });
    
    if (eventsCountSpan) eventsCountSpan.textContent = filtered.length;
    
    if (filtered.length === 0) {
        eventsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem;">
            <i class="fas fa-calendar-alt" style="font-size:3rem; opacity:0.5;"></i>
            <p style="margin-top:1rem;">Мероприятий не найдено</p>
        </div>`;
        return;
    }
    
    eventsGrid.innerHTML = filtered.map(event => {
        let seasonClass = "";
        if (event.season === "Зима") seasonClass = "season-winter";
        else if (event.season === "Весна") seasonClass = "season-spring";
        else if (event.season === "Осень") seasonClass = "season-autumn";
        
        let monthIcon = "fa-calendar-alt";
        if (event.month.includes("декабрь") || event.month.includes("февраль")) monthIcon = "fa-snowflake";
        else if (event.month.includes("март") || event.month.includes("апрель")) monthIcon = "fa-seedling";
        else monthIcon = "fa-leaf";
        
        let categoryEmoji = "";
        if (event.category === "robotics") categoryEmoji = "🤖";
        else if (event.category === "3d") categoryEmoji = "🎨";
        else if (event.category === "it") categoryEmoji = "💻";
        else if (event.category === "innovation") categoryEmoji = "💡";
        
        const shortDesc = event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description;
        const isFav = isFavorite(event.name);
        
        return `
            <div class="event-card" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                <button class="favorite-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    ${isFav ? '❤️' : '🤍'}
                </button>
                <div class="event-badge">${event.season}</div>
                <div class="event-month">
                    <i class="fas ${monthIcon}"></i> ${event.month.charAt(0).toUpperCase() + event.month.slice(1)}
                    <span class="event-category">${categoryEmoji} ${event.categoryName}</span>
                </div>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-short-desc">${shortDesc}</p>
                <div class="event-footer">
                    <span class="event-season ${seasonClass}">🏆 ${event.season}</span>
                </div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll('#eventsGrid .favorite-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleFavorite(eventName);
        };
    });
    
    document.querySelectorAll('#eventsGrid .event-card').forEach(card => {
        card.onclick = (e) => {if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) return;
            const eventName = card.getAttribute('data-event-name');
            const event = filtered.find(e => e.name === eventName);
            if (event) openModal(event);
        };
    });
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavorites = document.getElementById('emptyFavorites');
    if (!favoritesGrid) return;
    
    const favoriteEvents = sortedEvents.filter(event => favorites.includes(event.name));
    
    if (favoriteEvents.length === 0) {
        if (emptyFavorites) emptyFavorites.style.display = 'block';
        favoritesGrid.innerHTML = '';
        return;
    }
    
    if (emptyFavorites) emptyFavorites.style.display = 'none';
    
    favoritesGrid.innerHTML = favoriteEvents.map(event => {
        let seasonClass = "";
        if (event.season === "Зима") seasonClass = "season-winter";
        else if (event.season === "Весна") seasonClass = "season-spring";
        else if (event.season === "Осень") seasonClass = "season-autumn";
        
        let monthIcon = "fa-calendar-alt";
        if (event.month.includes("декабрь") || event.month.includes("февраль")) monthIcon = "fa-snowflake";
        else if (event.month.includes("март") || event.month.includes("апрель")) monthIcon = "fa-seedling";
        else monthIcon = "fa-leaf";
        
        let categoryEmoji = "";
        if (event.category === "robotics") categoryEmoji = "🤖";
        else if (event.category === "3d") categoryEmoji = "🎨";
        else if (event.category === "it") categoryEmoji = "💻";
        else if (event.category === "innovation") categoryEmoji = "💡";
        
        const shortDesc = event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description;
        
        return `
            <div class="event-card" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                <button class="favorite-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    ❤️
                </button>
                <div class="event-badge">${event.season}</div>
                <div class="event-month">
                    <i class="fas ${monthIcon}"></i> ${event.month.charAt(0).toUpperCase() + event.month.slice(1)}
                    <span class="event-category">${categoryEmoji} ${event.categoryName}</span>
                </div>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-short-desc">${shortDesc}</p>
                <div class="event-footer">
                    <span class="event-season ${seasonClass}">🏆 ${event.season}</span>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('#favoritesGrid .favorite-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleFavorite(eventName);
        };
    });
    
    document.querySelectorAll('#favoritesGrid .event-card').forEach(card => {
        card.onclick = (e) => {
            if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) return;
            const eventName = card.getAttribute('data-event-name');
            const event = favoriteEvents.find(e => e.name === eventName);
            if (event) openModal(event);
        };
    });
}

function goToEventsWithCategory(category) {
    const aboutSection = document.getElementById("aboutSection");
    const benefitsSection = document.getElementById("benefitsSection");
    const eventsSection = document.getElementById("eventsSection");
    const navTabs = document.querySelectorAll(".nav-tab");
    
    navTabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-tab") === "events") tab.classList.add("active");
    });aboutSection.classList.remove("active");
    benefitsSection.classList.remove("active");
    eventsSection.classList.add("active");
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-category") === category) btn.classList.add("active");
    });
    currentCategory = category;
    
    currentFilter = "all";
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-filter") === "all") btn.classList.add("active");
    });
    renderEvents();
}

function switchTab(tabId) {
    const aboutSection = document.getElementById("aboutSection");
    const benefitsSection = document.getElementById("benefitsSection");
    const eventsSection = document.getElementById("eventsSection");
    const favoritesSection = document.getElementById("favoritesSection");
    const navTabs = document.querySelectorAll(".nav-tab");
    
    navTabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-tab") === tabId) tab.classList.add("active");
    });
    
    aboutSection.classList.remove("active");
    benefitsSection.classList.remove("active");
    eventsSection.classList.remove("active");
    favoritesSection.classList.remove("active");
    
    if (tabId === "about") aboutSection.classList.add("active");
    else if (tabId === "benefits") benefitsSection.classList.add("active");
    else if (tabId === "events") {
        eventsSection.classList.add("active");
        renderEvents();
    } else if (tabId === "favorites") {
        favoritesSection.classList.add("active");
        renderFavorites();
    }
}

function setTheme(theme) {
    const themeIcon = document.getElementById("themeIcon");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        if (themeIcon) themeIcon.textContent = "🌑";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        if (themeIcon) themeIcon.textContent = "☀️";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light");
    
    document.getElementById("themeToggle").onclick = () => {
        const current = document.documentElement.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
    };
    
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.onclick = () => switchTab(tab.getAttribute("data-tab"));
    });
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderEvents();
        };
    });
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderEvents();
        };
    });
    
    document.querySelectorAll(".feature").forEach(feature => {
        feature.onclick = (e) => {
            if (e.target.classList.contains('feature-btn')) return;
            const type = feature.getAttribute("data-filter-type");
            if (type) goToEventsWithCategory(type);
        };
        const btn = feature.querySelector('.feature-btn');
        if (btn) {
            btn.onclick = (e) => {
                e.stopPropagation();
                const type = feature.getAttribute("data-filter-type");
                if (type) goToEventsWithCategory(type);
            };
        }
    });document.getElementById("goToEventsBtn")?.addEventListener("click", () => switchTab("events"));
    document.getElementById("goToEventsFromBenefits")?.addEventListener("click", () => switchTab("events"));
    document.querySelector(".close-modal")?.addEventListener("click", closeModalWindow);
    window.onclick = (e) => { if (e.target === document.getElementById("eventModal")) closeModalWindow(); };
    
    updateFavoritesBadge();
    renderEvents();
    switchTab("about");
});