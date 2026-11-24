const welcomeScreen = document.querySelector("#welcome-screen");
const createScreen = document.querySelector("#create-screen");
const joinScreen = document.querySelector("#join-screen");
const homeScreen = document.querySelector("#home-screen");
const calendarScreen = document.querySelector("#calendar-screen");
const tasksScreen = document.querySelector("#tasks-screen");
const shoppingScreen = document.querySelector("#shopping-screen");
const guidesScreen = document.querySelector("#guides-screen");
const chatScreen = document.querySelector("#chat-screen");
const activeChatScreen = document.querySelector("#active-chat-screen");
const historyScreen = document.querySelector("#history-screen");
const videoPlayerScreen = document.querySelector("#video-player-screen");
const createShoppingScreen = document.querySelector("#create-shopping-screen");
const createTaskScreen = document.querySelector("#create-task-screen");
const taskDetailScreen = document.querySelector("#task-detail-screen");
const taskForm = document.querySelector("#task-form");
const createEventScreen = document.querySelector("#create-event-screen");
const communityScreen = document.querySelector("#community-screen");
const roomieScreen = document.querySelector("#roomie-screen");
const appShell = document.querySelector(".app-shell");
const createForm = document.querySelector("#create-form");
const joinForm = document.querySelector("#join-form");
const roomieForm = document.querySelector("#roomie-form");
const eventForm = document.querySelector("#event-form");
const roomieCount = document.querySelector("#roomie-count");
const communityNameForm = document.querySelector("#community-name-form");
const communityNameRow = document.querySelector(".community-name-row");
const communityNameDisplay = document.querySelector("#community-display-name");
const communityNameNote = document.querySelector(".community-name-card .community-card-note");
const communityNameEditButton = document.querySelector('[data-destination="edit-name"]');
const calendarDayButtons = [...document.querySelectorAll(".calendar-week button")];
const calendarFilterButtons = [...document.querySelectorAll(".calendar-filters button")];
const calendarEvents = document.querySelector(".calendar-events");
const calendarEmpty = document.querySelector(".calendar-empty");
const calendarEditButton = document.querySelector(".calendar-edit");
const roomieProfileAvatar = roomieScreen.querySelector(".roomie-profile .community-avatar");
const roomieProfileName = roomieScreen.querySelector(".roomie-profile strong");
const roomieProfileDescription = roomieScreen.querySelector(".roomie-profile .community-person-text span");
const roomieProfiles = {
    lucas: { name: "Lucas", initial: "L", description: "Roomie - Lejlighed 4B" },
    emma: { name: "Emma", initial: "E", description: "Roomie - Lejlighed 4B" },
    maria: { name: "Maria", initial: "M", description: "Oprettede fællesskabet" }
};
const roomieDrafts = {
    lucas: { name: "Lucas Hansen", email: "", phone: "" },
    emma: { name: "Emma Nielsen", email: "", phone: "" },
    maria: { name: "Maria Erikson", email: "", phone: "" }
};
let activeRoomie = null;
let roomies = 3;
let enteredFromWelcome = false;
let enteredFromHome = false;
let enteredFromCommunity = false;
let currentCommunityName = communityNameDisplay.textContent;
let communityNameEdited = false;
let eventFormOpened = false;
let videoPlayerReturn = "help";
const originalChatMessages = document.querySelector(".active-chat-messages").cloneNode(true);
const historyConversations = [
    null,
    { day: "I GÅR", question: "Hvordan laver vi en billig indkøbsliste til ugen?", answer: "Start med at tjekke, hvad I allerede har. Planlæg ugens måltider sammen, og skriv kun de varer på listen, I mangler.", extra: "Kig efter tilbud, og vælg gerne varer, der kan bruges til flere måltider.", followUp: ["Hvilke retter kan vi lave billigt sammen?", "Prøv for eksempel pastaretter, suppe eller en gryderet med bønner og grøntsager. Resterne kan bruges til frokost dagen efter."] },
    { day: "12. NOV.", question: "Hvordan kan vi dele regninger og fællesudgifter?", answer: "Lav et fælles overblik over husleje, el og andre udgifter, og aftal hvordan I vil fordele dem.", extra: "Skriv aftalen ned, og gennemgå den sammen, hvis jeres behov ændrer sig.", followUp: ["Hvordan holder vi styr på, hvem der har betalt?", "I kan skrive udgifterne og betalingerne i en fælles oversigt. Aftal også en fast dag, hvor I gennemgår den sammen.", "God idé, så tager vi det op på næste fællesmøde.", "Det lyder som en god plan. Så kan alle være med til at aftale, hvad der fungerer bedst for jer."] },
    { day: "7. NOV.", question: "Hvad kan vi købe sammen for at spare penge på mad?", answer: "I kan begynde med fælles basisvarer som ris, pasta, havregryn og grøntsager.", extra: "Planlæg et par fælles måltider, og sammenlign priser, før I handler." }
];

function updateActiveChat(index) {
    const container = document.querySelector(".active-chat-messages");
    container.replaceChildren(...Array.from(originalChatMessages.cloneNode(true).children));
    const conversation = historyConversations[index];
    document.querySelector(".active-chat-day").textContent = conversation ? conversation.day : "I DAG";
    if (!conversation) return;
    container.querySelector(".active-chat-bubble--user p").textContent = conversation.question;
    const paragraphs = container.querySelectorAll(".active-chat-bubble--homie p");
    paragraphs[0].textContent = conversation.answer;
    paragraphs[1].textContent = conversation.extra;
    (conversation.followUp || []).forEach((message, index) => {
        const isUser = index % 2 === 0;
        const bubble = document.createElement("article");
        bubble.className = `active-chat-bubble active-chat-bubble--${isUser ? "user" : "homie"}`;
        const author = document.createElement("strong");
        author.textContent = isUser ? "DIG" : "✦ HOMIE";
        const text = document.createElement("p");
        text.textContent = message;
        bubble.append(author, text);
        container.append(bubble);
    });
}
const videoPlayerGuides = {
    "video-afkalk": {title: "Afkalk badet", subtitle: "En nem guide til en ren bruseniche.", duration: "02:15", color: "green", supplies: ["Kalkfjerner eller eddike", "Svamp eller blød børste", "Vand og en tør klud"], steps: ["Spray afkalker på fliserne", "Lad det virke som anvist", "Skyl grundigt og tør efter"]},
    "video-handle": {title: "5 gode råd til at handle", subtitle: "Tips til indkøb.", duration: "03:10", color: "pink", hasDetails: false},
    "video-opvasker": {
        title: "Gode tips til opvaskeren", subtitle: "Guide til at holde din opvasker.", duration: "01:45", color: "yellow",
        supplies: ["Salt til opvasker", "Afspænding", "Opvasketabs"],
        steps: [
            "Tøm opvaskeren, hvis den er fyldt.",
            "Tag den nederste skuffe ud.",
            "Skru låget af saltbeholderen i bunden af maskinen.",
            "Hæld salt i hullet, til det er fyldt op.",
            "Skru låget på igen.",
            "Åbn afspændingslågen, typisk placeret i opvaskerens låge ved siden af tabsholderen.",
            "Fyld afspænding på, til den er fyldt.",
            "Luk afspændingslågen igen.",
            "Åbn beholderen til tabs og læg en tabs i.",
            "Tjek filteret i bunden af opvaskemaskinen, og sørg for, at det er rent.",
            "Sæt nederste skuffe ind igen.",
            "Start opvaskeren."
        ]
    }
};

function updateVideoPlayer(key) {
    const guide = videoPlayerGuides[key];
    const preview = document.querySelector(".video-player-preview");
    document.querySelector("#video-player-title").textContent = guide.title;
    const subtitle = document.querySelector(".video-player-header p");
    subtitle.textContent = guide.subtitle || "";
    subtitle.hidden = !subtitle.textContent;
    const supplies = document.querySelector(".video-supplies:not(.video-advice)");
    supplies.hidden = !guide.supplies;
    if (guide.supplies) {
        const items = guide.supplies.map((text) => {
            const item = document.createElement("li");
            const dot = document.createElement("span");
            dot.className = "video-supply-dot";
            dot.setAttribute("aria-hidden", "true");
            item.append(dot, document.createTextNode(text));
            return item;
        });
        supplies.querySelector("ul").replaceChildren(...items);
    }
    document.querySelector(".video-advice").hidden = key !== "video-handle";
    const steps = document.querySelector(".video-player-steps");
    steps.hidden = !guide.steps;
    if (guide.steps) {
        steps.querySelector("ol").replaceChildren(...guide.steps.map((text) => {
            const item = document.createElement("li");
            item.textContent = text;
            return item;
        }));
    }
    preview.classList.remove("video-player-preview--green", "video-player-preview--pink", "video-player-preview--yellow");
    preview.classList.add(`video-player-preview--${guide.color}`);
    preview.querySelector("span").textContent = `VIDEO · ${guide.duration}`;
    preview.querySelector("button").setAttribute("aria-label", `Afspil ${guide.title}`);
}

function setCommunityNameEditorOpen(isOpen) {
    communityNameRow.hidden = isOpen;
    communityNameForm.hidden = !isOpen;
    communityNameNote.textContent = isOpen || communityNameEdited
        ? "Ændringen gælder kun, indtil siden genindlæses."
        : "Ændringer bliver synlige for alle roomies.";
    if (isOpen) {
        communityNameForm.elements.communityName.value = currentCommunityName;
        communityNameForm.elements.communityName.focus();
    } else {
        communityNameEditButton.focus();
    }
}

function showRoomie(roomie) {
    if (activeRoomie === roomie) return;

    activeRoomie = roomie;
    roomieProfileAvatar.textContent = roomieProfiles[roomie].initial;
    Object.keys(roomieProfiles).forEach((name) => {
        roomieProfileAvatar.classList.toggle(`community-avatar--${name}`, name === roomie);
    });
    roomieProfileName.textContent = roomieProfiles[roomie].name;
    roomieProfileDescription.textContent = roomieProfiles[roomie].description;
    roomieForm.elements.roomieName.value = roomieDrafts[roomie].name;
    roomieForm.elements.roomieEmail.value = roomieDrafts[roomie].email;
    roomieForm.elements.roomiePhone.value = roomieDrafts[roomie].phone;
    roomieForm.elements.roomieName.setCustomValidity("");
}

function showScreen() {
    const isCreating = window.location.hash === "#create";
    const isJoining = window.location.hash === "#join";
    const isHome = window.location.hash === "#home";
    const isCalendar = window.location.hash === "#calendar";
    const isTasks = window.location.hash === "#tasks";
    const isShopping = window.location.hash === "#shopping";
    const isGuides = window.location.hash === "#help";
    const isChat = window.location.hash === "#chat";
    const chatMatch = window.location.hash.match(/^#active-chat(?:-([0-3]))?$/);
    const isActiveChat = !!chatMatch;
    if (isActiveChat) {
        updateActiveChat(chatMatch[1] === undefined ? 0 : Number(chatMatch[1]));
        document.querySelector(".active-chat-back").setAttribute("aria-label", chatMatch[1] === undefined ? "Tilbage til chatforsiden" : "Tilbage til tidligere samtaler");
    }
    const isHistory = window.location.hash === "#chat-history";
    const videoKey = window.location.hash.slice(1);
    const isVideoPlayer = Object.hasOwn(videoPlayerGuides, videoKey);
    if (isVideoPlayer) updateVideoPlayer(videoKey);
    const isCreateShopping = window.location.hash === "#create-shopping-item";
    const isCreateTask = window.location.hash === "#create-task";
    const taskDetailKey = window.location.hash.replace(/^#task-detail-/, "");
    const isTaskDetail = window.location.hash.startsWith("#task-detail-") && Object.hasOwn(taskDetailContent, taskDetailKey) && !!document.getElementById(taskDetailContent[taskDetailKey].inputId);
    if (isTaskDetail) updateTaskDetails(taskDetailKey);
    const isCreateEvent = window.location.hash === "#create-event";
    if (isCreateEvent) eventFormOpened = true;
    const isCommunity = window.location.hash === "#edit-community";
    const roomie = window.location.hash.slice(6);
    const isRoomie = window.location.hash.startsWith("#edit-") && Object.hasOwn(roomieProfiles, roomie);
    if (isRoomie) showRoomie(roomie);
    welcomeScreen.hidden = isCreating || isJoining || isHome || isCalendar || isTasks || isShopping || isGuides || isChat || isActiveChat || isHistory || isVideoPlayer || isCreateShopping || isCreateTask || isTaskDetail || isCreateEvent || isCommunity || isRoomie;
    createScreen.hidden = !isCreating;
    joinScreen.hidden = !isJoining;
    homeScreen.hidden = !isHome;
    calendarScreen.hidden = !isCalendar;
    tasksScreen.hidden = !isTasks;
    shoppingScreen.hidden = !isShopping;
    guidesScreen.hidden = !isGuides;
    chatScreen.hidden = !isChat;
    activeChatScreen.hidden = !isActiveChat;
    historyScreen.hidden = !isHistory;
    videoPlayerScreen.hidden = !isVideoPlayer;
    createShoppingScreen.hidden = !isCreateShopping;
    createTaskScreen.hidden = !isCreateTask;
    taskDetailScreen.hidden = !isTaskDetail;
    createEventScreen.hidden = !isCreateEvent;
    communityScreen.hidden = !isCommunity;
    roomieScreen.hidden = !isRoomie;
    appShell.classList.toggle("app-shell--home", isHome || isCalendar || isTasks || isShopping || isGuides || isChat || isActiveChat || isHistory || isVideoPlayer || isCreateShopping || isCreateTask || isTaskDetail || isCreateEvent || isCommunity || isRoomie);
    document.title = isCreating
        ? "Opret jeres hjem · Homie"
        : isJoining ? "Tilslut dig fællesskabet · Homie"
            : isHome ? "Home · Homie"
                : isCalendar ? "Kalender · Homie"
                : isTasks ? "Cinderella-listen · Homie"
                : isShopping ? "Indkøbsliste · Homie"
                : isGuides ? "Voksen-ish videobog · Homie"
                : isChat ? "Din personlige homie · Homie"
                : isActiveChat ? "HOMIE · Homie"
                : isHistory ? "Tidligere samtaler · Homie"
                : isVideoPlayer ? `${videoPlayerGuides[videoKey].title} · Homie`
                : isCreateShopping ? "Ny vare · Homie"
                : isCreateTask ? "Ny opgave · Homie"
                : isTaskDetail ? `${document.querySelector("#task-detail-title").textContent} · Homie`
                : isCreateEvent ? "Ny aftale · Homie"
                : isCommunity ? "Rediger fællesskab · Homie"
                    : isRoomie ? "Rediger roomie · Homie" : "Homie.dk";
}

document.querySelectorAll("[data-destination]").forEach((button) => {
    button.addEventListener("click", () => {
        if (["create", "join", "home"].includes(button.dataset.destination)) {
            enteredFromWelcome = true;
            window.location.hash = button.dataset.destination;
            return;
        }

        if (["calendar", "tasks", "shopping", "help"].includes(button.dataset.destination)) {
            window.location.hash = button.dataset.destination;
            return;
        }

        if (button.dataset.destination === "edit-community") {
            enteredFromHome = true;
            window.location.hash = "edit-community";
            return;
        }

        if (button.dataset.destination.startsWith("edit-") &&
            Object.hasOwn(roomieProfiles, button.dataset.destination.slice(5))) {
            enteredFromCommunity = true;
            window.location.hash = button.dataset.destination;
            return;
        }

        if (button.dataset.destination === "edit-name") {
            setCommunityNameEditorOpen(true);
            return;
        }

        if (button.dataset.destination === "create-event") {
            if (!eventFormOpened) {
                eventForm.elements.eventDate.value = calendarDayButtons.find((day) =>
                    day.getAttribute("aria-pressed") === "true").dataset.date;
                updateEventPickerDisplays();
                eventFormOpened = true;
            }
            window.location.hash = "create-event";
            return;
        }

        window.alert("Denne skærm er endnu ikke implementeret.");
    });
});

const taskCards = [...document.querySelectorAll(".task-list-card")];
const taskFilterButtons = [...document.querySelectorAll("[data-task-filter]")];
const homeTasksCard = document.querySelector(".tasks-card");
const homeOverviewDate = "2026-11-12";
function updateHomeTasks() {
    const todayTasks = taskCards.filter((card) => card.isConnected && card.dataset.deadline === homeOverviewDate);
    homeTasksCard.replaceChildren();
    if (!todayTasks.length) {
        const empty = document.createElement("p");
        empty.className = "home-tasks-empty";
        empty.textContent = "Ingen opgaver for dagen.";
        homeTasksCard.append(empty);
        return;
    }
    todayTasks.forEach((card, index) => {
        const row = document.createElement("div");
        row.className = "home-task-row";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `home-task-${index}`;
        checkbox.checked = card.querySelector("input").checked;
        checkbox.addEventListener("change", () => {
            card.querySelector("input").checked = checkbox.checked;
            updateTaskList();
            document.getElementById(checkbox.id)?.focus();
        });
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = card.querySelector("h3").textContent;
        const person = document.createElement("span");
        person.className = `home-task-person ${card.dataset.owner === "maria" ? "home-task-person--you" : "home-task-person--lucas"}`;
        person.textContent = card.dataset.owner === "maria" ? "Dig" : card.querySelector("[data-task-owner]").dataset.taskOwner;
        row.append(checkbox, label, person);
        homeTasksCard.append(row);
    });
}
function updateTaskList() {
    const filter = taskFilterButtons.find((button) => button.getAttribute("aria-pressed") === "true").dataset.taskFilter;
    let completed = 0;
    const activeCards = taskCards.filter((card) => card.isConnected);
    activeCards.forEach((card) => {
        const checked = card.querySelector("input").checked;
        completed += Number(checked);
        const detail = card.querySelector("[data-task-owner]");
        detail.textContent = `${detail.dataset.taskOwner} · ${checked ? "Udført" : (detail.dataset.taskDue || "Ikke udført")}`;
        card.hidden = filter === "mine" ? card.dataset.owner !== "maria" : filter === "done" && !checked;
    });
    document.querySelector("#tasks-progress-text").textContent = `${completed} ud af ${activeCards.length} opgaver klaret`;
    const progress = document.querySelector("#tasks-progress-bar");
    progress.max = Math.max(activeCards.length, 1);
    progress.value = completed;
    document.querySelectorAll(".task-group").forEach((group) => {
        group.hidden = ![...group.querySelectorAll(".task-list-card")].some((card) => !card.hidden);
    });
    document.querySelector(".tasks-empty").hidden = activeCards.some((card) => !card.hidden);
    updateHomeTasks();
}
updateHomeTasks();
const tasksDeleteButton = document.querySelector(".tasks-delete");
tasksDeleteButton.addEventListener("click", () => {
    const editing = tasksDeleteButton.getAttribute("aria-pressed") !== "true";
    tasksDeleteButton.setAttribute("aria-pressed", String(editing));
    tasksDeleteButton.textContent = editing ? "Færdig" : "Slet opgave";
    taskCards.filter((card) => card.isConnected).forEach((card) => {
        let button = card.querySelector(".task-list-delete");
        if (editing && !button) {
            button = document.createElement("button");
            button.type = "button";
            button.className = "task-list-delete";
            button.textContent = "Slet opgave";
            button.setAttribute("aria-label", `Slet ${card.querySelector("h3").textContent}`);
            button.addEventListener("click", () => {
                card.remove();
                updateTaskList();
                tasksDeleteButton.focus();
            });
            card.querySelector(".task-list-text").append(button);
        }
        if (button) button.hidden = !editing;
    });
});
taskFilterButtons.forEach((button) => button.addEventListener("click", () => {
    taskFilterButtons.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
    updateTaskList();
}));
taskCards.forEach((card) => card.querySelector("input").addEventListener("change", updateTaskList));
const taskDetailContent = {
    shower: {inputId: "task-shower", subtitle: "Et rent bad er et fælles ansvar.", steps: ["Spray afkalker på fliserne", "Lad det virke som anvist", "Skyl grundigt og tør efter"], video: "Se video: Afkalk badet"},
    trash: {inputId: "task-trash", subtitle: "Hold køkkenet rent og ryddeligt.", steps: ["Luk affaldsposen", "Bær posen til den rigtige affaldsbeholder", "Sæt en ny pose i skraldespanden"], video: "Se video: Korrekt skraldesortering"},
    counter: {inputId: "task-counter", subtitle: "Et rent køkken er et fælles ansvar.", steps: ["Fjern ting fra bordet", "Tør bordet af med en fugtig klud", "Hvis kluden er klam, smid den ud eller til vask."], video: false}
};
document.querySelectorAll(".task-details").forEach((button) => button.addEventListener("click", () => {
    const input = button.closest(".task-list-card").querySelector("input");
    const key = Object.keys(taskDetailContent).find((name) => taskDetailContent[name].inputId === input.id);
    if (key) window.location.hash = `task-detail-${key}`;
    else window.alert("Der findes endnu ingen detaljer for denne opgave.");
}));
function updateTaskDetails(key) {
    const config = taskDetailContent[key];
    const task = document.getElementById(config.inputId);
    if (!task) return;
    const detail = task.closest(".task-list-card").querySelector("[data-task-owner]");
    document.querySelector("#task-detail-title").textContent = task.closest(".task-list-card").querySelector("h3").textContent;
    document.querySelector(".task-detail-header p").textContent = config.subtitle;
    document.querySelector("#task-detail-person").textContent = detail.dataset.taskOwner;
    document.querySelector("#task-detail-due").textContent = detail.dataset.taskDue;
    const avatar = document.querySelector(".task-detail-owner-card .community-avatar");
    avatar.textContent = detail.dataset.taskOwner.charAt(0).toLocaleUpperCase("da-DK");
    avatar.className = `community-avatar community-avatar--${task.closest(".task-list-card").dataset.owner}`;
    document.querySelectorAll(".task-detail-steps-card li").forEach((item, index) => { item.textContent = config.steps[index]; });
    document.querySelector(".task-detail-video").hidden = !config.video;
    if (config.video) document.querySelector(".task-detail-video strong").textContent = config.video;
    document.querySelector(".task-detail-complete span").textContent = task.checked ? "Markér som ikke udført" : "Markér som udført";
}
document.querySelector(".task-detail-complete").addEventListener("click", () => {
    const key = window.location.hash.replace(/^#task-detail-/, "");
    const task = taskDetailContent[key] && document.getElementById(taskDetailContent[key].inputId);
    if (!task) { window.location.hash = "tasks"; return; }
    task.checked = !task.checked;
    updateTaskList();
    window.location.hash = "tasks";
});
document.querySelector(".task-detail-video").addEventListener("click", () => {
    if (window.location.hash === "#task-detail-shower") {
        videoPlayerReturn = "task-detail-shower";
        document.querySelector(".video-player-back").setAttribute("aria-label", "Tilbage til opgavedetaljer");
        window.location.hash = "video-afkalk";
    } else {
        window.alert("Videoafspilleren for denne guide er endnu ikke implementeret.");
    }
});
document.querySelector(".tasks-add").addEventListener("click", () => {
    window.location.hash = "create-task";
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = taskForm.elements.taskName.value.trim();
    const owner = taskForm.elements.taskOwner.value.trim();
    if (!name || !owner) {
        const field = !name ? taskForm.elements.taskName : taskForm.elements.taskOwner;
        field.setCustomValidity(!name ? "Indtast en opgave." : "Indtast en roomie.");
        field.reportValidity();
        return;
    }
    if (!taskForm.elements.taskDeadline.value) {
        taskDeadlineButton.focus();
        window.alert("Vælg en deadline.");
        return;
    }
    const area = taskForm.elements.taskArea.value;
    const groupId = {kitchen: "task-kitchen-title", bath: "task-bath-title", other: "task-other-title"}[area];
    let heading = document.getElementById(groupId);
    if (!heading) {
        const section = document.createElement("section");
        section.className = "task-group";
        section.setAttribute("aria-labelledby", groupId);
        heading = document.createElement("h2");
        heading.id = groupId;
        heading.textContent = "Andet";
        section.append(heading);
        document.querySelector(".task-groups").append(section);
    }
    const card = document.createElement("article");
    card.className = "task-list-card";
    card.dataset.owner = owner.toLocaleLowerCase("da-DK");
    card.dataset.deadline = taskForm.elements.taskDeadline.value;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", `Marker ${name} som udført`);
    checkbox.addEventListener("change", updateTaskList);
    const text = document.createElement("div");
    text.className = "task-list-text";
    const title = document.createElement("h3");
    title.textContent = name;
    const detail = document.createElement("p");
    const date = new Date(`${taskForm.elements.taskDeadline.value}T12:00:00Z`);
    detail.dataset.taskOwner = owner;
    detail.dataset.taskDue = new Intl.DateTimeFormat("da-DK", {day: "numeric", month: "long", year: "numeric", timeZone: "UTC"}).format(date);
    text.append(title, detail);
    const details = document.createElement("button");
    details.type = "button";
    details.className = "task-details";
    details.setAttribute("aria-label", `Se detaljer for ${name}`);
    const arrow = document.createElement("img");
    arrow.src = "assets/edit-arrow.svg";
    arrow.alt = "";
    details.append(arrow);
    details.addEventListener("click", () => window.alert("Opgavedetaljer bliver tilgængelige i et senere trin."));
    card.append(checkbox, text, details);
    if (tasksDeleteButton.getAttribute("aria-pressed") === "true") tasksDeleteButton.click();
    heading.parentElement.append(card);
    taskCards.push(card);
    taskFilterButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.taskFilter === "all")));
    updateTaskList();
    const repeat = taskForm.elements.taskRepeatWeekly.checked || taskForm.elements.taskRepeatMonthly.checked;
    taskForm.reset();
    taskDeadlineDisplay.textContent = "Vælg en dato";
    taskDeadlineButton.dataset.empty = "true";
    window.location.hash = "tasks";
    showScreen();
    window.alert(repeat ? "Opgaven er tilføjet i denne session. Automatisk gentagelse er ikke sat op, og opgaven forsvinder ved genindlæsning." : "Opgaven er tilføjet i denne session og forsvinder ved genindlæsning.");
});
for (const field of [taskForm.elements.taskName, taskForm.elements.taskOwner]) {
    field.addEventListener("input", () => field.setCustomValidity(""));
}
for (const [selected, other] of [[taskForm.elements.taskRepeatWeekly, taskForm.elements.taskRepeatMonthly], [taskForm.elements.taskRepeatMonthly, taskForm.elements.taskRepeatWeekly]]) {
    selected.addEventListener("change", () => { if (selected.checked) other.checked = false; });
}

function updateCalendar() {
    const selectedDay = calendarDayButtons.find((button) => button.getAttribute("aria-pressed") === "true");
    const selectedCategory = calendarFilterButtons.find((button) => button.getAttribute("aria-pressed") === "true");
    const headingDate = document.querySelector("#calendar-selected-day time");
    headingDate.dateTime = selectedDay.dataset.date;
    headingDate.textContent = selectedDay.getAttribute("aria-label");

    let visibleCount = 0;
    calendarEvents.querySelectorAll(".calendar-event").forEach((event) => {
        const visible = event.dataset.date === selectedDay.dataset.date &&
            (selectedCategory.dataset.category === "all" || event.dataset.category === selectedCategory.dataset.category);
        event.hidden = !visible;
        if (visible) visibleCount += 1;
    });
    calendarEvents.hidden = visibleCount === 0;
    calendarEvents.dataset.visibleCount = String(visibleCount);
    calendarEmpty.hidden = visibleCount !== 0;
    calendarEmpty.textContent = selectedCategory.dataset.category === "all"
        ? "Ingen aftaler for den valgte dag."
        : "Ingen aftaler for det valgte filter.";
}

function updateCalendarEditButtons() {
    const editing = calendarEditButton.getAttribute("aria-pressed") === "true";
    calendarEvents.querySelectorAll(".calendar-event").forEach((item) => {
        let button = item.querySelector(".calendar-event-delete");
        if (editing && !button) {
            button = document.createElement("button");
            button.type = "button";
            button.className = "calendar-event-delete";
            button.textContent = "Slet aftale";
            button.setAttribute("aria-label", `Slet ${item.querySelector("h3").textContent}`);
            item.querySelector(".calendar-event-card").append(button);
        }
        if (button) button.hidden = !editing;
    });
}

calendarEditButton.addEventListener("click", () => {
    const editing = calendarEditButton.getAttribute("aria-pressed") !== "true";
    calendarEditButton.setAttribute("aria-pressed", String(editing));
    calendarEditButton.textContent = editing ? "Færdig" : "Slet aftale";
    updateCalendarEditButtons();
});

calendarEvents.addEventListener("click", (event) => {
    const button = event.target.closest(".calendar-event-delete");
    if (!button) return;
    const item = button.closest(".calendar-event");
    item.remove();
    updateCalendar();
    calendarEditButton.focus();
});

function updateEventPickerDisplays() {
    const dateValue = eventForm.elements.eventDate.value;
    const timeValue = eventForm.elements.eventTime.value;
    const dateDisplay = document.querySelector("#event-date-display");
    if (dateValue) {
        const [year, month, day] = dateValue.split("-").map(Number);
        const date = new Date(Date.UTC(year, month - 1, day));
        dateDisplay.textContent = new Intl.DateTimeFormat("da-DK", {
            day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
        }).format(date);
    } else {
        dateDisplay.textContent = "";
    }
    document.querySelector("#event-time-display").textContent = timeValue.replace(":", ".");
}

function selectCalendarDate(dateValue) {
    const selectedDate = new Date(`${dateValue}T12:00:00Z`);
    const monday = new Date(selectedDate);
    monday.setUTCDate(selectedDate.getUTCDate() - (selectedDate.getUTCDay() + 6) % 7);
    const weekdayNames = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
    const monthFormatter = new Intl.DateTimeFormat("da-DK", {month: "long", timeZone: "UTC"});
    const sunday = new Date(monday);
    sunday.setUTCDate(monday.getUTCDate() + 6);
    document.querySelector(".calendar-week").setAttribute("aria-label",
        `Vælg dag i ugen ${monday.getUTCDate()}. ${monthFormatter.format(monday)} til ` +
        `${sunday.getUTCDate()}. ${monthFormatter.format(sunday)}`);
    document.querySelector("#calendar-month").textContent =
        `${monthFormatter.format(selectedDate)} ${selectedDate.getUTCFullYear()}`;

    calendarDayButtons.forEach((button, index) => {
        const date = new Date(monday);
        date.setUTCDate(monday.getUTCDate() + index);
        const value = date.toISOString().slice(0, 10);
        button.dataset.date = value;
        button.setAttribute("aria-label", `${weekdayNames[index]} ${date.getUTCDate()}. ${monthFormatter.format(date)}`);
        button.querySelector("strong").textContent = String(date.getUTCDate());
        button.setAttribute("aria-pressed", String(value === dateValue));
    });
    updateCalendar();
}

function addCalendarEvent({title, date, time, category, description}) {
    const categoryNames = {shared: "Fælles", guests: "Gæster", other: "Andet"};
    const item = document.createElement("li");
    item.className = "calendar-event";
    item.dataset.date = date;
    item.dataset.time = time;
    item.dataset.category = category;

    const dot = document.createElement("span");
    dot.className = `calendar-event-dot calendar-event-dot--${category}`;
    dot.setAttribute("aria-hidden", "true");
    const card = document.createElement("article");
    card.className = "calendar-event-card";
    const eventTime = document.createElement("time");
    eventTime.dateTime = `${date}T${time}`;
    eventTime.textContent = time.replace(":", ".");
    const badge = document.createElement("span");
    badge.className = `calendar-event-category calendar-event-category--${category}`;
    badge.textContent = categoryNames[category];
    const heading = document.createElement("h3");
    heading.textContent = title;
    card.append(eventTime, badge, heading);
    if (description) {
        const details = document.createElement("p");
        details.textContent = description;
        card.append(details);
    }
    item.append(dot, card);
    calendarEvents.append(item);
    updateCalendarEditButtons();
    [...calendarEvents.children]
        .sort((first, second) => `${first.dataset.date}T${first.dataset.time}`.localeCompare(
            `${second.dataset.date}T${second.dataset.time}`))
        .forEach((event) => calendarEvents.append(event));
}

const datePopup = document.querySelector("#event-date-popup");
const dateButton = document.querySelector("#event-date-button");
const taskDeadlineButton = document.querySelector("#task-deadline-button");
const taskDeadlineDisplay = document.querySelector("#task-deadline-display");
const datePopupDays = document.querySelector(".date-popup-days");
let activeDateButton = dateButton;
let activeDateField = eventForm.elements.eventDate;
let datePopupMonth = new Date(Date.UTC(2026, 10, 1));

function renderDatePopup() {
    const year = datePopupMonth.getUTCFullYear();
    const month = datePopupMonth.getUTCMonth();
    document.querySelector("#date-popup-month").textContent = new Intl.DateTimeFormat("da-DK", {
        month: "long", year: "numeric", timeZone: "UTC"
    }).format(datePopupMonth);
    datePopupDays.replaceChildren();
    const offset = (datePopupMonth.getUTCDay() + 6) % 7;
    for (let index = 0; index < offset; index += 1) datePopupDays.append(document.createElement("span"));
    const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    for (let day = 1; day <= count; day += 1) {
        const date = new Date(Date.UTC(year, month, day));
        const value = date.toISOString().slice(0, 10);
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = String(day);
        button.setAttribute("aria-label", new Intl.DateTimeFormat("da-DK", {
            day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
        }).format(date));
        button.setAttribute("aria-pressed", String(value === activeDateField.value));
        button.addEventListener("click", () => {
            activeDateField.value = value;
            if (activeDateField === taskForm.elements.taskDeadline) {
                taskDeadlineDisplay.textContent = button.getAttribute("aria-label");
                taskDeadlineButton.dataset.empty = "false";
            } else {
                updateEventPickerDisplays();
            }
            closeDatePopup();
            activeDateButton.focus();
        });
        datePopupDays.append(button);
    }
}

function closeDatePopup() {
    datePopup.hidden = true;
    activeDateButton.setAttribute("aria-expanded", "false");
    document.querySelector(".create-task-content").classList.remove("date-picker-open");
}

function openDatePopup(button, field) {
    if (!datePopup.hidden && activeDateButton === button) { closeDatePopup(); return; }
    closeDatePopup();
    closeTimePopup();
    activeDateButton = button;
    activeDateField = field;
    button.parentElement.append(datePopup);
    const fallback = new Date();
    const [year, month] = field.value ? field.value.split("-").map(Number) : [fallback.getFullYear(), fallback.getMonth() + 1];
    datePopupMonth = new Date(Date.UTC(year, month - 1, 1));
    renderDatePopup();
    datePopup.hidden = false;
    if (button === taskDeadlineButton) document.querySelector(".create-task-content").classList.add("date-picker-open");
    button.setAttribute("aria-expanded", "true");
    (datePopup.querySelector('[aria-pressed="true"]') || datePopupDays.querySelector("button")).focus();
    requestAnimationFrame(() => {
        if (datePopup.hidden || activeDateButton !== button) return;
        const navigationTop = button.closest("section[id$='-screen']").querySelector(".home-nav").getBoundingClientRect().top;
        const overlap = datePopup.getBoundingClientRect().bottom - navigationTop + 8;
        if (overlap > 0) window.scrollBy({top: overlap, behavior: "instant"});
    });
}
dateButton.addEventListener("click", () => openDatePopup(dateButton, eventForm.elements.eventDate));
taskDeadlineButton.dataset.empty = "true";
taskDeadlineButton.addEventListener("click", () => openDatePopup(taskDeadlineButton, taskForm.elements.taskDeadline));
datePopup.querySelectorAll("[data-date-month]").forEach((button) => {
    button.addEventListener("click", () => {
        datePopupMonth.setUTCMonth(datePopupMonth.getUTCMonth() + Number(button.dataset.dateMonth));
        renderDatePopup();
    });
});
document.addEventListener("click", (event) => {
    if (!event.target.closest(".event-date-picker")) closeDatePopup();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !datePopup.hidden) { closeDatePopup(); activeDateButton.focus(); }
});

const timePopup = document.querySelector("#event-time-popup");
const timeButton = document.querySelector("#event-time-button");
const timeHour = document.querySelector("#time-hour");
const timeMinute = document.querySelector("#time-minute");
function setTimeWheelValue(wheel, count, value) {
    const number = ((value % count) + count) % count;
    wheel.dataset.value = String(number).padStart(2, "0");
    wheel.setAttribute("aria-valuenow", String(number));
    wheel.setAttribute("aria-valuetext", wheel.dataset.value);
    wheel.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-current", String(button.dataset.value === wheel.dataset.value));
    });
}

for (const [wheel, count] of [[timeHour, 24], [timeMinute, 60]]) {
    for (let index = 0; index < count * 3; index += 1) {
        const button = document.createElement("button");
        button.type = "button";
        button.tabIndex = -1;
        button.dataset.value = String(index % count).padStart(2, "0");
        button.textContent = button.dataset.value;
        button.addEventListener("click", () => { wheel.scrollTop = index * 40; });
        wheel.append(button);
    }
    wheel.addEventListener("scroll", () => {
        let index = Math.round(wheel.scrollTop / 40);
        if (index < count / 2) { index += count; wheel.scrollTop += count * 40; }
        if (index >= count * 2.5) { index -= count; wheel.scrollTop -= count * 40; }
        setTimeWheelValue(wheel, count, index);
    }, {passive: true});
    wheel.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
        event.preventDefault();
        wheel.scrollTop += event.key === "ArrowDown" ? 40 : -40;
    });
}

function closeTimePopup() {
    timePopup.hidden = true;
    timeButton.setAttribute("aria-expanded", "false");
}

timeButton.addEventListener("click", () => {
    if (!timePopup.hidden) { closeTimePopup(); return; }
    closeDatePopup();
    const [hours, minutes] = eventForm.elements.eventTime.value.split(":").map(Number);
    timePopup.hidden = false;
    setTimeWheelValue(timeHour, 24, hours);
    setTimeWheelValue(timeMinute, 60, minutes);
    timeHour.scrollTop = (24 + hours) * 40;
    timeMinute.scrollTop = (60 + minutes) * 40;
    timeButton.setAttribute("aria-expanded", "true");
    timeHour.focus();
    const navigationTop = createEventScreen.querySelector(".home-nav").getBoundingClientRect().top;
    const overlap = timePopup.getBoundingClientRect().bottom - navigationTop + 8;
    if (overlap > 0) window.scrollBy({top: overlap, behavior: "smooth"});
});
timePopup.querySelector(".time-popup-confirm").addEventListener("click", () => {
    eventForm.elements.eventTime.value = `${timeHour.dataset.value}:${timeMinute.dataset.value}`;
    updateEventPickerDisplays();
    closeTimePopup();
    timeButton.focus();
});
document.addEventListener("click", (event) => {
    if (!event.target.closest(".event-time-picker")) closeTimePopup();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !timePopup.hidden) { closeTimePopup(); timeButton.focus(); }
});

eventForm.elements.eventTitle.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
});

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleField = eventForm.elements.eventTitle;
    const title = titleField.value.trim();
    if (!title) {
        titleField.setCustomValidity("Indtast, hvad der skal ske.");
        titleField.reportValidity();
        return;
    }

    const date = eventForm.elements.eventDate.value;
    const time = eventForm.elements.eventTime.value;
    const category = eventForm.elements.eventCategory.value;
    const description = eventForm.elements.eventDescription.value.trim();
    const wantsToShare = eventForm.elements.eventShare.checked;
    addCalendarEvent({title, date, time, category, description});
    calendarFilterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.category === "all"));
    });
    selectCalendarDate(date);
    eventForm.reset();
    updateEventPickerDisplays();
    eventFormOpened = false;
    window.location.hash = "calendar";
    showScreen();
    window.alert(wantsToShare
        ? "Aftalen er tilføjet i denne session. Deling med roomies kræver en backend. Aftalen forsvinder ved genindlæsning."
        : "Aftalen er tilføjet i denne session og forsvinder ved genindlæsning.");
});

calendarDayButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectCalendarDate(button.dataset.date);
    });
});

function shiftCalendarWeek(direction) {
    const selected = calendarDayButtons.find((day) => day.getAttribute("aria-pressed") === "true");
    const date = new Date(`${selected.dataset.date}T12:00:00Z`);
    date.setUTCDate(date.getUTCDate() + direction * 7);
    selectCalendarDate(date.toISOString().slice(0, 10));
}

document.querySelectorAll("[data-week-shift]").forEach((button) => {
    button.addEventListener("click", () => shiftCalendarWeek(Number(button.dataset.weekShift)));
});

const calendarWeek = document.querySelector(".calendar-week");
let calendarTouchStart = null;
calendarWeek.addEventListener("touchstart", (event) => {
    if (event.touches.length === 1) {
        calendarTouchStart = {x: event.touches[0].clientX, y: event.touches[0].clientY};
    } else {
        calendarTouchStart = null;
    }
}, {passive: true});
calendarWeek.addEventListener("touchend", (event) => {
    if (!calendarTouchStart || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - calendarTouchStart.x;
    const dy = event.changedTouches[0].clientY - calendarTouchStart.y;
    calendarTouchStart = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) {
        shiftCalendarWeek(dx < 0 ? 1 : -1);
    }
}, {passive: true});
calendarWeek.addEventListener("touchcancel", () => { calendarTouchStart = null; });

calendarFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calendarFilterButtons.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
        updateCalendar();
    });
});

communityNameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameField = communityNameForm.elements.communityName;
    const newName = nameField.value.trim();
    if (!newName) {
        nameField.setCustomValidity("Indtast et navn på fællesskabet.");
        nameField.reportValidity();
        return;
    }

    currentCommunityName = newName;
    communityNameEdited = true;
    communityNameDisplay.textContent = newName;
    document.querySelector(".home-eyebrow").textContent = newName;
    document.querySelector(".start-option__community-name").textContent = newName;
    for (const roomie of ["lucas", "emma"]) {
        roomieProfiles[roomie].description = `Roomie - ${newName}`;
    }
    if (activeRoomie && activeRoomie !== "maria") {
        roomieProfileDescription.textContent = roomieProfiles[activeRoomie].description;
    }
    setCommunityNameEditorOpen(false);
});

communityNameForm.elements.communityName.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
});

document.querySelector(".community-name-cancel").addEventListener("click", () => {
    setCommunityNameEditorOpen(false);
});

document.querySelectorAll(".back-button").forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("roomie-back")) {
            if (enteredFromCommunity) {
                enteredFromCommunity = false;
                window.history.back();
            } else {
                window.history.replaceState(null, "", window.location.pathname + window.location.search + "#edit-community");
                showScreen();
            }
            return;
        }

        if (button.classList.contains("calendar-back") || button.classList.contains("tasks-back") || button.classList.contains("shopping-back") || button.classList.contains("guides-back")) {
            window.location.hash = "home";
            return;
        }

        if (button.classList.contains("create-event-back")) {
            window.location.hash = "calendar";
            return;
        }

        if (button.classList.contains("create-task-back") || button.classList.contains("task-detail-back")) {
            window.location.hash = "tasks";
            return;
        }

        if (button.classList.contains("create-shopping-back")) {
            window.location.hash = "shopping";
            return;
        }

        if (button.classList.contains("video-player-back")) {
            window.location.hash = videoPlayerReturn;
            return;
        }

        if (button.classList.contains("active-chat-back")) {
            window.location.hash = /^#active-chat-[0-3]$/.test(window.location.hash) ? "chat-history" : "chat";
            return;
        }

        if (button.classList.contains("chat-back")) {
            window.location.hash = "help";
            return;
        }

        if (button.classList.contains("history-back")) {
            window.location.hash = "chat";
            return;
        }

        if (button.classList.contains("community-back")) {
            if (enteredFromHome) {
                enteredFromHome = false;
                window.history.back();
            } else {
                window.history.replaceState(null, "", window.location.pathname + window.location.search + "#home");
                showScreen();
            }
            return;
        }

        if (enteredFromWelcome) {
            enteredFromWelcome = false;
            window.history.back();
        } else {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
            showScreen();
        }
    });
});

document.querySelector(".roomie-counter__decrease").addEventListener("click", () => {
    roomies = Math.max(1, roomies - 1);
    roomieCount.value = `${roomies} ${roomies === 1 ? "roomie" : "roomies"}`;
});

document.querySelector(".roomie-counter__increase").addEventListener("click", () => {
    roomies += 1;
    roomieCount.value = `${roomies} roomies`;
});

createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Oprettelse af et bofællesskab kræver en backend. Dine indtastninger er bevaret i formularen.");
});

joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const invitationCode = joinForm.elements.invitationCode;
    if (!invitationCode.value.trim()) {
        invitationCode.setCustomValidity("Indtast en invitationskode.");
        invitationCode.reportValidity();
        return;
    }
    window.alert("Tilslutning til et bofællesskab kræver en backend. Din kode er bevaret i formularen.");
});

joinForm.elements.invitationCode.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
});

roomieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = roomieForm.elements.roomieName;
    if (!name.value.trim()) {
        name.setCustomValidity("Indtast roomiens navn.");
        name.reportValidity();
        return;
    }
    window.alert("Varige ændringer af roomies kræver en dataforbindelse. Dine indtastninger er bevaret i formularen.");
});

roomieForm.elements.roomieName.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
});

roomieForm.addEventListener("input", () => {
    if (!activeRoomie) return;
    roomieDrafts[activeRoomie] = {
        name: roomieForm.elements.roomieName.value,
        email: roomieForm.elements.roomieEmail.value,
        phone: roomieForm.elements.roomiePhone.value
    };
});

document.querySelector(".roomie-delete").addEventListener("click", () => {
    window.alert("Sletning af en roomie kræver en dataforbindelse og er ikke udført.");
});

const shoppingItems = [
    {name: "Havergryn", addedBy: "Emma", price: "18 kr.", bought: false},
    {name: "Pasta", addedBy: "Lucas", price: "12 kr.", bought: false},
    {name: "Opvaskemiddel", addedBy: "Maria", price: "25 kr.", bought: false},
    {name: "Toiletpapir", addedBy: "Emma", price: "20 kr.", bought: true},
    {name: "Køkkenrulle", addedBy: "Emma", price: "20 kr.", bought: true}
];
const shoppingDeleteButton = document.querySelector(".shopping-delete");
function renderShoppingList(focusIndex = null) {
    const needed = document.querySelector("#shopping-needed");
    const bought = document.querySelector("#shopping-bought");
    needed.replaceChildren();
    bought.replaceChildren();
    let neededCount = 0;
    shoppingItems.forEach((item, index) => {
        if (!item.bought) neededCount += 1;
        const row = document.createElement("li");
        row.className = `shopping-item${item.bought ? " shopping-item--bought" : ""}`;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `shopping-item-${index}`;
        checkbox.checked = item.bought;
        checkbox.addEventListener("change", () => { item.bought = checkbox.checked; renderShoppingList(index); });
        const content = document.createElement("div");
        content.className = "shopping-item-text";
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = item.name;
        content.append(label);
        if (!item.bought && item.addedBy) {
            const added = document.createElement("small");
            added.textContent = `Tilføjet af ${item.addedBy}`;
            content.append(added);
        }
        row.append(checkbox, content);
        if (item.bought && item.buyer) {
            const buyer = document.createElement("span");
            buyer.className = `shopping-buyer${item.buyer === "Maria" ? " shopping-buyer--maria" : ""}`;
            buyer.textContent = item.buyer;
            row.append(buyer);
        }
        if (item.price) {
            const price = document.createElement("span");
            price.className = "shopping-price";
            price.textContent = item.price;
            row.append(price);
        }
        if (shoppingDeleteButton.getAttribute("aria-pressed") === "true") {
            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "shopping-item-delete";
            remove.textContent = "Slet vare";
            remove.setAttribute("aria-label", `Slet ${item.name}`);
            remove.addEventListener("click", () => {
                shoppingItems.splice(index, 1);
                renderShoppingList();
                shoppingDeleteButton.focus();
            });
            row.append(remove);
        }
        (item.bought ? bought : needed).append(row);
    });
    document.querySelector("#shopping-count").textContent = `${neededCount} ${neededCount === 1 ? "vare mangler" : "varer mangler"} · ${shoppingItems.length - neededCount} købt`;
    document.querySelector("#shopping-needed-empty").hidden = neededCount !== 0;
    document.querySelector("#shopping-bought-empty").hidden = neededCount !== shoppingItems.length;
    if (focusIndex !== null) document.getElementById(`shopping-item-${focusIndex}`)?.focus();
}
shoppingDeleteButton.addEventListener("click", () => {
    const editing = shoppingDeleteButton.getAttribute("aria-pressed") !== "true";
    shoppingDeleteButton.setAttribute("aria-pressed", String(editing));
    shoppingDeleteButton.textContent = editing ? "Færdig" : "Slet vare";
    renderShoppingList();
});
document.querySelector(".shopping-add").addEventListener("click", () => {
    window.location.hash = "create-shopping-item";
});
const shoppingForm = document.querySelector("#shopping-form");
shoppingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameField = shoppingForm.elements.itemName;
    const priceField = shoppingForm.elements.itemPrice;
    const personField = shoppingForm.elements.itemPerson;
    const name = nameField.value.trim();
    const person = personField.value.trim();
    const priceText = priceField.value.trim().replace(/\s*kr\.?$/i, "").trim();
    if (!name || !person) {
        const field = !name ? nameField : personField;
        field.setCustomValidity(!name ? "Indtast en vare." : "Indtast navnet på en roomie.");
        field.reportValidity();
        return;
    }
    if (!/^\d+(?:[,.]\d{1,2})?$/.test(priceText)) {
        priceField.setCustomValidity("Indtast en gyldig pris, f.eks. 25 eller 25,50.");
        priceField.reportValidity();
        return;
    }
    const price = `${priceText.replace(".", ",")} kr.`;
    shoppingItems.push({name, addedBy: person, price, bought: false});
    shoppingForm.reset();
    renderShoppingList();
    window.location.hash = "shopping";
});
for (const field of [shoppingForm.elements.itemName, shoppingForm.elements.itemPrice, shoppingForm.elements.itemPerson]) {
    field.addEventListener("input", () => field.setCustomValidity(""));
}
renderShoppingList();

const guideCards = [...document.querySelectorAll(".guide-card")];
document.querySelector("#guides-search-input").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLocaleLowerCase("da-DK");
    guideCards.forEach((card) => { card.hidden = !card.querySelector("strong").textContent.toLocaleLowerCase("da-DK").includes(query); });
    document.querySelector(".guides-empty").hidden = guideCards.some((card) => !card.hidden);
});
guideCards.forEach((card, index) => card.addEventListener("click", () => {
    const routes = ["video-afkalk", "video-handle", "video-opvasker"];
    if (routes[index]) {
        videoPlayerReturn = "help";
        document.querySelector(".video-player-back").setAttribute("aria-label", "Tilbage til videoguides");
        window.location.hash = routes[index];
    } else {
        window.alert("Videoafspilleren for denne guide er endnu ikke implementeret, og der er ikke tilføjet en videokilde.");
    }
}));
document.querySelector(".video-player-play").addEventListener("click", () => {
    window.alert("Der er endnu ikke tilføjet en videofil eller et videolink til denne guide.");
});
document.querySelector(".guides-chat").addEventListener("click", () => {
    window.location.hash = "chat";
});

const historyCards = [...document.querySelectorAll(".history-card")];
document.querySelector(".chat-history-link").addEventListener("click", () => {
    window.location.hash = "chat-history";
});
document.querySelector("#history-search").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLocaleLowerCase("da");
    historyCards.forEach((card) => { card.hidden = !card.textContent.toLocaleLowerCase("da").includes(query); });
    document.querySelector(".history-empty").hidden = historyCards.some((card) => !card.hidden);
});
historyCards.forEach((button, index) => button.addEventListener("click", () => {
    window.location.hash = `active-chat-${index}`;
}));
document.querySelector(".chat-message-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#active-chat-message").value = document.querySelector("#chat-message").value;
    window.location.hash = "active-chat";
});
document.querySelector(".active-chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".active-chat-feedback").textContent = "AI-chatten er ikke tilsluttet, så beskeden er ikke sendt.";
});

window.addEventListener("hashchange", showScreen);
showScreen();
