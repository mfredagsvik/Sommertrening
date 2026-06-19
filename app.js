
const players = [
  {name:'Albert Solem', pin:'4827'},
  {name:'Andreas Bachmann-Gregertsen', pin:'6154'},
  {name:'Brage Nordtømme', pin:'2938'},
  {name:'Elias Manum Klungerbo', pin:'7416'},
  {name:'Felix Valla Rogstad', pin:'5281'},
  {name:'Filip Rein Hågensen', pin:'8642'},
  {name:'Håkon Thronæs', pin:'3175'},
  {name:'Ibrahim Mohamed', pin:'9504'},
  {name:'Isak Matheson Sem', pin:'2863'},
  {name:'Jakob Lyngstad Formo', pin:'7048'},
  {name:'Jonas Dahl Pleym', pin:'5419'},
  {name:'Juri Konstantin Glaum', pin:'8731'},
  {name:'Kasper Ohren', pin:'4695'},
  {name:'Leander Saur Blekken', pin:'1287'},
  {name:'Linus Dalsbø', pin:'6352'},
  {name:'Markus Andersen-Keysan', pin:'7924'},
  {name:'Max Groven-Storrøsten', pin:'3518'},
  {name:'Max Jernakov', pin:'6847'},
  {name:'Mikael Renå Hortman', pin:'9173'},
  {name:'Milan Benjaminsen Riise', pin:'2456'},
  {name:'Nicolai Schjetne Kristiansen', pin:'5739'},
  {name:'Olai Sørensen Jacobsen', pin:'8364'},
  {name:'Oleksandr Riabokin', pin:'1948'},
  {name:'Oscar Fredagsvik', pin:'6285'},
  {name:'Oskar Nyheim Stensrud', pin:'4572'},
  {name:'Pascal Philemon Bwinja', pin:'7814'},
  {name:'Peder Jonassen Ekle', pin:'3691'},
  {name:'Peder Rogstad Overrein', pin:'8527'},
  {name:'Rafael Lujala', pin:'2164'},
  {name:'Samir Abdulaziz', pin:'6948'},
  {name:'Syver Nysæter Sagsveen', pin:'4375'},
  {name:'Tobias Øye Amundsen', pin:'9186'},
  {name:'Viktor Rønningen', pin:'5623'},
  {name:'Youssef Alhamada', pin:'7432'}
];


const weeks = [
  {
    week: 26,
    emoji: '⚽',
    theme: 'Ballkontroll',
    tasks: [
      {title:'Triksemester', short:'Prøv å holde ballen i lufta så lenge du klarer.', details:'Bruk fot, lår eller hode. Tell hvor mange du klarer på rad, og prøv å slå din egen rekord. Fullført når du har trikset i minst 5 minutter.'},
      {title:'Veggpasninger', short:'50 pasninger høyre + 50 pasninger venstre mot vegg.', details:'Finn en vegg eller garasjeport. Spill ballen inn i veggen, ta imot kontrollert og spill tilbake. Fullført når begge føtter er brukt.'},
      {title:'Slalåm', short:'Sett ut 5 flasker og drible gjennom dem 10 ganger.', details:'Bruk flasker, sko eller kjegler. Drible rolig først, deretter litt raskere. Fullført når 10 runder er gjennomført.'},
      {title:'Svak fot', short:'Før ballen kun med den foten du bruker minst.', details:'Hold ballen nær foten og prøv å se opp mens du fører. Fullført når du har jobbet i 5 minutter sammenhengende.'},
      {title:'Ballmester', short:'50 tå-touch, 50 innside-touch og 50 utside-touch.', details:'Tå-touch: raske små berøringer oppå ballen. Innside/utside-touch: flytt ballen med innsiden og utsiden av foten. Fullført når alle tre er gjort.'},
      {title:'Crossbar Challenge', short:'10 forsøk på å treffe tverrliggeren.', details:'Legg ballen ved straffemerket eller litt nærmere. Skyt med vrista, ikke tupp. Fullført når alle 10 forsøk er tatt.'}
    ]
  },
  {
    week: 27,
    emoji: '🎯',
    theme: 'Pasning',
    tasks: [
      {title:'Presisjonspasning', short:'Treff et markert område på veggen 25 ganger.', details:'Lag et mål på veggen med tape, kritt eller to kjegler. Tell bare treffene som går inn i området.'},
      {title:'Førstetouch-pasning', short:'Spill ballen rett tilbake uten stopp.', details:'Stå 3–5 meter fra veggen. Spill ballen inn og send den direkte tilbake med kontroll. Prøv 30 ganger.'},
      {title:'Pasning i bevegelse', short:'Flytt deg 2–3 meter mellom hver pasning.', details:'Spill mot veggen, beveg deg til siden, ta imot og spill igjen. Jobb i minst 5 minutter.'},
      {title:'Svak fot-pasning', short:'30 pasninger kun med svak fot.', details:'Bruk bare den foten du vanligvis bruker minst. Fokuser på rolig, presis pasning med innsiden av foten.'},
      {title:'Pasningsrekord', short:'Hvor mange pasninger klarer du på rad uten feil?', details:'Velg en vegg eller en person. Tell pasninger på rad uten at ballen stopper helt eller går bort.'},
      {title:'Pasning + vending', short:'Pasning mot vegg, vending og ny pasning.', details:'Spill mot vegg, ta med ballen rundt deg med en vending, og spill ny pasning. Gjennomfør 20 ganger.'}
    ]
  },
  {
    week: 28,
    emoji: '🔥',
    theme: 'Dribling',
    tasks: [
      {title:'Slalåm-race', short:'10 runder gjennom kjegler.', details:'Sett opp 5 kjegler/flasker. Drible gjennom så kontrollert du klarer. Ta gjerne tiden og prøv å forbedre deg.'},
      {title:'Overstegsfinter', short:'20 overstegsfinter.', details:'Gjør oversteg med høyre og venstre. Etter finta skal du rykke forbi en kjegle, flaske eller tenkt motspiller.'},
      {title:'Cruyff-vending', short:'15 vendinger.', details:'Lat som du skal skyte, men dra ballen bak støttefoten og vend. Gjør vendingen begge veier.'},
      {title:'Dribleløype', short:'Lag din egen løype.', details:'Bruk flasker, sko eller kjegler. Løypa må inneholde slalåm, vending og skudd/pasning til slutt.'},
      {title:'Tidsutfordring', short:'Ta tiden og prøv å slå rekorden.', details:'Kjør samme dribleløype 3 ganger. Noter beste tid, men viktigst: ha kontroll på ballen.'},
      {title:'1 mot 1', short:'Mot søsken, forelder eller en kjegle.', details:'Prøv en finte og rykk forbi. Har du ingen å spille mot, bruk en kjegle som motspiller. Gjør 15 forsøk.'}
    ]
  },
  {
    week: 29,
    emoji: '🚀',
    theme: 'Skudd',
    tasks: [
      {title:'20 skudd høyre fot', short:'Skyt 20 ganger med høyre fot.', details:'Bruk vrista, ikke tupp. Prøv å treffe mål eller et markert område på vegg.'},
      {title:'20 skudd venstre fot', short:'Skyt 20 ganger med venstre fot.', details:'Ikke tenk på hardt skudd først. Fokuser på treff og riktig teknikk.'},
      {title:'Treff høyre hjørne', short:'Treff høyre hjørne 5 ganger.', details:'Sett et mål i hjørnet med en jakke, flaske eller kjegle. Tell kun treff.'},
      {title:'Treff venstre hjørne', short:'Treff venstre hjørne 5 ganger.', details:'Samme som høyre hjørne, men nå sikter du motsatt side.'},
      {title:'Skudd etter dribling', short:'Drible 5–10 meter og avslutt med skudd.', details:'Start med ball, før den framover, gjør en liten vending eller finte, og skyt. Gjør 15 forsøk.'},
      {title:'Crossbar Challenge', short:'10 forsøk på å treffe tverrliggeren.', details:'Velg avstand etter nivå. Det viktigste er å treffe ballen rent med vrista.'}
    ]
  },
  {
    week: 30,
    emoji: '🎾',
    theme: 'Førstetouch',
    tasks: [
      {title:'Kast opp ballen og demp', short:'Kast ballen opp og demp med fot.', details:'Kast ballen opp, demp med foten og få kontroll på bakken. Gjør 20 forsøk.'},
      {title:'Demp med lår', short:'Demp ballen med låret.', details:'Kast ballen opp, møt ballen med låret og la den falle kontrollert ned. Gjør 20 forsøk.'},
      {title:'Demp med bryst', short:'Demp ballen med brystet.', details:'Kast ballen opp foran deg, demp rolig med brystet og få kontroll med foten etterpå. Gjør 15 forsøk.'},
      {title:'Førstetouch til høyre', short:'Ta første touch ut til høyre.', details:'Spill mot vegg eller få kast. Første touch skal flytte ballen til høyre før du spiller/skytter videre.'},
      {title:'Førstetouch til venstre', short:'Ta første touch ut til venstre.', details:'Samme øvelse, men første touch skal flytte ballen til venstre. Gjør 20 forsøk.'},
      {title:'Demp + skudd', short:'Demp ballen og avslutt med skudd.', details:'Kast eller få ballen, demp kontrollert, ta ett steg og skyt. Gjør 15 forsøk.'}
    ]
  },
  {
    week: 31,
    emoji: '⚡',
    theme: 'Hurtighet',
    tasks: [
      {title:'10 spurter på 20 meter', short:'Sprint 20 meter 10 ganger.', details:'Gå rolig tilbake mellom hver spurt. Prøv å starte eksplosivt.'},
      {title:'Reaksjonsstart', short:'Start på signal.', details:'Få en voksen/søsken til å rope «gå», eller start når en ball slippes. Gjør 10 starter.'},
      {title:'Sidelengs løp', short:'Løp sidelengs og vend retning.', details:'Sett to merker 5 meter fra hverandre. Løp sidelengs fram og tilbake 10 runder.'},
      {title:'Rykk med ball', short:'Før rolig, rykk raskt.', details:'Før ballen rolig 5 meter, rykk så 10 meter med høy fart. Gjør 10 repetisjoner.'},
      {title:'Stoppe og starte', short:'Full stopp og rask start med ball.', details:'Drible fram, stopp ballen helt, og start raskt igjen. Gjør 20 ganger.'},
      {title:'Hurtighetsløype', short:'Lag en løype med sprint, vending og ball.', details:'Bruk 3–5 merker. Løypa skal ha sprint, vending og føring med ball. Kjør 5 runder.'}
    ]
  },
  {
    week: 32,
    emoji: '👑',
    theme: 'Sommermester',
    tasks: [
      {title:'Trikseutfordring', short:'Prøv å slå sommerens trikse-rekord.', details:'Tell beste forsøk. Du kan bruke fot, lår og hode.'},
      {title:'Veggpasninger', short:'100 pasninger mot vegg.', details:'Velg selv fordeling mellom høyre og venstre, men prøv å bruke begge føtter.'},
      {title:'Slalåm', short:'10 runder gjennom flasker/kjegler.', details:'Kjør kontrollert først, deretter prøver du å slå egen tid.'},
      {title:'Skuddutfordring', short:'20 skudd mot mål eller vegg.', details:'Prøv minst 5 skudd med svak fot.'},
      {title:'Crossbar Challenge', short:'10 forsøk på tverrliggeren.', details:'Velg avstand selv. Klarer du minst ett treff?'},
      {title:'Favorittøvelse', short:'Velg hvilken som helst øvelse fra sommeren.', details:'Velg den øvelsen du likte best fra uke 26–31, og gjør den én gang til.'}
    ]
  }
];



// Ukevisning for spillerne:
// Spillerne får bare åpne uker som trenerne har huket av i trenerpanelet.
// Før trenerne har lagret egne valg, åpnes uker automatisk etter startdato.
// For testing kan du åpne GitHub Pages med ?uke=26, ?uke=27 osv.
const FIRST_SUMMER_WEEK = 26;
const LAST_SUMMER_WEEK = 32;

// Datoer for sommertreningen 2025.
const WEEK_DATES = {
  26: { start: '2025-06-23', end: '2025-06-29' },
  27: { start: '2025-06-30', end: '2025-07-06' },
  28: { start: '2025-07-07', end: '2025-07-13' },
  29: { start: '2025-07-14', end: '2025-07-20' },
  30: { start: '2025-07-21', end: '2025-07-27' },
  31: { start: '2025-07-28', end: '2025-08-03' },
  32: { start: '2025-08-04', end: '2025-08-10' }
};

function parseLocalDate(iso){
  const [y,m,d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function formatNorDate(iso){
  return parseLocalDate(iso).toLocaleDateString('no-NO', { day: 'numeric', month: 'long' });
}
function weekDateText(weekNo){
  const d = WEEK_DATES[weekNo];
  return d ? `${formatNorDate(d.start)} – ${formatNorDate(d.end)}` : '';
}
function daysUntil(iso){
  const today = new Date();
  const startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil((parseLocalDate(iso) - startToday) / 86400000);
}
let remoteOpenWeeks = null;

function autoOpenWeeksByDate(){
  const today = new Date();
  const opened = [];
  weeks.forEach(w => {
    const d = WEEK_DATES[w.week];
    if(d && today >= parseLocalDate(d.start)) opened.push(w.week);
  });
  return opened.length ? opened : [FIRST_SUMMER_WEEK];
}
function getUrlWeekOverride(){
  const params = new URLSearchParams(window.location.search);
  const testWeek = Number(params.get('uke'));
  return (testWeek >= FIRST_SUMMER_WEEK && testWeek <= LAST_SUMMER_WEEK) ? testWeek : null;
}
function normalizeWeeks(arr){
  return [...new Set((arr || []).map(Number).filter(n => n >= FIRST_SUMMER_WEEK && n <= LAST_SUMMER_WEEK))].sort((a,b)=>a-b);
}
function getOpenWeeks(){
  const urlWeek = getUrlWeekOverride();
  if(urlWeek) return [urlWeek];
  if(Array.isArray(remoteOpenWeeks) && remoteOpenWeeks.length) return normalizeWeeks(remoteOpenWeeks);
  const saved = localStorage.getItem('trainerOpenWeeks');
  if(saved){
    try { return normalizeWeeks(JSON.parse(saved)); } catch(e) {}
  }
  return autoOpenWeeksByDate();
}
function getActiveWeekNumber(){
  const open = getOpenWeeks();
  if(open.length) return Math.max(...open);
  return FIRST_SUMMER_WEEK;
}
function isWeekOpen(weekNo){ return getOpenWeeks().includes(Number(weekNo)); }
function weekOpenText(w){
  const d = WEEK_DATES[w.week];
  const open = isWeekOpen(w.week);
  const active = getActiveWeekNumber();
  if(open && w.week === active) return 'Åpen – aktiv uke';
  if(open) return 'Åpen';
  if(!d) return 'Låst';
  const left = daysUntil(d.start);
  return left > 0 ? `Låst – planlagt ${formatNorDate(d.start)} (${left} dager)` : `Låst – åpnes av trener`;
}
function nextWeekInfo(){
  const open = getOpenWeeks();
  const maxOpen = open.length ? Math.max(...open) : FIRST_SUMMER_WEEK - 1;
  const next = weeks.find(w => w.week > maxOpen);
  if(!next) return null;
  const d = WEEK_DATES[next.week];
  const left = d ? daysUntil(d.start) : null;
  return { week: next, date: d, days: left };
}
function activeWeekInfoText(){
  const open = getOpenWeeks();
  const active = getActiveWeekNumber();
  const next = nextWeekInfo();
  const openText = open.length ? `Åpne uker: ${open.map(w => 'Uke ' + w).join(', ')}. Aktiv visning: Uke ${active} (${weekDateText(active)})` : 'Ingen uker er åpnet.';
  if(!next || !next.date) return openText;
  const countdown = next.days > 0 ? `Planlagt om ${next.days} dager` : 'Kan åpnes nå';
  return `${openText}. Neste uke: Uke ${next.week.week} åpner ${formatNorDate(next.date.start)} – ${countdown}.`;
}

// 1) Lim inn Google Apps Script Web App URL her etter oppsett.
// Eksempel: const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyndKuRR36vWvmWgEdkG1QI-hpVFWH92QHS0Ilvv6BOCh4p2jJyxLanW2caw9vXoIS6Ew/exec';
const TRAINER_PIN = '2014';
const TEAM_EXERCISE_GOAL = 500;
const BRONZE_EXERCISES = 10;
const SILVER_EXERCISES = 20;
const GOLD_EXERCISES = 30;
const SUMMERMASTER_EXERCISES = 42;

let currentPlayer = localStorage.getItem('currentPlayer') || null;
let currentWeek = null;
let remoteLogs = [];

const $ = id => document.getElementById(id);
const key = (player, week) => `tasks_${player}_uke_${week}`;

function getSavedTasks(player, week){ return JSON.parse(localStorage.getItem(key(player, week)) || '[]'); }
function saveTasks(player, week, arr){ localStorage.setItem(key(player, week), JSON.stringify(arr)); }
function completedCount(player, week){ return getSavedTasks(player, week).length; }
function isWeekDone(player, week){ return completedCount(player, week) >= 3; }
function doneWeeks(player = currentPlayer){ return weeks.filter(w => isWeekDone(player, w.week)).length; }
function totalExercises(player = currentPlayer){ return weeks.reduce((sum, w) => sum + completedCount(player, w.week), 0); }
function exerciseLevelText(count){
  if(count >= SUMMERMASTER_EXERCISES) return `👑 Sommermester – alle ${SUMMERMASTER_EXERCISES} øvelser fullført!`;
  if(count >= GOLD_EXERCISES) return `🥇 Gull – ${count} øvelser fullført. ${SUMMERMASTER_EXERCISES - count} igjen til Sommermester`;
  if(count >= SILVER_EXERCISES) return `🥈 Sølv – ${count} øvelser fullført. ${GOLD_EXERCISES - count} igjen til Gull`;
  if(count >= BRONZE_EXERCISES) return `🥉 Bronse – ${count} øvelser fullført. ${SILVER_EXERCISES - count} igjen til Sølv`;
  return `🥉 Bronsejakt – ${count}/${BRONZE_EXERCISES} øvelser. ${BRONZE_EXERCISES - count} igjen til Bronse`;
}
function exerciseLevelBadge(count){
  if(count >= SUMMERMASTER_EXERCISES) return '<span class="pill">👑 Sommermester</span>';
  if(count >= GOLD_EXERCISES) return '<span class="pill">🥇 Gull</span>';
  if(count >= SILVER_EXERCISES) return '<span class="pill">🥈 Sølv</span>';
  if(count >= BRONZE_EXERCISES) return '<span class="pill">🥉 Bronse</span>';
  if(count > 0) return '<span class="pill">I gang</span>';
  return '<span class="pill">Ikke startet</span>';
}

function allLocalTotalExercises(){
  return players.reduce((sum, p) => sum + weeks.reduce((wSum, w) => wSum + getSavedTasks(p.name, w.week).length, 0), 0);
}
function localActivePlayersThisWeek(){
  const activeWeek = getActiveWeekNumber();
  return players.filter(p => getSavedTasks(p.name, activeWeek).length > 0).length;
}
function secretRewardMessage(totalExercises){
  if(totalExercises >= TEAM_EXERCISE_GOAL){
    return `🎉 GRATULERER!<br><br>Dere klarte det! ⚽🔥<br><br>Gjennom hele sommeren har dere samlet nok øvelser til å låse opp den hemmelige belønningen.<br><br>🎁 Hva er premien?<br><br>Det får dere vite på første trening etter ferien...<br><br>Vi sees på banen!`;
  }
  const remaining = Math.max(0, TEAM_EXERCISE_GOAL - totalExercises);
  return `🎁 Hemmelig belønning<br><span class="smallText">${remaining} øvelser igjen. Kun trenerne vet hva belønningen er 🤫</span>`;
}
function renderTeamGoalCard(totalExercises, activePlayersThisWeek){
  const pct = Math.min(100, Math.round((totalExercises / TEAM_EXERCISE_GOAL) * 100));
  const reached = totalExercises >= TEAM_EXERCISE_GOAL;
  return `<div class="card secretCard ${reached ? 'goalReached' : ''}">
    <h3>🎁 Hemmelig sommeroppdrag</h3>
    <p><strong>${totalExercises}</strong> av <strong>${TEAM_EXERCISE_GOAL}</strong> øvelser fullført av laget</p>
    <div class="progressWrap"><div class="progressBar" style="width:${pct}%"></div></div>
    <p><strong>${pct}%</strong> av lagmålet</p>
    <p>${secretRewardMessage(totalExercises)}</p>
    <p>🔥 <strong>${activePlayersThisWeek}</strong> av ${players.length} spillere har vært aktive denne uka</p>
  </div>`;
}
function hideAll(){
  ['startScreen','loginScreen','trainerLoginScreen','homeScreen','weekScreen','trainerScreen','statsScreen'].forEach(id => $(id).classList.add('hidden'));
}
function init(){
  $('playerSelect').innerHTML = players.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
  $('playerModeBtn').onclick = showLogin;
  $('trainerModeBtn').onclick = showTrainerLogin;
  $('publicStatsBtn').onclick = showPublicStats;
  $('backToStartBtn').onclick = showStart;
  $('backToStartTrainerBtn').onclick = showStart;
  $('loginBtn').onclick = login;
  $('trainerLoginBtn').onclick = trainerLogin;
  $('logoutBtn').onclick = logout;
  $('backBtn').onclick = showHome;
  $('trainerBackBtn').onclick = showStart;
  $('statsBackBtn').onclick = showStart;
  $('refreshStatsBtn').onclick = loadTrainerStats;
  if($('saveOpenWeeksBtn')) $('saveOpenWeeksBtn').onclick = saveTrainerOpenWeeks;
  syncRemoteSettings().finally(() => { if(currentPlayer) showHome(); else showStart(); });
}
function showStart(){ hideAll(); $('startScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
function showLogin(){ hideAll(); $('loginScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
function showTrainerLogin(){ hideAll(); $('trainerLoginScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
async function login(){
  const name = $('playerSelect').value;
  const pin = $('pinInput').value.trim();
  const player = players.find(p => p.name === name);
  if(!player || player.pin !== pin){ $('loginError').textContent = 'Feil PIN-kode.'; return; }
  currentPlayer = name;
  localStorage.setItem('currentPlayer', name);
  $('pinInput').value=''; $('loginError').textContent='';
  await syncCurrentPlayerFromGoogle();
  showHome();
}
function trainerLogin(){
  const pin = $('trainerPinInput').value.trim();
  if(pin !== TRAINER_PIN){ $('trainerLoginError').textContent = 'Feil trener-PIN.'; return; }
  $('trainerPinInput').value=''; $('trainerLoginError').textContent='';
  showTrainerDashboard();
}
function saveTrainerOpenWeeks(){
  const checks = Array.from(document.querySelectorAll('.openWeekCheck'));
  const selected = checks.filter(c => c.checked).map(c => Number(c.value));
  if(selected.length === 0){
    $('overrideStatus').innerHTML = '<span class="danger">Minst én uke må være åpen.</span>';
    return;
  }
  const openWeeks = normalizeWeeks(selected);
  localStorage.setItem('trainerOpenWeeks', JSON.stringify(openWeeks));
  remoteOpenWeeks = openWeeks;
  $('overrideStatus').innerHTML = `<span class="ok">Lagret åpne uker: ${openWeeks.map(w => 'Uke ' + w).join(', ')}.</span>`;
  sendOpenWeeksToGoogle(openWeeks);
  renderTrainerControls();
  loadTrainerStats();
}
function renderTrainerControls(){
  if(!$('openWeeksControl')) return;
  const openWeeks = getOpenWeeks();
  $('activeWeekInfo').textContent = activeWeekInfoText();
  $('openWeeksControl').innerHTML = weeks.map(w => {
    const checked = openWeeks.includes(w.week) ? 'checked' : '';
    const active = w.week === getActiveWeekNumber() && checked ? 'activeOpenWeek' : '';
    return `<label class="openWeekItem ${active}">
      <input class="openWeekCheck" type="checkbox" value="${w.week}" ${checked}>
      <span><strong>${w.emoji} Uke ${w.week} – ${w.theme}</strong><small>${weekDateText(w.week)}</small><small>${checked ? 'Åpen for spillerne' : 'Låst for spillerne'}</small></span>
    </label>`;
  }).join('');
  const source = Array.isArray(remoteOpenWeeks) ? 'Google Sheets' : (localStorage.getItem('trainerOpenWeeks') ? 'denne enheten' : 'automatisk dato-styring');
  $('overrideStatus').textContent = `Ukeåpning hentes fra ${source}. Huk av uker og trykk Lagre for å endre.`;
}

function logout(){ localStorage.removeItem('currentPlayer'); currentPlayer=null; showStart(); }

async function showHome(){
  await syncCurrentPlayerFromGoogle();
  hideAll(); 
  $('homeScreen').classList.remove('hidden'); 
  $('logoutBtn').classList.remove('hidden');

  const playerFirstName = currentPlayer ? currentPlayer.split(' ')[0] : '';
  $('welcomeText').textContent = `👋 Hei ${playerFirstName}!`;

  const approvedWeeks = doneWeeks();
  const exercises = totalExercises();
  const activeWeek = getActiveWeekNumber();
  const activeWeekCount = completedCount(currentPlayer, activeWeek);
  const openWeeks = getOpenWeeks();

  $('teamStatus').innerHTML = `${exerciseLevelText(exercises)}`;
  $('syncStatus').innerHTML = '';

  const teamExercises = allLocalTotalExercises();
  const activePlayers = localActivePlayersThisWeek();
  const teamPct = Math.min(100, Math.round((teamExercises / TEAM_EXERCISE_GOAL) * 100));

  const playerCard = `
    <div class="cleanHomeGrid">
      <div class="miniCard">
        <div class="miniIcon">🏅</div>
        <h3>Min status</h3>
        <p><strong>${exercises}</strong> øvelser</p>
        <p class="smallText">${exerciseLevelText(exercises)}</p>
      </div>

      <div class="miniCard">
        <div class="miniIcon">📅</div>
        <h3>Uke ${activeWeek}</h3>
        <p><strong>${activeWeekCount}</strong> av 6 fullført</p>
        <p class="smallText">${weekDateText(activeWeek)}</p>
      </div>
    </div>
  `;

  const teamGoalCard = `
    <div class="card secretCard">
      <h3>🎯 Lagets sommeroppdrag</h3>
      <p class="bigStat"><strong>${teamExercises}</strong> / ${TEAM_EXERCISE_GOAL} øvelser</p>
      <div class="progressWrap"><div class="progressBar" style="width:${teamPct}%"></div></div>
      <p><strong>${teamPct}%</strong> fullført</p>
      <p>🔥 <strong>${activePlayers}</strong> av ${players.length} spillere aktive denne uka</p>
    </div>
  `;

  const summerMasterCard = exercises >= SUMMERMASTER_EXERCISES ? `<div class="card celebrationCard"><h3>🎉 SOMMERMESTER!</h3><p>Du har fullført alle 42 øvelsene. Fantastisk innsats! ⚽🔥</p><div class="confettiLine">🎊 🎉 ⚽ 🎉 🎊</div></div>` : '';

  const rewardCard = `
    <div class="card rewardMini">
      <h3>🎁 Belønning</h3>
      <p class="secretWord">HEMMELIG</p>
    </div>
  `;

  const openCards = weeks.filter(w => openWeeks.includes(w.week)).map(w => {
    const c = completedCount(currentPlayer, w.week);
    const done = c >= 3;
    const activeCls = w.week === activeWeek ? 'active' : '';
    return `<button class="weekBtn ${activeCls} ${done?'done':''}" onclick="openWeek(${w.week})">
      <span class="title">${w.emoji} Uke ${w.week} – ${w.theme} <span>${done?'✅':'⬜'}</span></span>
      <span class="dateLine">${weekDateText(w.week)}</span>
      <span class="subtitle">${c}/6 øvelser · ${done?'Uka er godkjent':'minst 3 for godkjent'}</span>
    </button>`;
  }).join('') || '<div class="card"><p>Ingen uker er åpnet ennå.</p></div>';

  const statusCards = weeks.map(w => {
    const c = completedCount(currentPlayer, w.week);
    const isDone = c >= 3;
    const isOpen = openWeeks.includes(w.week);
    return `<div class="weekStatus ${isDone?'done':''} ${!isOpen?'locked':''}">
      <span>${w.emoji} Uke ${w.week} – ${w.theme}</span>
      <strong>${isDone?'✅ Fullført':(isOpen?'⬜ Åpen':'🔒 Låst')}</strong>
      <small>${weekDateText(w.week)}</small>
      <small>${c}/6 øvelser</small>
    </div>`;
  }).join('');

  $('weeksGrid').innerHTML = `
    ${playerCard}
    ${teamGoalCard}
    ${rewardCard}
    ${summerMasterCard}
    <h3>⚽ Åpen uke</h3>
    ${openCards}
    <h3>Ukeoversikt</h3>
    <div class="statusGrid">${statusCards}</div>
  `;
}

function openWeek(weekNo){
  if(!isWeekOpen(weekNo)){
    alert('Denne uka er låst. Trenerne åpner uker etter hvert.');
    return;
  }
  currentWeek = weeks.find(w => w.week === weekNo);
  hideAll(); $('weekScreen').classList.remove('hidden'); $('logoutBtn').classList.remove('hidden');
  $('weekTitle').textContent = `${currentWeek.emoji} Uke ${currentWeek.week} – ${currentWeek.theme}`;
  $('weekDate').textContent = weekDateText(currentWeek.week);
  $('weekHelp').textContent = 'Velg minst 3 av 6 øvelser. Trykk på «Les mer» for forklaring. Uka markeres automatisk som fullført når 3 er valgt.';
  renderTasks();
}
function renderTasks(){
  const saved = getSavedTasks(currentPlayer, currentWeek.week);
  $('tasksList').innerHTML = currentWeek.tasks.map((t, i) => `
    <div class="taskCard ${saved.includes(i)?'checked':''}">
      <label class="task taskHeader">
        <input type="checkbox" ${saved.includes(i)?'checked':''} onchange="toggleTask(${i}, this.checked)">
        <span><strong>${i+1}. ${t.title}</strong><br><small>${t.short}</small></span>
      </label>
      <button class="smallBtn" onclick="toggleDetails(${i})" type="button">Les mer</button>
      <div id="details_${i}" class="taskDetails hidden">${t.details}</div>
    </div>`).join('');
  updateProgress();
}
function toggleDetails(i){ $('details_' + i).classList.toggle('hidden'); }
function toggleTask(i, checked){
  if(checked && !canRegisterMoreToday(currentPlayer, currentWeek.week, i)){
    alert('Du kan registrere maks 6 nye øvelser per dag. Ta resten en annen dag ⚽');
    renderTasks();
    return;
  }
  let saved = getSavedTasks(currentPlayer, currentWeek.week);
  if(checked && !saved.includes(i)){
    saved.push(i);
    markDailyRegisteredTask(currentPlayer, currentWeek.week, i);
  }
  if(!checked) saved = saved.filter(x => x !== i);
  saveTasks(currentPlayer, currentWeek.week, saved);
  sendToGoogleSheet(currentPlayer, currentWeek.week, i, checked);
  renderTasks();
}

function updateProgress(){
  const count = completedCount(currentPlayer, currentWeek.week);
  const pct = Math.min(count/3,1)*100;
  $('progressBar').style.width = pct + '%';
  $('progressText').textContent = `${count}/6 øvelser valgt – ${count >= 3 ? 'uka er godkjent ✅' : 'velg minst 3 for å fullføre uka'}`;
  $('completedBox').classList.toggle('hidden', count < 3);
}


function todayKey(){
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function dailyTaskKey(player){ return `daily_tasks_${player}_${todayKey()}`; }
function getDailyRegisteredTasks(player){ return JSON.parse(localStorage.getItem(dailyTaskKey(player)) || '[]'); }
function markDailyRegisteredTask(player, week, taskIndex){
  const k = `${week}_${taskIndex}`;
  const arr = getDailyRegisteredTasks(player);
  if(!arr.includes(k)){
    arr.push(k);
    localStorage.setItem(dailyTaskKey(player), JSON.stringify(arr));
  }
}
function canRegisterMoreToday(player, week, taskIndex){
  const k = `${week}_${taskIndex}`;
  const arr = getDailyRegisteredTasks(player);
  return arr.includes(k) || arr.length < 6;
}

function sendToGoogleSheet(player, week, taskIndex, checked){
  if(!GOOGLE_SCRIPT_URL) return;
  const task = weeks.find(w => w.week === week).tasks[taskIndex];
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = GOOGLE_SCRIPT_URL;
  form.target = 'hiddenSubmitFrame';
  form.style.display = 'none';
  const data = { player, week, taskIndex, taskTitle: task.title, checked: checked ? 'TRUE' : 'FALSE', source: 'webapp' };
  Object.entries(data).forEach(([name, value]) => {
    const input = document.createElement('input'); input.name = name; input.value = value; form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  setTimeout(() => form.remove(), 1000);
}

function sendOpenWeeksToGoogle(openWeeks){
  if(!GOOGLE_SCRIPT_URL) return;
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = GOOGLE_SCRIPT_URL;
  form.target = 'hiddenSubmitFrame';
  form.style.display = 'none';
  const data = { action: 'saveOpenWeeks', openWeeks: openWeeks.join(','), source: 'trainer' };
  Object.entries(data).forEach(([name, value]) => {
    const input = document.createElement('input'); input.name = name; input.value = value; form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  setTimeout(() => form.remove(), 1000);
}

// Google Sheets-lesing via JSONP, fordi det fungerer fra GitHub Pages uten CORS-trøbbel.
function loadDataFromGoogle(){
  return new Promise((resolve) => {
    if(!GOOGLE_SCRIPT_URL){ resolve({ ok:true, records: [], settings: {} }); return; }
    const cbName = 'jsonpCallback_' + Date.now();
    const script = document.createElement('script');
    window[cbName] = (data) => { cleanup(); resolve(data || { records: [], settings: {} }); };
    function cleanup(){ delete window[cbName]; script.remove(); }
    script.src = GOOGLE_SCRIPT_URL + '?callback=' + cbName + '&t=' + Date.now();
    script.onerror = () => { cleanup(); resolve(null); };
    document.body.appendChild(script);
  });
}
async function syncRemoteSettings(){
  if(!GOOGLE_SCRIPT_URL) return;
  const data = await loadDataFromGoogle();
  if(data && data.settings && Array.isArray(data.settings.openWeeks) && data.settings.openWeeks.length){
    remoteOpenWeeks = normalizeWeeks(data.settings.openWeeks);
    localStorage.setItem('trainerOpenWeeks', JSON.stringify(remoteOpenWeeks));
  }
}
async function loadLogsFromGoogle(){
  const data = await loadDataFromGoogle();
  if(data && data.settings && Array.isArray(data.settings.openWeeks) && data.settings.openWeeks.length){
    remoteOpenWeeks = normalizeWeeks(data.settings.openWeeks);
    localStorage.setItem('trainerOpenWeeks', JSON.stringify(remoteOpenWeeks));
  }
  return data ? (data.records || []) : null;
}


async function syncCurrentPlayerFromGoogle(){
  if(!GOOGLE_SCRIPT_URL || !currentPlayer) return;
  const logs = await loadLogsFromGoogle();
  if(!logs) return;
  const matrix = applyLogsToMatrix(logs);
  if(!matrix[currentPlayer]) return;
  weeks.forEach(w => {
    saveTasks(currentPlayer, w.week, Array.from(matrix[currentPlayer][w.week] || []));
  });
}

function applyLogsToMatrix(logs){
  const matrix = {};
  players.forEach(p => { matrix[p.name] = {}; weeks.forEach(w => matrix[p.name][w.week] = new Set()); });
  // Bruk loggrekkefølgen: siste registrering for hver oppgave bestemmer status.
  const latest = {};
  logs.forEach(r => {
    const player = r.player; const week = Number(r.week); const taskIndex = Number(r.taskIndex);
    if(!matrix[player] || !matrix[player][week]) return;
    latest[`${player}|${week}|${taskIndex}`] = String(r.checked).toUpperCase() === 'TRUE';
  });
  Object.entries(latest).forEach(([k, checked]) => {
    const [player, week, taskIndex] = k.split('|');
    if(checked) matrix[player][Number(week)].add(Number(taskIndex));
  });
  return matrix;
}
function matrixFromLocal(){
  const matrix = {};
  players.forEach(p => { matrix[p.name] = {}; weeks.forEach(w => matrix[p.name][w.week] = new Set(getSavedTasks(p.name, w.week))); });
  return matrix;
}
async function showTrainerDashboard(){
  hideAll(); $('trainerScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden');
  renderTrainerControls();
  await loadTrainerStats();
}
async function loadTrainerStats(){
  $('trainerSyncStatus').textContent = 'Laster statistikk...';
  let matrix;
  if(GOOGLE_SCRIPT_URL){
    const logs = await loadLogsFromGoogle();
    if(logs === null){ $('trainerSyncStatus').innerHTML = '<span class="danger">Klarte ikke å hente fra Google Sheets. Sjekk Apps Script-lenken.</span>'; matrix = matrixFromLocal(); }
    else { remoteLogs = logs; $('trainerSyncStatus').innerHTML = `<span class="ok">Hentet ${logs.length} registreringer fra Google Sheets.</span>`; matrix = applyLogsToMatrix(logs); }
  } else {
    $('trainerSyncStatus').innerHTML = '<span class="warning">Google Sheets er ikke koblet til. Viser bare data som finnes på denne enheten.</span>';
    matrix = matrixFromLocal();
  }
  renderTrainerStats(matrix);
}
function renderTrainerStats(matrix){
  const totalPlayers = players.length;
  const activeWeek = getActiveWeekNumber();

  const playerStats = players.map(p => {
    const exercises = weeks.reduce((sum, w) => sum + matrix[p.name][w.week].size, 0);
    const weeksDone = weeks.filter(w => matrix[p.name][w.week].size >= 3).length;
    const activeExercises = matrix[p.name][activeWeek] ? matrix[p.name][activeWeek].size : 0;
    return { name: p.name, exercises, weeksDone, activeExercises };
  });

  const totalExercises = playerStats.reduce((sum, p) => sum + p.exercises, 0);
  const goalPct = Math.min(100, Math.round((totalExercises / TEAM_EXERCISE_GOAL) * 100));
  const activePlayersThisWeek = playerStats.filter(p => p.activeExercises > 0).length;
  const remaining = Math.max(0, TEAM_EXERCISE_GOAL - totalExercises);

  $('statsSummary').innerHTML = `
    <h3>Lagets hemmelige sommeroppdrag 🎁</h3>
    <p><strong>${totalExercises}</strong> av <strong>${TEAM_EXERCISE_GOAL}</strong> øvelser fullført</p>
    <div class="progressWrap"><div class="progressBar" style="width:${goalPct}%"></div></div>
    <p><strong>${goalPct}%</strong> av lagmålet er nådd</p>
    <p class="smallText">${remaining > 0 ? `${remaining} øvelser igjen til hemmelig belønning.` : '🎉 GRATULERER! Dere klarte det! Den hemmelige belønningen avsløres på første trening etter ferien.'}</p>
    <p>🔥 <strong>${activePlayersThisWeek}</strong> av ${totalPlayers} spillere har vært aktive i uke ${activeWeek}</p>
  `;

  $('weekStats').innerHTML = `<h3>Ukeoversikt</h3><table class="statsTable"><tr><th>Uke</th><th>Dato</th><th>Status</th><th>Tema</th><th>Øvelser</th><th>Godkjente uker</th></tr>${weeks.map(w => {
    const exerciseCount = players.reduce((sum, p) => sum + matrix[p.name][w.week].size, 0);
    const weekDoneCount = players.filter(p => matrix[p.name][w.week].size >= 3).length;
    const activeClass = w.week === activeWeek ? ' class="activeRow"' : '';
    return `<tr${activeClass}><td>Uke ${w.week}${w.week === activeWeek ? ' ✅' : ''}</td><td>${weekDateText(w.week)}</td><td>${isWeekOpen(w.week) ? 'Åpen' : 'Låst'}</td><td>${w.emoji} ${w.theme}</td><td><strong>${exerciseCount}</strong></td><td><strong>${weekDoneCount}/${totalPlayers}</strong></td></tr>`;
  }).join('')}</table>`;

  $('playerStats').innerHTML = `<h3>Spillere</h3><table class="statsTable"><tr><th>Spiller</th><th>Øvelser</th><th>Uker</th><th>Status</th></tr>${playerStats.sort((a,b)=>b.exercises-a.exercises || b.weeksDone-a.weeksDone || a.name.localeCompare(b.name)).map(p => `<tr><td>${p.name}</td><td>${p.exercises}/42</td><td>${p.weeksDone}/7</td><td>${exerciseLevelBadge(p.exercises)}</td></tr>`).join('')}</table>`;

  const notStarted = playerStats.filter(p => p.exercises === 0).map(p => p.name);
  $('notStartedStats').innerHTML = `<h3>Ikke startet</h3>${notStarted.length ? `<p class="smallText">Disse har ikke registrert noen øvelser ennå:</p><p>${notStarted.join('<br>')}</p>` : '<p class="ok">Alle har startet! 🎉</p>'}`;
}


async function showPublicStats(){
  hideAll();
  $('statsScreen').classList.remove('hidden');
  $('logoutBtn').classList.add('hidden');
  $('publicStatsSummary').innerHTML = '<p>Laster statistikk...</p>';
  let matrix;
  if(GOOGLE_SCRIPT_URL){
    const logs = await loadLogsFromGoogle();
    matrix = logs ? applyLogsToMatrix(logs) : matrixFromLocal();
  } else {
    matrix = matrixFromLocal();
  }
  renderPublicStats(matrix);
}

function renderPublicStats(matrix){
  const activeWeek = getActiveWeekNumber();
  const playerStats = players.map(p => {
    const exercises = weeks.reduce((sum, w) => sum + matrix[p.name][w.week].size, 0);
    const weeksDone = weeks.filter(w => matrix[p.name][w.week].size >= 3).length;
    const activeExercises = matrix[p.name][activeWeek] ? matrix[p.name][activeWeek].size : 0;
    return { name:p.name, exercises, weeksDone, activeExercises };
  });

  const totalExercises = playerStats.reduce((sum,p)=>sum+p.exercises,0);
  const pct = Math.min(100, Math.round((totalExercises / TEAM_EXERCISE_GOAL) * 100));
  const activePlayers = playerStats.filter(p => p.activeExercises > 0).length;

  const bronze = playerStats.filter(p => p.exercises >= BRONZE_EXERCISES && p.exercises < SILVER_EXERCISES).length;
  const silver = playerStats.filter(p => p.exercises >= SILVER_EXERCISES && p.exercises < GOLD_EXERCISES).length;
  const gold = playerStats.filter(p => p.exercises >= GOLD_EXERCISES && p.exercises < SUMMERMASTER_EXERCISES).length;
  const master = playerStats.filter(p => p.exercises >= SUMMERMASTER_EXERCISES).length;

  $('publicStatsSummary').innerHTML = `
    <h3>🎁 Hemmelig sommeroppdrag</h3>
    <p class="bigStat"><strong>${totalExercises}</strong> / ${TEAM_EXERCISE_GOAL} øvelser</p>
    <div class="progressWrap"><div class="progressBar" style="width:${pct}%"></div></div>
    <p><strong>${pct}%</strong> av lagmålet</p>
    <div class="cleanStatsGrid">
      <div><strong>${players.length}</strong><span>spillere</span></div>
      <div><strong>${activePlayers}</strong><span>aktive denne uka</span></div>
      <div><strong>${activeWeek}</strong><span>aktiv uke</span></div>
    </div>
  `;

  $('publicWeekStats').innerHTML = `<h3>📅 Uker</h3>
    <div class="cleanWeekList">
      ${weeks.map(w => {
        const exerciseCount = players.reduce((sum,p)=>sum + matrix[p.name][w.week].size,0);
        const doneCount = players.filter(p => matrix[p.name][w.week].size >= 3).length;
        const open = isWeekOpen(w.week);
        return `<div class="cleanWeekRow ${open?'open':''}">
          <div><strong>${w.emoji} Uke ${w.week} – ${w.theme}</strong><small>${weekDateText(w.week)}</small></div>
          <div><strong>${exerciseCount}</strong><small>øvelser</small></div>
          <div><strong>${doneCount}/${players.length}</strong><small>godkjent</small></div>
        </div>`;
      }).join('')}
    </div>`;

  $('publicMedalStats').innerHTML = `<h3>🏅 Merker</h3>
    <div class="cleanStatsGrid">
      <div><strong>${bronze}</strong><span>🥉 Bronse</span></div>
      <div><strong>${silver}</strong><span>🥈 Sølv</span></div>
      <div><strong>${gold}</strong><span>🥇 Gull</span></div>
      <div><strong>${master}</strong><span>👑 Sommermester</span></div>
    </div>
    <p class="smallText">Statistikken viser lagstatus uten rangering av enkeltspillere.</p>`;
}


// Medaljer beregnes nå fra antall fullførte øvelser, ikke antall uker.

init();
