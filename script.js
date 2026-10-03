console.log('script v3 carregado');

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

const ANUNCIOS = {
  Instagram: {jp:'写真', ti:'Para quem chegou pelo Instagram', s:[
    ['Stories','Postou, marcou, ganhou','Mostre sua visita nos stories marcando @nekomatcha.sp e leve um mochi da casa na próxima reserva.','Reservar minha vaga','#reserva'],
    ['Bastidores','Os oito têm rotina no feed','Siga @nekomatcha.sp para ver as sonecas, as travessuras e os gatinhos que acabaram de ganhar um lar.','Quero as novidades','Oi! Vim pelo Instagram e quero saber das novidades da Neko Matcha'],
    ['Sakura latte','Último mês de sakura','O Sakura latte só sai entre agosto e outubro. Peça um no balcão e ganhe um mochi de brinde.','Reservar e provar','#reserva']
  ]},
  Facebook: {jp:'交流', ti:'Para quem chegou pelo Facebook', s:[
    ['Compartilhe','Compartilhou, concorreu','Divulgue nossa página para os amigos e entre no sorteio mensal de uma sessão com os gatinhos para duas pessoas.','Quero participar','Oi! Vim pelo Facebook e quero participar do sorteio mensal'],
    ['Avaliação','Sua opinião vale um dango','Deixe uma avaliação com foto da sua visita na nossa página e ganhe um dango tricolor na próxima vez.','Reservar minha vaga','#reserva'],
    ['Eventos','Fique de olho nos eventos','Mutirões de adoção e encontros de chá são anunciados primeiro na página. Pergunte pela próxima data.','Perguntar a data','Oi! Vim pelo Facebook e quero saber a data do próximo evento']
  ]},
  TikTok: {jp:'動画', ti:'Para quem chegou pelo TikTok', s:[
    ['Desafio da semana','O vídeo mais criativo ganha o dia','Quem fizer o vídeo mais criativo da semana ganha uma sobremesa especial e um horário gratuito com os gatinhos, com direito a até 5 acompanhantes.','Quero participar','Oi! Vim pelo TikTok e quero participar do desafio do vídeo mais criativo'],
    ['Como participar','Grave, marque e use a hashtag','Faça seu vídeo na Neko Matcha, marque @nekomatcha.sp e use #NekoMatchaCriativo. Sem flash e sem acordar ninguém: o gato decide.','Reservar minha vaga','#reserva'],
    ['Ritual do matcha','O chasen também rende view','Peneirar, bater e servir: o preparo do matcha no balcão dá vídeo bonito. Combine com a equipe o melhor horário para gravar.','Combinar horário','Oi! Vim pelo TikTok e quero combinar um horário para gravar o preparo do matcha']
  ]},
  Amigos: {jp:'友達', ti:'Para quem veio por indicação de amigos', s:[
    ['Em dupla','Traga um amigo, ganhe um mochi','Reservando para duas pessoas ou mais, vocês dividem um mochi da casa por nossa conta.','Reservar para a turma','#reserva'],
    ['Turma grande','A quarta pessoa entra de graça','Reserve para 4 ou mais pessoas e a reserva da quarta pessoa é por nossa conta. A sala recebe até 6 por sessão.','Reservar para a turma','#reserva'],
    ['Indique','Indicou, os dois ganham','Seu amigo reserva e diz o seu nome no balcão: vocês dois ganham um taiyaki na próxima visita.','Quero indicar','Oi! Quero indicar um amigo para a Neko Matcha']
  ]},
  Eventos: {jp:'祭り', ti:'Para quem nos conheceu em um evento', s:[
    ['Nos vimos por aí','Falou o evento, ganhou um dango','Conheceu a gente em uma feira ou evento? Diga o nome dele no balcão e ganhe um dango tricolor.','Reservar minha vaga','#reserva'],
    ['Seu evento','Leve a Neko Matcha para a sua turma','Aniversários, times e encontros: monte uma sessão para até 6 pessoas e fale com a gente sobre o cardápio.','Montar minha sessão','Oi! Quero montar uma sessão de grupo na Neko Matcha'],
    ['Adoção','Mutirão com as protetoras','Participamos de feiras de adoção com protetoras parceiras. Veja quem está esperando por um lar.','Conhecer os gatinhos','#gatos']
  ]},
  Outros: {jp:'特典', ti:'Para quem chegou até a gente', s:[
    ['Boas-vindas','Seja bem-vindo à casa','Os R$ 35 da reserva viram crédito integral no café: na prática, você paga só o matcha e o tempo com os gatos vem junto.','Reservar minha vaga','#reserva'],
    ['Primeira vez','Comece pelo clássico','Um usucha cerimonial com um mochi da casa antes da sessão é a estreia que a gente recomenda.','Ver o cardápio','#cardapio'],
    ['Adoção','Oito finais felizes esperando','Todos os residentes estão castrados, vacinados e de portas abertas para adoção.','Conhecer os gatinhos','#gatos']
  ]}
};

const ORIGENS_UTM = {instagram:'Instagram', ig:'Instagram', facebook:'Facebook', fb:'Facebook', tiktok:'TikTok', tt:'TikTok', amigos:'Amigos', indicacao:'Amigos', evento:'Eventos', eventos:'Eventos'};
const origemDaUtm = s => ORIGENS_UTM[String(s || '').toLowerCase().trim()] || '';
const waLink = m => 'https://wa.me/5511956397841?text=' + encodeURIComponent(m);

const anuncios = (function(){
  const hero = document.getElementById('hero');
  const pInicio = document.getElementById('painel-inicio');
  const pOfertas = document.getElementById('painel-ofertas');
  const setaProx = document.getElementById('seta-prox');
  const setaAnt = document.getElementById('seta-ant');
  const trilho = document.getElementById('car-trilho');
  const pontos = document.getElementById('car-pontos');
  let ativo = false;

  const indice = () => Math.round(trilho.scrollLeft / Math.max(trilho.clientWidth, 1));
  function marcar(){
    const i = indice();
    Array.from(pontos.children).forEach((b, k) => {
      b.classList.toggle('on', k === i);
      b.setAttribute('aria-current', k === i ? 'true' : 'false');
    });
  }
  function ir(i){
    const n = trilho.children.length;
    if (!n) return;
    trilho.scrollTo({left: ((i + n) % n) * trilho.clientWidth, behavior: 'smooth'});
  }
  function mostrar(abrir){
    hero.classList.toggle('ver-anuncios', abrir);
    pInicio.inert = abrir;
    pOfertas.inert = !abrir;
    pOfertas.setAttribute('aria-hidden', abrir ? 'false' : 'true');
    setaProx.hidden = !ativo || abrir;
    setaAnt.hidden = !abrir;
    setaProx.classList.toggle('pulsa', ativo && !abrir);
  }
  function ativar(origem, nome){
    const d = ANUNCIOS[origem] || ANUNCIOS.Outros;
    const primeiro = String(nome || '').trim().split(' ')[0];
    document.getElementById('ofertas-jp').textContent = d.jp;
    document.getElementById('ofertas-titulo').textContent = d.ti;
    document.getElementById('ofertas-sub').textContent = (primeiro ? primeiro + ', preparamos' : 'Preparamos') + ' estas ofertas para você.';
    trilho.innerHTML = d.s.map((a, i) => {
      const interno = a[4].charAt(0) === '#';
      return '<article class="car-slide" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' de ' + d.s.length + '">' +
        '<span class="car-k">' + a[0] + '</span><h3>' + a[1] + '</h3><p>' + a[2] + '</p>' +
        '<a class="btn" href="' + (interno ? a[4] : waLink(a[4])) + '"' + (interno ? '' : ' target="_blank" rel="noopener"') + '>' + a[3] + '</a></article>';
    }).join('');
    pontos.innerHTML = d.s.map((a, i) => '<button type="button" aria-label="Ir para o anúncio ' + (i + 1) + '" data-i="' + i + '"></button>').join('');
    trilho.scrollLeft = 0;
    marcar();
    ativo = true;
    mostrar(false);
  }

  trilho.addEventListener('scroll', () => requestAnimationFrame(marcar), {passive: true});
  pontos.addEventListener('click', ev => { const b = ev.target.closest('button[data-i]'); if (b) ir(parseInt(b.dataset.i, 10)); });
  document.getElementById('car-ant').addEventListener('click', () => ir(indice() - 1));
  document.getElementById('car-prox').addEventListener('click', () => ir(indice() + 1));
  trilho.addEventListener('keydown', ev => {
    if (ev.key === 'ArrowLeft') { ev.preventDefault(); ir(indice() - 1); }
    if (ev.key === 'ArrowRight') { ev.preventDefault(); ir(indice() + 1); }
  });
  setaProx.addEventListener('click', () => mostrar(true));
  setaAnt.addEventListener('click', () => mostrar(false));
  mostrar(false);

  return {
    ativar,
    abrir(){
      if (!ativo) return;
      document.getElementById('topo').scrollIntoView({behavior: 'smooth'});
      mostrar(true);
    }
  };
})();

/* ---------- Envio da reserva (Google Apps Script) ---------- */
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzG7-w3FqLZ0utCjS4wfO6xOOLWUTHc_VlpxJkjZqjmK_94iQkP-Lrcj-ZxSVOl2nCn/exec';

// Lança erro em caso de falha; devolve o JSON do script em caso de sucesso.
async function enviarReserva(dados){
  if (!/^https:\/\/script\.google\.com\//.test(WEBHOOK_URL)) throw new Error('Webhook não configurado');
  const ctrl = new AbortController();
  const limite = setTimeout(() => ctrl.abort(), 20000);
  try {
    const r = await fetch(WEBHOOK_URL, {
      method: 'POST',
      // text/plain evita o preflight (OPTIONS) e, com ele, o erro de CORS
      headers: {'Content-Type': 'text/plain;charset=utf-8'},
      redirect: 'follow', // segue o redirecionamento 302 do Google
      body: JSON.stringify(dados),
      signal: ctrl.signal
    });
    const texto = await r.text();
    let j;
    try { j = JSON.parse(texto); } catch (e) { throw new Error('Resposta inválida do Apps Script (HTTP ' + r.status + '): ' + texto.slice(0, 150)); }
    if (!j || j.status !== 'success') throw new Error((j && j.message) || 'Falha ao registrar a reserva');
    console.log('Reserva efetuada com sucesso! Posição:', j.posicao);
    return j;
  } finally { clearTimeout(limite); }
}

(function(){
  const PRECO = 35;
  const form = document.getElementById('form-reserva');
  const caixa = document.getElementById('confirma');
  const botao = document.getElementById('btn-reserva');
  const rotulo = botao.querySelector('.btn-rotulo');
  const rotuloInicial = rotulo.textContent;
  const campoData = document.getElementById('data');
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  campoData.min = hoje.toISOString().slice(0,10);
  let enviando = false, timer = null, fontes = null;
  const UTMS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];

  (function(){
    let utm = {};
    try { utm = JSON.parse(localStorage.getItem('neko-utm') || '{}') || {}; } catch (e) {}
    const url = new URLSearchParams(location.search);
    const novos = {};
    UTMS.forEach(k => { const v = (url.get(k) || '').trim().slice(0, 100); if (v) novos[k] = v; });
    if (Object.keys(novos).length){
      utm = novos;
      try { localStorage.setItem('neko-utm', JSON.stringify(utm)); } catch (e) {}
    }
    UTMS.forEach(k => { form.elements[k].value = utm[k] || ''; });
  })();

  try {
    const salvo = JSON.parse(localStorage.getItem('neko-reserva') || 'null');
    if (salvo && salvo.nome) form.nome.value = salvo.nome;
    if (salvo && salvo.fone) form.fone.value = salvo.fone;
    if (salvo && salvo.origem) { form.origem.value = salvo.origem; if (form.origem.value) anuncios.ativar(form.origem.value, salvo.nome); }
  } catch (e) {}
  const origemUtm = origemDaUtm((form.elements.utm_source || {}).value);
  if (origemUtm) form.origem.value = origemUtm;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function estado(nome, texto){
    clearTimeout(timer);
    botao.classList.remove('is-loading','is-success','is-error');
    if (nome) botao.classList.add('is-' + nome);
    botao.disabled = nome === 'loading';
    botao.setAttribute('aria-busy', nome === 'loading' ? 'true' : 'false');
    rotulo.textContent = texto || rotuloInicial;
    if (nome === 'success' || nome === 'error') timer = setTimeout(() => estado(), 5000);
  }

  function aviso(html, erro){
    caixa.hidden = false;
    caixa.classList.toggle('erro', !!erro);
    caixa.innerHTML = html;
  }

  function mascara(v){
    const d = v.replace(/\D/g,'').slice(0,11);
    if (d.length <= 2) return d ? '(' + d : '';
    if (d.length <= 6) return '(' + d.slice(0,2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0,2) + ') ' + d.slice(2,6) + '-' + d.slice(6);
    return '(' + d.slice(0,2) + ') ' + d.slice(2,7) + '-' + d.slice(7);
  }
  form.fone.addEventListener('input', () => { form.fone.value = mascara(form.fone.value); });

  function validar(d){
    const digitos = d.fone.replace(/\D/g,'');
    if (d.nome.length < 2) return {campo: form.nome, msg: 'Informe seu nome para a reserva e o certificado.'};
    if (digitos.length < 10 || digitos.length > 11) return {campo: form.fone, msg: 'Informe um WhatsApp válido com DDD, por exemplo (11) 90000-0000.'};
    if (!d.data) return {campo: form.data, msg: 'Escolha o dia da sua visita.'};
    if (new Date(d.data + 'T00:00:00') < hoje) return {campo: form.data, msg: 'Escolha uma data a partir de hoje.'};
    if (!d.hora) return {campo: form.hora, msg: 'Escolha um horário para a sessão.'};
    if (!d.origem) return {campo: form.origem, msg: 'Conte pra gente como você soube da Neko Matcha.'};
    return null;
  }

  function carregarFontes(){
    if (!fontes){
      if (!document.fonts) return Promise.resolve();
      const amostra = 'ÁáÃãÇçÉéÊêÍíÓóÔôÚúAaBbCc';
      fontes = Promise.race([
        Promise.all([
          document.fonts.load('900 80px "Zen Old Mincho"', amostra),
          document.fonts.load('600 40px "Zen Old Mincho"', amostra),
          document.fonts.load('700 40px "Dancing Script"', amostra),
          document.fonts.load('400 20px "Zen Maru Gothic"', amostra),
          document.fonts.load('700 20px "Zen Maru Gothic"', amostra)
        ]),
        new Promise(r => setTimeout(r, 4000))
      ]).catch(() => {});
    }
    return fontes;
  }

  async function gerarCertificado(nome){
    if (!window.html2canvas || !window.jspdf) throw new Error('Bibliotecas de PDF indisponíveis');
    await carregarFontes();
    const modelo = document.getElementById('tpl-certificado');
    const palco = document.createElement('div');
    palco.className = 'cert-palco';
    palco.setAttribute('aria-hidden', 'true');
    palco.appendChild(modelo.content.cloneNode(true));
    document.body.appendChild(palco);
    const cert = palco.querySelector('.cert');
    const campoNome = cert.querySelector('[data-cert-nome]');
    campoNome.textContent = nome;
    campoNome.style.fontSize = Math.max(24, Math.min(48, Math.floor(1500 / nome.length))) + 'px';
    try {
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      const canvas = await window.html2canvas(cert, {
        scale: 2,
        backgroundColor: '#F2EDE1',
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1123,
        windowHeight: 794,
        onclone: doc => { const p = doc.querySelector('.cert-palco'); if (p) p.style.left = '0'; }
      });
      const pdf = new window.jspdf.jsPDF({orientation: 'landscape', unit: 'mm', format: 'a4', compress: true});
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, 297, 210);
      pdf.save('certificado-neko-matcha-' + (slug(nome) || 'visitante') + '.pdf');
    } finally { palco.remove(); }
  }

  form.addEventListener('focusin', carregarFontes, {once: true});

  caixa.addEventListener('click', async function(ev){
    if (ev.target.closest('[data-ofertas]')){ anuncios.abrir(); return; }
    const alvo = ev.target.closest('[data-baixar]');
    if (!alvo) return;
    alvo.disabled = true;
    try { await gerarCertificado(alvo.dataset.baixar); } catch (e) {}
    alvo.disabled = false;
  });

  form.addEventListener('submit', async function(ev){
    ev.preventDefault();
    if (enviando) return;
    const dados = {
      nome: form.nome.value.replace(/\s+/g,' ').trim(),
      fone: form.fone.value.trim(),
      data: form.data.value,
      hora: form.hora.value,
      pessoas: form.pessoas.value,
      origem: form.origem.value
    };
    UTMS.forEach(k => { dados[k] = form.elements[k].value; });
    const falha = validar(dados);
    if (falha){
      aviso(esc(falha.msg), true);
      falha.campo.focus();
      return;
    }

    enviando = true;
    caixa.hidden = true;
    estado('loading', 'Enviando…');
    try {
      await enviarReserva(dados);
    } catch (e) {
      console.error('Falha ao enviar a reserva:', e);
      enviando = false;
      estado('error', 'Tentar de novo');
      aviso('<b>Não conseguimos registrar sua reserva.</b><br>Confira sua conexão e tente de novo. Se continuar, chame a gente pelo WhatsApp.', true);
      return;
    }

    const qtd = parseInt(dados.pessoas, 10);
    const legivel = new Date(dados.data + 'T12:00:00').toLocaleDateString('pt-BR', {weekday:'long', day:'numeric', month:'long'});
    estado('success', 'Reserva confirmada!');
    anuncios.ativar(dados.origem, dados.nome);
    aviso('<b>Reserva anotada, ' + esc(dados.nome.split(' ')[0]) + '.</b><br>' +
      esc(legivel) + ', às ' + esc(dados.hora) + ', para ' + esc(dados.pessoas) + '. ' +
      'Total de R$ ' + (qtd * PRECO) + ', que vira crédito no seu consumo. ' +
      'Confirmamos pelo WhatsApp em até duas horas.<br>' +
      '<button type="button" class="btn-link" data-ofertas>Ver minhas ofertas ›</button><br>' +
      '<span id="status-cert">Gerando seu certificado…</span>');
    caixa.scrollIntoView({block:'nearest', behavior:'smooth'});
    try { localStorage.setItem('neko-reserva', JSON.stringify({nome: dados.nome, fone: dados.fone, origem: dados.origem})); } catch (e) {}

    const status = document.getElementById('status-cert');
    try {
      await gerarCertificado(dados.nome);
      status.textContent = 'Certificado baixado. Retire sua caneca no balcão!';
    } catch (e) {
      status.textContent = 'Sua reserva está confirmada, mas o certificado não baixou sozinho.';
    }
    status.insertAdjacentHTML('afterend', '<br><button type="button" class="btn-link" data-baixar="' + esc(dados.nome) + '">Baixar certificado de novo</button>');
    enviando = false;
  });
})();

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
