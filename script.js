/* ---------- fichas dos gatos ---------- */
const gatos = [
  {nome:"Mochi", idade:"2 anos", raca:"Ragdoll, creme com pontas escuras", corpo:"#F0E4D2", face:"#D9C3A8", olho:"#6FA8C7",
   texto:"Veio numa caixa de papelão deixada atrás da padaria da esquina, num sábado de chuva. Hoje dorme em cima do balcão do matcha e considera aquele o posto dela. Aceita carinho de qualquer pessoa, a qualquer hora, sem negociar."},
  {nome:"Yuzu", idade:"1 ano", raca:"Sem raça definida, laranja rajado", corpo:"#E8A85C", face:"#F2C68B", olho:"#8FBF4D",
   texto:"Ficou três dias preso num telhado antes de o bombeiro descer com ele no colo. Não aprendeu nada com o susto: continua subindo em tudo. Rouba palitinhos de dango se você piscar."},
  {nome:"Sora", idade:"4 anos", raca:"Azul-russo", corpo:"#8D98A3", face:"#AEB8C2", olho:"#7FB069",
   texto:"Passa a primeira meia hora observando você de cima da estante. Se você ficar quieto e não insistir, ele desce, encosta a cabeça no seu joelho e fica. Vale a espera — todo mundo diz isso."},
  {nome:"Kuro", idade:"3 anos", raca:"Bombaim, preto inteiro", corpo:"#3A3A3E", face:"#4F4F55", olho:"#E0A93B",
   texto:"Foi devolvido duas vezes por superstição, o que diz mais sobre as pessoas do que sobre ele. Supervisiona a máquina de café da sala de descanso e mia quando o leite demora."},
  {nome:"Hana", idade:"6 meses", raca:"Tricolor (calico)", corpo:"#F3EDE4", face:"#E9A24B", olho:"#69A8B5",
   texto:"Resgatada com quatro semanas dentro de um caixote de frutas na feira, mamando em mamadeira de seringa. É a menor e a mais barulhenta. Ainda não descobriu que não cabe dentro das xícaras."},
  {nome:"Tofu", idade:"9 anos", raca:"Persa branco", corpo:"#FAF6EE", face:"#E4D9C6", olho:"#C98FA0",
   texto:"O mais velho da casa e o único que nunca corre. Chegou quando a tutora faleceu e a família não pôde ficar com ele. Escolhe uma pessoa por sessão e dorme colado nela o tempo todo."},
  {nome:"Ginji", idade:"2 anos", raca:"Maine coon, cinza malhado", corpo:"#9A9287", face:"#BCB4A7", olho:"#D9A441",
   texto:"Sete quilos de gato e nenhuma noção disso. Tenta sentar no colo como se fosse filhote e fica magoado quando não cabe. Ronrona tão alto que dá para ouvir da escada."},
  {nome:"Azuki", idade:"3 anos", raca:"Siamês seal point", corpo:"#E4D6C0", face:"#6A5145", olho:"#5FA3D9",
   texto:"Fala. O tempo inteiro. Chegou de uma protetora em Osasco e desde então comenta tudo o que acontece na sala. Se você responder, a conversa dura os quarenta minutos inteiros."}
];

function retrato(g){
  return `<svg class="retrato" viewBox="0 0 120 120" role="img" aria-label="Ilustração de ${g.nome}">
    <ellipse cx="60" cy="108" rx="40" ry="7" fill="var(--linha)" opacity=".5"/>
    <path class="rabo" d="M92 100c18-4 18-26 6-32" fill="none" stroke="${g.corpo}" stroke-width="10" stroke-linecap="round"/>
    <path d="M32 104c-4-22 10-34 28-34s32 12 28 34z" fill="${g.corpo}"/>
    <path class="orelha-e" d="M26 40 22 14l24 14z" fill="${g.corpo}"/>
    <path class="orelha-e" d="M29 36 27 22l13 8z" fill="${g.face}" opacity=".85"/>
    <path class="orelha-d" d="M94 40 98 14 74 28z" fill="${g.corpo}"/>
    <path class="orelha-d" d="M91 36 93 22 80 30z" fill="${g.face}" opacity=".85"/>
    <ellipse cx="60" cy="56" rx="36" ry="32" fill="${g.corpo}"/>
    <ellipse cx="60" cy="64" rx="22" ry="18" fill="${g.face}" opacity=".7"/>
    <ellipse cx="47" cy="52" rx="6" ry="7.5" fill="#20211D"/>
    <ellipse cx="73" cy="52" rx="6" ry="7.5" fill="#20211D"/>
    <ellipse cx="47" cy="50" rx="5" ry="6" fill="${g.olho}"/>
    <ellipse cx="73" cy="50" rx="5" ry="6" fill="${g.olho}"/>
    <ellipse cx="47" cy="50" rx="1.8" ry="4.4" fill="#171814"/>
    <ellipse cx="73" cy="50" rx="1.8" ry="4.4" fill="#171814"/>
    <circle cx="45.2" cy="47.6" r="1.5" fill="#fff" opacity=".9"/>
    <circle cx="71.2" cy="47.6" r="1.5" fill="#fff" opacity=".9"/>
    <path d="M56 64h8l-4 4z" fill="#C9737F"/>
    <path d="M60 68v3M60 71q-4 4-8 0M60 71q4 4 8 0" fill="none" stroke="#20211D" stroke-width="2" stroke-linecap="round"/>
    <path d="M28 56H12M28 62l-15 5M92 56h16M92 62l15 5" stroke="#20211D" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>
    <circle cx="36" cy="62" r="5" fill="${g.olho}" opacity=".22"/>
    <circle cx="84" cy="62" r="5" fill="${g.olho}" opacity=".22"/>
  </svg>`;
}

document.getElementById('gatos-grid').innerHTML = gatos.map(g => `
  <article class="ficha">
    <span class="tag">para adoção</span>
    ${retrato(g)}
    <h3>${g.nome}</h3>
    <p class="meta">${g.idade} · ${g.raca}</p>
    <p>${g.texto}</p>
  </article>
`).join('');

/* ---------- pétalas de sakura ---------- */
(function(){
  const cv = document.getElementById('sakura');
  const ctx = cv.getContext('2d');
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)');
  let L = 0, A = 0, petalas = [], rodando = false, raf = null;

  function medir(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    L = window.innerWidth; A = window.innerHeight;
    cv.width = L * dpr; cv.height = A * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function nova(topo){
    return {
      x: Math.random() * L,
      y: topo ? -20 - Math.random() * A : Math.random() * A,
      t: 7 + Math.random() * 9,
      vy: 0.28 + Math.random() * 0.55,
      fase: Math.random() * Math.PI * 2,
      giro: Math.random() * Math.PI,
      vg: (Math.random() - 0.5) * 0.022,
      balanco: 0.35 + Math.random() * 0.75,
      alfa: 0.45 + Math.random() * 0.4
    };
  }
  function desenhar(p){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.giro);
    ctx.scale(1, Math.max(0.25, Math.cos(p.fase)));
    ctx.globalAlpha = p.alfa;
    ctx.fillStyle = '#E7B7C0';
    ctx.beginPath();
    ctx.moveTo(0, -p.t);
    ctx.bezierCurveTo(p.t * .85, -p.t * .55, p.t * .62, p.t * .62, 0, p.t);
    ctx.bezierCurveTo(-p.t * .62, p.t * .62, -p.t * .85, -p.t * .55, 0, -p.t);
    ctx.fill();
    ctx.restore();
  }
  function quadro(){
    ctx.clearRect(0, 0, L, A);
    for (const p of petalas){
      p.y += p.vy;
      p.fase += 0.016;
      p.giro += p.vg;
      p.x += Math.sin(p.fase) * p.balanco;
      if (p.y > A + 24 || p.x < -40 || p.x > L + 40) Object.assign(p, nova(true), {y: -20});
      desenhar(p);
    }
    raf = requestAnimationFrame(quadro);
  }
  function iniciar(){
    medir();
    if (reduzir.matches){ ctx.clearRect(0,0,L,A); cancelAnimationFrame(raf); rodando = false; return; }
    const total = L < 700 ? 12 : 26;
    petalas = Array.from({length: total}, () => nova(false));
    if (!rodando){ rodando = true; quadro(); }
  }
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(iniciar, 200); });
  reduzir.addEventListener?.('change', iniciar);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden){ cancelAnimationFrame(raf); rodando = false; }
    else if (!rodando && !reduzir.matches){ rodando = true; quadro(); }
  });
  iniciar();
})();

/* ---------- reserva ---------- */
(function(){
  const form = document.getElementById('form-reserva');
  const caixa = document.getElementById('confirma');
  const data = document.getElementById('data');
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  data.min = hoje.toISOString().slice(0,10);

  try {
    const salvo = JSON.parse(localStorage.getItem('neko-reserva') || 'null');
    if (salvo && salvo.nome) document.getElementById('nome').value = salvo.nome;
    if (salvo && salvo.fone) document.getElementById('fone').value = salvo.fone;
  } catch (e) { /* armazenamento indisponível */ }

  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    const nome = form.nome.value.trim();
    const fone = form.fone.value.trim();
    const dia = form.data.value;
    const hora = form.hora.value;
    const pessoas = form.pessoas.value;

    if (!nome || !fone || !dia || !hora){
      caixa.hidden = false;
      caixa.innerHTML = 'Faltou preencher nome, WhatsApp, dia e horário para fechar a reserva.';
      return;
    }
    const d = new Date(dia + 'T12:00:00');
    const legivel = d.toLocaleDateString('pt-BR', {weekday:'long', day:'numeric', month:'long'});
    const qtd = parseInt(pessoas, 10);

    caixa.hidden = false;
    caixa.innerHTML = '<b>Reserva anotada, ' + nome.split(' ')[0] + '.</b><br>' +
      legivel + ', às ' + hora + ', para ' + pessoas + '. ' +
      'Total de R$ ' + (qtd * 35) + ', que vira crédito no seu consumo. ' +
      'Confirmamos pelo WhatsApp em até duas horas.';
    caixa.scrollIntoView({block:'nearest', behavior:'smooth'});

    try { localStorage.setItem('neko-reserva', JSON.stringify({nome, fone})); } catch (e) {}
  });
})();

/* ---------- tema ---------- */
(function(){
  const b = document.getElementById('tema');
  let atual = null;
  try { atual = localStorage.getItem('neko-tema'); } catch (e) {}
  if (atual) document.documentElement.dataset.theme = atual;
  b.addEventListener('click', () => {
    const escuroAgora = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const novo = escuroAgora ? 'light' : 'dark';
    document.documentElement.dataset.theme = novo;
    try { localStorage.setItem('neko-tema', novo); } catch (e) {}
  });
})();