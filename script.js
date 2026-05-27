// ─── CURSOR ───────────────────────────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animCursor() {
  cx += (mx - cx) * 0.15;
  cy += (my - cy) * 0.15;
  cursor.style.left    = cx + 'px';
  cursor.style.top     = cy + 'px';
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

// ─── MATRIX RAIN ──────────────────────────────────────────────
const mCanvas = document.getElementById('matrix-canvas');
const mCtx    = mCanvas.getContext('2d');
mCanvas.width  = window.innerWidth;
mCanvas.height = window.innerHeight;

const cols  = Math.floor(mCanvas.width / 18);
const drops = Array(cols).fill(1);
const chars = '01アイウエオカキクケコサシスセソタチツテト!@#$%^&*()_+[]{}|;<>?,./ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function drawMatrix() {
  mCtx.fillStyle = 'rgba(2,12,6,0.05)';
  mCtx.fillRect(0, 0, mCanvas.width, mCanvas.height);
  mCtx.fillStyle = '#00ff41';
  mCtx.font = '14px JetBrains Mono, monospace';
  drops.forEach((y, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    mCtx.fillText(char, i * 18, y * 18);
    if (y * 18 > mCanvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(drawMatrix, 60);

// ─── THREE.JS SKILLS 3D SCENE ──────────────────────────────────
(function () {
  const canvas   = document.getElementById('skills-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.parentElement.clientWidth, canvas.parentElement.clientHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
  camera.position.z = 8;

  scene.add(new THREE.AmbientLight(0x00ff41, 0.5));
  const pl = new THREE.PointLight(0x00f5ff, 2, 30);
  pl.position.set(5, 5, 5);
  scene.add(pl);

  const skillObjs = [];
  const geos = [
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.OctahedronGeometry(0.35),
    new THREE.TetrahedronGeometry(0.4),
    new THREE.DodecahedronGeometry(0.3),
  ];
  const colors = [0x00ff41, 0x00f5ff, 0x9d4edd, 0xffb300, 0xff2b4e];

  for (let i = 0; i < 30; i++) {
    const geo = geos[i % geos.length];
    const mat = new THREE.MeshPhongMaterial({
      color:            colors[i % colors.length],
      emissive:         colors[i % colors.length],
      emissiveIntensity: 0.1,
      wireframe:  Math.random() > 0.5,
      transparent: true, opacity: 0.7
    });
    const mesh  = new THREE.Mesh(geo, mat);
    const angle = (i / 30) * Math.PI * 2;
    const r     = 2 + Math.random() * 3;
    mesh.position.set(
      Math.cos(angle) * r,
      (Math.random() - 0.5) * 3,
      Math.sin(angle) * r
    );
    mesh.userData.speed       = { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.03, z: (Math.random() - 0.5) * 0.02 };
    mesh.userData.floatOffset = Math.random() * Math.PI * 2;
    scene.add(mesh);
    skillObjs.push(mesh);
  }

  const gridHelper = new THREE.GridHelper(20, 20, 0x003311, 0x001a08);
  gridHelper.position.y = -2;
  scene.add(gridHelper);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;
    skillObjs.forEach(obj => {
      obj.rotation.x += obj.userData.speed.x;
      obj.rotation.y += obj.userData.speed.y;
      obj.position.y  += Math.sin(t + obj.userData.floatOffset) * 0.003;
    });
    camera.position.x = Math.sin(t * 0.2) * 3;
    camera.position.y = Math.cos(t * 0.15) * 1.5;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();

// ─── CANVAS BG (PARTICLE NETWORK) ─────────────────────────────
(function () {
  const canvas = document.getElementById('canvas-bg');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const dots = Array.from({ length: 60 }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    vx:      (Math.random() - 0.5) * 0.3,
    vy:      (Math.random() - 0.5) * 0.3,
    r:       Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.1
  }));

  function drawBg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,65,${d.opacity})`;
      ctx.fill();
    });
    // Connect nearby dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx   = dots[i].x - dots[j].x;
        const dy   = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(0,255,65,${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawBg);
  }
  drawBg();

  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();

// ─── SCROLL REVEAL ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ─── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  const links  = document.querySelector('.nav-links');
  if (!links) return;
  const isOpen = links.style.display === 'flex';
  links.style.display        = isOpen ? 'none' : 'flex';
  links.style.flexDirection  = 'column';
  links.style.position       = 'fixed';
  links.style.top            = '60px';
  links.style.right          = '20px';
  links.style.background     = 'rgba(2,12,6,0.97)';
  links.style.border         = '1px solid rgba(0,255,65,0.2)';
  links.style.padding        = '20px';
  links.style.gap            = '16px';
  links.style.zIndex         = '400';
  links.style.backdropFilter = 'blur(10px)';
}

// ─── TYPING EFFECT (hero terminal line) ────────────────────────
(function () {
  const el = document.querySelector('.hero-terminal-line');
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  el.classList.add('typing');
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(interval);
        el.classList.remove('typing');
      }
    }, 40);
  }, 400);
})();

// ─── CURSOR HOVER EFFECT ───────────────────────────────────────
document.querySelectorAll('a, button, .skill-tag, .badge, .connect-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width       = '32px';
    cursor.style.height      = '32px';
    cursor.style.borderColor = '#00f5ff';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width       = '16px';
    cursor.style.height      = '16px';
    cursor.style.borderColor = '#00ff41';
  });
});
