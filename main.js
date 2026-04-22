// PLAYERS DATA //
const players = [
  {
    name: 'Archie Gemmill', role: 'Midfielder', era: '1971 – 1981 · 43 Caps',
    img: 'https://sshf.sportscotland.org.uk/media/1235/archie_gemmill_4.jpg?anchor=center&mode=crop&width=800&height=600&rnd=131862648430000000',
    bio: 'One of Scotland\'s greatest midfielders. His mazy solo goal against the Netherlands in 1978 is widely considered the greatest World Cup goal ever scored.',
    achievements: [
      { yr: '1974', text: 'Named in Scotland\'s squad for the World Cup debut in West Germany.' },
      { yr: '1978', text: 'Scores one of the greatest World Cup goals in history against the Netherlands in Argentina.' },
      { yr: '1978', text: 'Named Man of the Match; Scotland exit on goal difference despite brilliant individual displays.' },
      { yr: '1982', text: 'Captains Scotland in Spain, leads the team with distinction through the group stage.' },
      { yr: '1997', text: 'Inducted into the Scottish Football Hall of Fame on retirement from professional football.' },
    ]
  },
  {
    name: 'Denis Law', role: 'Forward', era: '1958 – 1974 · 55 Caps',
    img: 'https://i.dailymail.co.uk/1s/2025/01/17/21/94227717-0-image-a-134_1737150062870.jpg',
    bio: 'The King. Denis Law remains the most celebrated Scottish footballer of all time — a predatory forward whose instincts and flair brought Scotland to international prominence.',
    achievements: [
      { yr: '1958', text: 'Becomes the youngest ever Scotland debutant at just 18 years old.' },
      { yr: '1963', text: 'European Footballer of the Year — the first Scotsman ever to win the prestigious honour.' },
      { yr: '1965', text: 'Scores a record 30 goals in a single season for Manchester United.' },
      { yr: '1968', text: 'Wins the European Cup with Manchester United. A crowning achievement in club football.' },
      { yr: '1974', text: 'Scotland\'s all-time leading scorer at time of retirement; remembered as a national icon.' },
    ]
  },
  {
    name: 'James McFadden', role: 'Forward', era: '2002 – 2012 · 48 Caps',
    img: 'https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/prd-league/qfyxvojt0ac9kiuqmavm.jpg',
    bio: 'A fan favourite whose audacious long-range strike against France in 2007 became one of Scotland\'s most cherished football moments of the modern era.',
    achievements: [
      { yr: '2002', text: 'International debut at 19; immediately regarded as one of Scotland\'s brightest prospects.' },
      { yr: '2007', text: 'Scores breathtaking solo goal against France in Paris — a goal that defines a generation.' },
      { yr: '2008', text: 'Named Scotland\'s Player of the Year by the Scottish Football Writers\' Association.' },
      { yr: '2010', text: 'Leads Scotland\'s attack through a challenging qualifying campaign.' },
      { yr: '2012', text: 'Retires from international football with 15 goals and the undying love of the Tartan Army.' },
    ]
  },
  {
    name: 'Kenny Dalglish', role: 'Forward', era: '1971 – 1987 · 102 Caps',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Scotland_national_football_team_2022.jpg/960px-Scotland_national_football_team_2022.jpg',
    bio: 'Scotland\'s most capped outfield player and arguably its greatest ever. Dalglish led by example through four World Cup campaigns and achieved everything the game had to offer.',
    achievements: [
      { yr: '1974', text: 'Part of the Scotland squad for West Germany — gains his first World Cup experience.' },
      { yr: '1978', text: 'Stars in Argentina alongside Archie Gemmill; becomes the face of Scottish football.' },
      { yr: '1982', text: 'Captains Scotland in Spain. Leads by example in an incredibly competitive group.' },
      { yr: '1986', text: 'Final World Cup appearance in Mexico. Retires as Scotland\'s greatest ever player.' },
      { yr: '1987', text: 'Retires as Scotland\'s all-time record cap holder with 102 international appearances.' },
    ]
  },
  {
    name: 'Gordon Strachan', role: 'Midfielder', era: '1980 – 1992 · 50 Caps',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Scotland_v_England_1977.jpg/640px-Scotland_v_England_1977.jpg',
    bio: 'A fiery, dynamic midfielder who gave everything for Scotland across two World Cups. Strachan\'s energy and technical quality made him one of the most exciting players of his era.',
    achievements: [
      { yr: '1980', text: 'International debut; quickly establishes himself as key figure in Scotland\'s midfield.' },
      { yr: '1982', text: 'Features in Spain as Scotland exit on goal difference for the second consecutive tournament.' },
      { yr: '1986', text: 'Outstanding in Mexico — scores against Denmark as Scotland reach the knockout rounds.' },
      { yr: '1990', text: 'Final World Cup appearance; retires from international duty after Italia \'90.' },
      { yr: '2013', text: 'Returns to Scotland as national team manager; attempts to end the World Cup drought.' },
    ]
  },
  {
    name: 'Jim Leighton', role: 'Goalkeeper', era: '1982 – 1998 · 91 Caps',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Celtic_FC_team_photo_1888.jpg/640px-Celtic_FC_team_photo_1888.jpg',
    bio: 'Scotland\'s most capped goalkeeper. A dependable last line of defence across four World Cup tournaments, his longevity and consistency are unmatched in Scottish goalkeeping history.',
    achievements: [
      { yr: '1982', text: 'World Cup debut in Spain; establishes himself as Scotland\'s number one for over a decade.' },
      { yr: '1986', text: 'Reliable in Mexico — key saves help Scotland through vital group stage matches.' },
      { yr: '1990', text: 'Shines in Italia \'90; Scotland exit on goal difference despite strong defensive displays.' },
      { yr: '1998', text: 'Plays his fourth and final World Cup in France — Scotland\'s last appearance to date.' },
      { yr: '2000', text: 'Retires as Scotland\'s most capped goalkeeper with 91 appearances. A true legend.' },
    ]
  },
];


//PLAYER MODAL//
const playerModal = document.getElementById('playerModal');
const starSVG = `<svg viewBox="0 0 12 12"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/></svg>`;

function openModal(idx) {
  const p = players[idx];
  document.getElementById('modalImg').src         = p.img;
  document.getElementById('modalImg').alt         = p.name;
  document.getElementById('modalEra').textContent  = p.era;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalBio').textContent  = p.bio;
  document.getElementById('modalAchList').innerHTML = p.achievements.map(a =>
    `<li><span class="yr">${a.yr}</span>${starSVG}<span>${a.text}</span></li>`
  ).join('');
  playerModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  playerModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
playerModal.addEventListener('click', e => { if (e.target === playerModal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeTeamModal(); } });

//TEAM MODAL//
const teamModal = document.getElementById('teamModal');


//PLAYER CARD SWIPER//
function swipeCard(event, btn, dir) {
  event.stopPropagation();
  const card    = btn.closest('.player-thumb');
  const track   = card.querySelector('.player-media-track');
  const dots    = card.querySelectorAll('.media-dot');
  const hint    = card.querySelector('.player-thumb-hint');
  const current = parseInt(card.dataset.panel) || 0;
  const next    = Math.max(0, Math.min(1, current + dir));
  if (next === current) return;

  if (next === 1) {
    const vPanel = card.querySelectorAll('.player-media-panel')[1];
    if (!vPanel.querySelector('iframe')) {
      const iframe          = document.createElement('iframe');
      iframe.src            = card.dataset.video + '&autoplay=1';
      iframe.allow          = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText  = 'width:100%;height:100%;border:none;display:block;';
      vPanel.appendChild(iframe);
    }
  }

  track.style.transform = next === 1 ? 'translateX(-50%)' : 'translateX(0)';
  card.dataset.panel    = next;
  hint.textContent      = 'View Profile';
  dots.forEach((d, i)  => d.classList.toggle('active', i === next));
}

function handleCardClick(event, playerIndex) {
  if (event.target.classList.contains('media-arrow')) return;
  const card = event.currentTarget;
  if (parseInt(card.dataset.panel) === 0) openModal(playerIndex);
}

document.querySelectorAll('.player-thumb').forEach(card => {
  let startX = 0;
  card.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  card.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 30) return;
    const dir = diff > 0 ? 1 : -1;
    const btn = card.querySelector(dir === 1 ? '.media-arrow.right' : '.media-arrow.left');
    if (btn) swipeCard({ stopPropagation: () => {} }, btn, dir);
  }, { passive: true });
});

//PLAYER PAGINATION//
let currentPage = 0;
const totalPages = 2;

function changePage(dir) { goPage(currentPage + dir); }

function goPage(n) {
  document.getElementById(`pg-${currentPage}`).classList.remove('active');
  document.querySelectorAll('.pg-dot')[currentPage].classList.remove('active');
  currentPage = Math.max(0, Math.min(totalPages - 1, n));
  document.getElementById(`pg-${currentPage}`).classList.add('active');
  document.querySelectorAll('.pg-dot')[currentPage].classList.add('active');
  document.getElementById('prevBtn').disabled = currentPage === 0;
  document.getElementById('nextBtn').disabled = currentPage === totalPages - 1;
}

//STORIES SCROLL//
const storiesTrack = document.getElementById('storiesTrack');
let isDrag = false, dragStartX = 0, scrollLeft = 0;

storiesTrack.addEventListener('mousedown', e => {
  isDrag      = true;
  dragStartX  = e.pageX - storiesTrack.offsetLeft;
  scrollLeft  = storiesTrack.scrollLeft;
});
document.addEventListener('mouseup', () => { isDrag = false; });
storiesTrack.addEventListener('mousemove', e => {
  if (!isDrag) return;
  e.preventDefault();
  storiesTrack.scrollLeft = scrollLeft - (e.pageX - storiesTrack.offsetLeft - dragStartX) * 1.5;
});

function scrollStories(dir) {
  storiesTrack.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

//STORY SUBMISSION//
(function () {
  const backdrop  = document.getElementById('storyFormBackdrop');
  const openBtn   = document.getElementById('openStoryForm');
  const closeBtn  = document.getElementById('closeStoryForm');
  const submitBtn = document.getElementById('submitStory');
  const textarea  = document.getElementById('storyQuote');
  const charCount = document.getElementById('charCount');
  const errorEl   = document.getElementById('storyError');

  const COLOURS = ['red', 'green', 'gold', 'dark', 'deep'];
  let colourIdx = 0;
  function nextColour() { return COLOURS[(colourIdx++) % COLOURS.length]; }

  function openForm()  { backdrop.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function closeForm() { backdrop.classList.remove('open'); document.body.style.overflow = ''; errorEl.textContent = ''; }

  function addStoryCard(name, year, game, quote, fromStorage = false) {
    const card = document.createElement('div');
    card.className = 'story-card ' + nextColour() + ' card-float new-story';
    card.innerHTML =
      '<p class="story-year">'  + year  + '</p>' +
      '<p class="story-quote">&ldquo;' + quote + '&rdquo;</p>' +
      '<p class="story-name">&mdash; ' + name  + '</p>' +
      '<p class="story-game">Game Watched: ' + game + '</p>' +
      '<button class="story-delete" aria-label="Delete story">&#10005; Delete</button>';

    card.querySelector('.story-delete').addEventListener('click', () => {
      card.classList.add('removing');
      setTimeout(() => {
        card.remove();
        const stored  = JSON.parse(localStorage.getItem('dreamland_stories') || '[]');
        const updated = stored.filter(
          s => !(s.name === name && s.year === year && s.game === game && s.quote === quote)
        );
        localStorage.setItem('dreamland_stories', JSON.stringify(updated));
      }, 420);
    });

    storiesTrack.appendChild(card);
    if (!fromStorage) {
      setTimeout(() => storiesTrack.scrollTo({ left: storiesTrack.scrollWidth, behavior: 'smooth' }), 100);
    }
  }

  function loadStories() {
    const stored = JSON.parse(localStorage.getItem('dreamland_stories') || '[]');
    // Deduplicate before loading
    const seen   = new Set();
    const unique = stored.filter(s => {
      const key = s.name + s.year + s.game + s.quote;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    localStorage.setItem('dreamland_stories', JSON.stringify(unique));
    unique.forEach(s => addStoryCard(s.name, s.year, s.game, s.quote, true));
  }

  openBtn.addEventListener('click', openForm);
  closeBtn.addEventListener('click', closeForm);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeForm(); });
  textarea.addEventListener('input', () => { charCount.textContent = textarea.value.length; });

  submitBtn.addEventListener('click', () => {
    errorEl.textContent = '';
    const name  = document.getElementById('storyName').value.trim();
    const year  = document.getElementById('storyYear').value;
    const game  = document.getElementById('storyGame').value.trim();
    const quote = textarea.value.trim();

    if (!name)  { errorEl.textContent = 'Please enter your name.';        return; }
    if (!year)  { errorEl.textContent = 'Please select a year.';          return; }
    if (!game)  { errorEl.textContent = 'Please enter the game watched.'; return; }
    if (!quote) { errorEl.textContent = 'Please write your story.';       return; }

    addStoryCard(name, year, game, quote);

    const existing     = JSON.parse(localStorage.getItem('dreamland_stories') || '[]');
    const alreadySaved = existing.some(
      s => s.name === name && s.year === year && s.game === game && s.quote === quote
    );
    if (!alreadySaved) {
      existing.push({ name, year, game, quote });
      localStorage.setItem('dreamland_stories', JSON.stringify(existing));
    }

    document.getElementById('storyName').value = '';
    document.getElementById('storyYear').value = '';
    document.getElementById('storyGame').value = '';
    textarea.value        = '';
    charCount.textContent = '0';
    closeForm();
  });

  loadStories();
})();

//FAQ CAROUSEL//
(function () {
  const faqTrack = document.getElementById('faqTrack');
  const dotsWrap = document.getElementById('faqDots');
  const prevBtn  = document.getElementById('faqPrev');
  const nextBtn  = document.getElementById('faqNext');
  if (!faqTrack) return;

  const cards        = Array.from(faqTrack.children);
  const visibleCount = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  let   current      = 0;

  function buildDots() {
    dotsWrap.innerHTML = '';
    const total = Math.ceil(cards.length / visibleCount());
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'faq-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, Math.ceil(cards.length / visibleCount()) - 1));
    const cardW  = cards[0].offsetWidth;
    const offset = current * visibleCount() * (cardW + 24);
    faqTrack.style.transform = 'translateX(-' + offset + 'px)';
    dotsWrap.querySelectorAll('.faq-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= Math.ceil(cards.length / visibleCount()) - 1;
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  let faqStartX = 0;
  faqTrack.addEventListener('touchstart', e => { faqStartX = e.touches[0].clientX; }, { passive: true });
  faqTrack.addEventListener('touchend', e => {
    const diff = faqStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  let faqDragging = false, faqDragX = 0;
  faqTrack.addEventListener('mousedown', e => { faqDragging = true; faqDragX = e.clientX; });
  faqTrack.addEventListener('mouseup', e => {
    if (!faqDragging) return;
    faqDragging = false;
    const diff = faqDragX - e.clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });
  faqTrack.addEventListener('mouseleave', () => { faqDragging = false; });

  window.addEventListener('resize', () => { buildDots(); goTo(0); });
  buildDots();
  goTo(0);
})();

//SCROLL REVEAL//
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.step, .section-header, .tl-card, .tl-dot').forEach(el => {
  revealObserver.observe(el);
});

// Stagger delay for sibling .step elements
document.querySelectorAll('.step').forEach(el => {
  const siblings = Array.from(el.parentElement.querySelectorAll('.step'));
  el.style.transitionDelay = (siblings.indexOf(el) * 0.1) + 's';
});

//NAV ACTIVE HIGHLIGHT//
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id));
  });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

//HERO PARALLAX//
const heroSection = document.getElementById('home');
window.addEventListener('scroll', () => {
  if (!heroSection) return;
  const offset = Math.min(40, window.scrollY * 0.15);
  heroSection.style.backgroundPosition = `center ${-offset}px`;
});

//QUIZ//
document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    {
      q: "In which year did Scotland make their first ever FIFA World Cup appearance?",
      options: ["1950", "1954", "1958", "1962"],
      answer: 1
    },
    {
      q: "Which country hosted the 1978 World Cup where Archie Gemmill scored his famous goal?",
      options: ["Brazil", "West Germany", "Argentina", "Spain"],
      answer: 2
    },
    {
      q: "Scotland went unbeaten at the 1974 World Cup but still went home. Who did they draw with in their final group game?",
      options: ["West Germany", "Yugoslavia", "Brazil", "Zaire"],
      answer: 2
    },
    {
      q: "Archie Gemmill's famous 1978 goal was scored against which nation?",
      options: ["West Germany", "Netherlands", "Brazil", "Peru"],
      answer: 1
    },
    {
      q: "How many caps did Kenny Dalglish earn for Scotland — a record for an outfield player?",
      options: ["86", "91", "97", "102"],
      answer: 3
    },
    {
      q: "In which city was Scotland's 1998 World Cup opening game against Brazil played?",
      options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
      answer: 2
    },
    {
      q: "Which Scotland goalkeeper holds the record for the most international caps?",
      options: ["Andy Goram", "Jim Leighton", "Alan Rough", "Craig Gordon"],
      answer: 1
    },
    {
      q: "Gordon Strachan scored against which nation at the 1986 World Cup in Mexico?",
      options: ["West Germany", "Uruguay", "Denmark", "Brazil"],
      answer: 2
    },
    {
      q: "Scotland went out of how many World Cups on goal difference?",
      options: ["Two", "Three", "Four", "Five"],
      answer: 1
    },
    {
      q: "Who is Scotland's most capped goalkeeper of all time?",
      options: ["Andy Goram", "Alan Rough", "Jim Leighton", "David Marshall"],
      answer: 2
    },
  ];

  const trigger    = document.getElementById('quizTrigger');
  const panel      = document.getElementById('quizPanel');
  const backdrop   = document.getElementById('quizBackdrop');
  const closeBtn   = document.getElementById('quizClose');
  const beginBtn   = document.getElementById('quizBegin');
  const restartBtn = document.getElementById('quizRestart');

  const startScreen    = document.getElementById('quizStart');
  const questionScreen = document.getElementById('quizQuestion');
  const resultScreen   = document.getElementById('quizResult');

  const counterEl     = document.getElementById('quizCounter');
  const qTextEl       = document.getElementById('quizQText');
  const optionsEl     = document.getElementById('quizOptions');
  const progressEl    = document.getElementById('quizProgressBar');
  const scoreTitleEl  = document.getElementById('quizScoreTitle');
  const scoreDetailEl = document.getElementById('quizScoreDetail');
  const verdictEl     = document.getElementById('quizVerdict');

  // Guard — if any element is missing, bail silently
  if (!trigger || !panel || !backdrop) return;

  let current = 0;
  let score   = 0;

  function openQuiz() {
    panel.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuiz() {
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showScreen(screen) {
    [startScreen, questionScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
  }

  function startQuiz() {
    current = 0;
    score   = 0;
    showScreen(questionScreen);
    renderQuestion();
  }

  function renderQuestion() {
    const q   = questions[current];
    const pct = (current / questions.length) * 100;

    progressEl.style.width = pct + '%';
    counterEl.textContent  = 'Question ' + (current + 1) + ' of ' + questions.length;
    qTextEl.textContent    = q.q;
    optionsEl.innerHTML    = '';

    q.options.forEach(function (opt, i) {
      const btn       = document.createElement('button');
      btn.className   = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', function () { selectAnswer(i, btn); });
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(index, btn) {
    const q    = questions[current];
    const btns = optionsEl.querySelectorAll('.quiz-option');

    btns.forEach(function (b) { b.disabled = true; });

    if (index === q.answer) {
      score++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      btns[q.answer].classList.add('correct');
    }

    setTimeout(function () {
      current++;
      if (current < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }, 1100);
  }

  function showResult() {
    progressEl.style.width = '100%';
    const pct = Math.round((score / questions.length) * 100);

    if (pct >= 80) {
      scoreTitleEl.textContent = 'Tartan Army Legend';
      verdictEl.textContent    = 'You know your Scotland history inside out. The Tartan Army would be proud.';
    } else if (pct >= 50) {
      scoreTitleEl.textContent = 'Solid Scotland Fan';
      verdictEl.textContent    = 'Decent knowledge. A few more late nights watching \'78 highlights and you\'ll be there.';
    } else {
      scoreTitleEl.textContent = 'Keep Watching Reruns';
      verdictEl.textContent    = 'Don\'t worry — that\'s what this documentary is for. Give it another read and come back.';
    }

    scoreDetailEl.textContent = score + ' / ' + questions.length;
    showScreen(resultScreen);
  }

  trigger.addEventListener('click', openQuiz);
  closeBtn.addEventListener('click', closeQuiz);
  backdrop.addEventListener('click', closeQuiz);
  beginBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);
});

// BURGER MENU //
(function () {
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  if (!burger) return;

  burger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
