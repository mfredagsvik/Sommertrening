const players = ["Oscar", "Viktor", "Mikael"];
const weeks = [
  { id: 24, period: "9.–15. juni", title: "Ballkontroll & Pasning" },
  { id: 25, period: "16.–22. juni", title: "Skudd & Dribling" },
  { id: 26, period: "23.–29. juni", title: "Første-touch & Bevegelse" },
  { id: 27, period: "30. juni–6. juli", title: "Kombinasjon & Konkurranse" }
];

const sessions = {
  1: {
    title: "Trening 1",
    intro: "Gjør øvelsene i rolig tempo. Målet er mange ballberøringer og god innsats.",
    exercises: [
      "Oppvarming: jogg lett rundt med ball i 5 minutter",
      "Ballkontroll: trikse 5–10 ganger og prøv med begge bein",
      "Pasning mot vegg: 50 pasninger med høyre og 50 med venstre",
      "Skudd: 20 skudd mot mål eller vegg – bytt fot hver gang"
    ]
  },
  2: {
    title: "Trening 2",
    intro: "Litt mer lek og konkurranse. Prøv å slå din egen rekord.",
    exercises: [
      "Oppvarming: før ballen rolig rundt i 5 minutter",
      "Dribling: slalåm mellom 5 flasker/kjegler i 10 runder",
      "Første-touch: spill ball mot vegg og ta kontroll før neste pasning",
      "Moro: lag egen driblebane eller prøv å slå trikse-rekorden din"
    ]
  }
};

const STORAGE_KEY = "sommertrening_knappetest_v1";
let selectedPlayer = players[0];
let selectedWeek = weeks[0].id;
let selectedSession = 1;

const playerButtons = document.getElementById("playerButtons");
const weekButtons = document.getElementById("weekButtons");
const sessionButtons = document.getElementById("sessionButtons");
const sessionTitle = document.getElementById("sessionTitle");
const sessionIntro = document.getElementById("sessionIntro");
const exerciseList = document.getElementById("exerciseList");
const completeBtn = document.getElementById("completeBtn");
const message = document.getElementById("message");
const completedCount = document.getElementById("completedCount");
const totalPlayers = document.getElementById("totalPlayers");
const completedPlayers = document.getElementById("completedPlayers");
const exportBtn = document.getElementById("exportBtn");
const resetBtn = document.getElementById("resetBtn");

function getRegistrations() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}
function saveRegistrations(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function currentWeek() {
  return weeks.find(w => w.id === selectedWeek);
}
function makeButton(text, subtext, isActive, onClick) {
  const btn = document.createElement("button");
  btn.className = "choice" + (isActive ? " active" : "");
  btn.innerHTML = subtext ? `${text}<small>${subtext}</small>` : text;
  btn.addEventListener("click", onClick);
  return btn;
}
function renderChoices() {
  playerButtons.innerHTML = "";
  players.forEach(player => {
    playerButtons.appendChild(makeButton("👤 " + player, "", player === selectedPlayer, () => {
      selectedPlayer = player;
      message.textContent = "";
      renderAll();
    }));
  });

  weekButtons.innerHTML = "";
  weeks.forEach(week => {
    weekButtons.appendChild(makeButton("Uke " + week.id, `${week.period} · ${week.title}`, week.id === selectedWeek, () => {
      selectedWeek = week.id;
      message.textContent = "";
      renderAll();
    }));
  });

  sessionButtons.innerHTML = "";
  [1, 2].forEach(id => {
    sessionButtons.appendChild(makeButton("⚽ " + sessions[id].title, "", id === selectedSession, () => {
      selectedSession = id;
      message.textContent = "";
      renderAll();
    }));
  });
}
function renderTraining() {
  const week = currentWeek();
  const session = sessions[selectedSession];
  sessionTitle.textContent = `Uke ${week.id}: ${week.title} – ${session.title}`;
  sessionIntro.textContent = session.intro;
  exerciseList.innerHTML = "";
  session.exercises.forEach(exercise => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" /> <span>${exercise}</span>`;
    exerciseList.appendChild(label);
  });
}
function renderStatus() {
  const registrations = getRegistrations().filter(r => r.week === selectedWeek);
  const completed = [...new Set(registrations.map(r => r.player))].sort((a, b) => a.localeCompare(b, "no"));
  completedCount.textContent = completed.length;
  totalPlayers.textContent = players.length;
  completedPlayers.innerHTML = completed.length ? completed.map(name => `<li>${name}</li>`).join("") : "<li>Ingen registrert ennå</li>";
}
function renderAll() {
  renderChoices();
  renderTraining();
  renderStatus();
}
function registerCompleted() {
  const checked = [...exerciseList.querySelectorAll("input")].filter(c => c.checked).length;
  if (checked === 0) {
    message.textContent = "Kryss av minst én øvelse først.";
    return;
  }
  const registrations = getRegistrations();
  registrations.push({
    player: selectedPlayer,
    week: selectedWeek,
    session: selectedSession,
    checkedExercises: checked,
    totalExercises: exerciseList.querySelectorAll("input").length,
    date: new Date().toISOString()
  });
  saveRegistrations(registrations);
  exerciseList.querySelectorAll("input").forEach(c => c.checked = false);
  message.textContent = `Bra jobbet, ${selectedPlayer}! Uke ${selectedWeek}, trening ${selectedSession} er registrert.`;
  renderStatus();
}
function exportCsv() {
  const rows = getRegistrations();
  const header = "Spiller,Uke,Trening,Antall øvelser,Totalt,Dato\n";
  const csv = header + rows.map(r => `${r.player},${r.week},${r.session},${r.checkedExercises},${r.totalExercises},${new Date(r.date).toLocaleString("no-NO")}`).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sommertrening-registreringer.csv";
  a.click();
  URL.revokeObjectURL(url);
}
function resetData() {
  if (confirm("Vil du nullstille alle testregistreringer på denne telefonen?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderStatus();
  }
}
completeBtn.addEventListener("click", registerCompleted);
exportBtn.addEventListener("click", exportCsv);
resetBtn.addEventListener("click", resetData);
renderAll();
