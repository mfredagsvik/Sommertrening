const players = [
  {name:'Albert Solem', pin:'1001'},
  {name:'Andreas Bachmann-Gregertsen', pin:'1002'},
  {name:'Brage Nordtømme', pin:'1003'},
  {name:'Elias Manum Klungerbo', pin:'1004'},
  {name:'Felix Valla Rogstad', pin:'1005'},
  {name:'Filip Rein Hågensen', pin:'1006'},
  {name:'Håkon Thronæs', pin:'1007'},
  {name:'Ibrahim Mohamed', pin:'1008'},
  {name:'Isak Matheson Sem', pin:'1009'},
  {name:'Jakob Lyngstad Formo', pin:'1010'},
  {name:'Jonas Dahl Pleym', pin:'1011'},
  {name:'Juri Konstantin Glaum', pin:'1012'},
  {name:'Kasper Ohren', pin:'1013'},
  {name:'Leander Saur Blekken', pin:'1014'},
  {name:'Linus Dalsbø', pin:'1015'},
  {name:'Markus Andersen-Keysan', pin:'1016'},
  {name:'Max Groven-Storrøsten', pin:'1017'},
  {name:'Max Jernakov', pin:'1018'},
  {name:'Mikael Renå Hortman', pin:'1019'},
  {name:'Milan Benjaminsen Riise', pin:'1020'},
  {name:'Nicolai Schjetne Kristiansen', pin:'1021'},
  {name:'Olai Sørensen Jacobsen', pin:'1022'},
  {name:'Oleksandr Riabokin', pin:'1023'},
  {name:'Oscar Fredagsvik', pin:'1024'},
  {name:'Oskar Nyheim Stensrud', pin:'1025'},
  {name:'Pascal Philemon Bwinja', pin:'1026'},
  {name:'Peder Jonassen Ekle', pin:'1027'},
  {name:'Peder Rogstad Overrein', pin:'1028'},
  {name:'Rafael Lujala', pin:'1029'},
  {name:'Samir Abdulaziz', pin:'1030'},
  {name:'Syver Nysæter Sagsveen', pin:'1031'},
  {name:'Tobias Øye Amundsen', pin:'1032'},
  {name:'Viktor Rønningen', pin:'1033'},
  {name:'Youssef Alhamada', pin:'1034'}
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



// 1) Lim inn Google Apps Script Web App URL her etter oppsett.
// Eksempel: const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkxXjCG41Wb9fQfIVVqt8zLqdDs_j2IyJCARcfJiTVN8WXvJGpbRctwEXwFTfVqClEWg/exec';
const TRAINER_PIN = '2014';

let currentPlayer = localStorage.getItem('currentPlayer') || null;
let currentWeek = null;
let remoteLogs = [];

const $ = id => document.getElementById(id);
const key = (player, week) => `tasks_${player}_uke_${week}`;

function getSavedTasks(player, week){ return JSON.parse(localStorage.getItem(key(player, week)) || '[]'); }
function saveTasks(player, week, arr){ localStorage.setItem(key(player, week), JSON.stringify(arr)); }
function completedCount(player, week){ return getSavedTasks(player, week).length; }
function isWeekDone(player, week){ return completedCount(player, week) >= 3; }
function doneWeeks(){ return weeks.filter(w => isWeekDone(currentPlayer, w.week)).length; }
function levelText(done){
  if(done >= 7) return '🥇 Gull – alle 7 uker fullført!';
  if(done >= 5) return `🥈 Sølv – ${done} av 7 uker fullført`;
  if(done >= 3) return `🥉 Bronse – ${done} av 7 uker fullført`;
  return `Status: Bronsejakt! ${done} av 7 uker fullført`;
}
function hideAll(){
  ['startScreen','loginScreen','trainerLoginScreen','homeScreen','weekScreen','trainerScreen'].forEach(id => $(id).classList.add('hidden'));
}
function init(){
  $('playerSelect').innerHTML = players.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
  $('playerModeBtn').onclick = showLogin;
  $('trainerModeBtn').onclick = showTrainerLogin;
  $('backToStartBtn').onclick = showStart;
  $('backToStartTrainerBtn').onclick = showStart;
  $('loginBtn').onclick = login;
  $('trainerLoginBtn').onclick = trainerLogin;
  $('logoutBtn').onclick = logout;
  $('backBtn').onclick = showHome;
  $('trainerBackBtn').onclick = showStart;
  $('refreshStatsBtn').onclick = loadTrainerStats;
  if(currentPlayer) showHome(); else showStart();
}
function showStart(){ hideAll(); $('startScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
function showLogin(){ hideAll(); $('loginScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
function showTrainerLogin(){ hideAll(); $('trainerLoginScreen').classList.remove('hidden'); $('logoutBtn').classList.add('hidden'); }
function login(){
  const name = $('playerSelect').value;
  const pin = $('pinInput').value.trim();
  const player = players.find(p => p.name === name);
  if(!player || player.pin !== pin){ $('loginError').textContent = 'Feil PIN-kode.'; return; }
  currentPlayer = name;
  localStorage.setItem('currentPlayer', name);
  $('pinInput').value=''; $('loginError').textContent='';
  showHome();
}
function trainerLogin(){
  const pin = $('trainerPinInput').value.trim();
  if(pin !== TRAINER_PIN){ $('trainerLoginError').textContent = 'Feil trener-PIN.'; return; }
  $('trainerPinInput').value=''; $('trainerLoginError').textContent='';
  showTrainerDashboard();
}
function logout(){ localStorage.removeItem('currentPlayer'); currentPlayer=null; showStart(); }
function showHome(){
  hideAll(); $('homeScreen').classList.remove('hidden'); $('logoutBtn').classList.remove('hidden');
  $('welcomeText').textContent = `Hei ${currentPlayer}! 👋`;
  const done = doneWeeks();
  $('teamStatus').textContent = `${levelText(done)}. Fullfør minst 3 av 6 øvelser per uke.`;
  $('syncStatus').innerHTML = GOOGLE_SCRIPT_URL ? '✅ Registreringer sendes til trenerstatistikk.' : '<span class="warning">Google Sheets er ikke koblet til ennå. Registreringer lagres bare på denne telefonen.</span>';
  $('weeksGrid').innerHTML = weeks.map(w => {
    const c = completedCount(currentPlayer, w.week);
    const done = c >= 3;
    return `<button class="weekBtn ${done?'done':''}" onclick="openWeek(${w.week})"><span class="title">${w.emoji} Uke ${w.week} <span>${done?'✅':'⬜'}</span></span><span class="subtitle">${w.theme} · ${c}/6 øvelser · ${done?'Fullført':'minst 3 for godkjent'}</span></button>`;
  }).join('');
}
function openWeek(weekNo){
  currentWeek = weeks.find(w => w.week === weekNo);
  hideAll(); $('weekScreen').classList.remove('hidden'); $('logoutBtn').classList.remove('hidden');
  $('weekTitle').textContent = `${currentWeek.emoji} Uke ${currentWeek.week} – ${currentWeek.theme}`;
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
  let saved = getSavedTasks(currentPlayer, currentWeek.week);
  if(checked && !saved.includes(i)) saved.push(i);
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

// Google Sheets-lesing via JSONP, fordi det fungerer fra GitHub Pages uten CORS-trøbbel.
function loadLogsFromGoogle(){
  return new Promise((resolve) => {
    if(!GOOGLE_SCRIPT_URL){ resolve([]); return; }
    const cbName = 'jsonpCallback_' + Date.now();
    const script = document.createElement('script');
    window[cbName] = (data) => { cleanup(); resolve(data.records || []); };
    function cleanup(){ delete window[cbName]; script.remove(); }
    script.src = GOOGLE_SCRIPT_URL + '?callback=' + cbName + '&t=' + Date.now();
    script.onerror = () => { cleanup(); resolve(null); };
    document.body.appendChild(script);
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
  const playerDoneWeeks = players.map(p => ({
    name: p.name,
    weeksDone: weeks.filter(w => matrix[p.name][w.week].size >= 3).length
  }));
  const started = playerDoneWeeks.filter(p => p.weeksDone > 0).length;
  const pctStarted = Math.round((started / totalPlayers) * 100);
  $('statsSummary').innerHTML = `<h3>Lagstatus</h3><p><strong>${totalPlayers}</strong> spillere</p><p><strong>${started}</strong> spillere har fullført minst én uke</p><p><strong>${pctStarted}%</strong> av laget er i gang</p>`;
  $('weekStats').innerHTML = `<h3>Ukeoversikt</h3><table class="statsTable"><tr><th>Uke</th><th>Tema</th><th>Fullført</th></tr>${weeks.map(w => {
    const count = players.filter(p => matrix[p.name][w.week].size >= 3).length;
    return `<tr><td>Uke ${w.week}</td><td>${w.emoji} ${w.theme}</td><td><strong>${count}/${totalPlayers}</strong></td></tr>`;
  }).join('')}</table>`;
  $('playerStats').innerHTML = `<h3>Spillere</h3><table class="statsTable"><tr><th>Spiller</th><th>Uker</th><th>Status</th></tr>${playerDoneWeeks.sort((a,b)=>b.weeksDone-a.weeksDone || a.name.localeCompare(b.name)).map(p => `<tr><td>${p.name}</td><td>${p.weeksDone}/7</td><td>${levelBadge(p.weeksDone)}</td></tr>`).join('')}</table>`;
  const notStarted = playerDoneWeeks.filter(p => p.weeksDone === 0).map(p => p.name);
  $('notStartedStats').innerHTML = `<h3>Ikke startet</h3>${notStarted.length ? `<p class="smallText">Disse har ikke fullført noen uker ennå:</p><p>${notStarted.join('<br>')}</p>` : '<p class="ok">Alle har startet! 🎉</p>'}`;
}
function levelBadge(done){
  if(done >= 7) return '<span class="pill">🥇 Gull</span>';
  if(done >= 5) return '<span class="pill">🥈 Sølv</span>';
  if(done >= 3) return '<span class="pill">🥉 Bronse</span>';
  if(done > 0) return '<span class="pill">I gang</span>';
  return '<span class="pill">Ikke startet</span>';
}

init();
