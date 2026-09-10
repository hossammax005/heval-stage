// ==========================================
// HEVAL STAGE - ADVANCED ENGINE v0.3.1
// ==========================================

const GIFT_API_URL = "https://heval-gift-backend.adamhossam0005.workers.dev/auth";

let audioCtx = null;
let soundEnabled = true;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function toggleGlobalAudio() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('audioToggleBtn');
    if (soundEnabled) {
        if (btn) {
            btn.textContent = "🔊 SOUND: ON";
            btn.style.borderColor = "rgba(0, 242, 254, 0.4)";
        }
        playTone(880, 0.1);
    } else {
        if (btn) {
            btn.textContent = "🔇 SOUND: OFF";
            btn.style.borderColor = "rgba(255, 60, 60, 0.4)";
        }
    }
}

function playTone(freq = 440, duration = 0.1, type = 'sine', ramp = true) {
    if (!soundEnabled) return;
    initAudio();
    try {
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        if (ramp) {
            osc.frequency.exponentialRampToValueAtTime(freq * 1.3, audioCtx.currentTime + duration);
        }
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}

// محرك الخلفية الفضائية
const canvas = document.getElementById("space");
const ctx = canvas ? canvas.getContext("2d", { alpha: false }) : null;

if (canvas) {
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
}

const stars = [];
if (canvas) {
    for (let i = 0; i < 90; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.4 + 0.3,
            speed: Math.random() * 0.4 + 0.1,
            color: Math.random() > 0.5 ? "#00f2fe" : "#8b5dff"
        });
    }
}

function drawScene() {
    if (!ctx || !canvas) return;
    ctx.fillStyle = "#02040a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    drawScene();
    requestAnimationFrame(animate);
}
if (canvas) animate();

// تنقّل العالم داخل نفس الصفحة
function showWorldHub() {
    const intro = document.getElementById('intro');
    const hub = document.getElementById('worldHub');
    if (!intro || !hub) return;
    playTone(720, 0.18);
    intro.classList.remove('active');
    hub.classList.add('active');
}

function showIntro() {
    const intro = document.getElementById('intro');
    const hub = document.getElementById('worldHub');
    if (!intro || !hub) return;
    playTone(520, 0.12);
    hub.classList.remove('active');
    intro.classList.add('active');
}

const enterButton = document.getElementById('enterButton');
if (enterButton) enterButton.addEventListener('click', showWorldHub);

const hubBackButton = document.getElementById('hubBackButton');
if (hubBackButton) hubBackButton.addEventListener('click', showIntro);

// إدارة نافذة الهدايا والربط مع Cloudflare
function openGiftModal() {
    playTone(900, 0.15);
    const modal = document.getElementById('giftModal');
    if (modal) modal.style.display = 'flex';
    const keyInput = document.getElementById('giftKeyInput');
    if (keyInput) keyInput.focus();
}

function closeGiftModal() {
    playTone(400, 0.1);
    const modal = document.getElementById('giftModal');
    if (modal) modal.style.display = 'none';
}

function setGiftResult(message, toneClass) {
    const resultBox = document.getElementById('giftResultBox');
    if (!resultBox) return;
    resultBox.replaceChildren();
    const messageEl = document.createElement('span');
    messageEl.className = toneClass;
    messageEl.textContent = message;
    resultBox.appendChild(messageEl);
}

function safeGalleryUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
        const url = new URL(value, window.location.href);
        if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
        return url.href;
    } catch (e) {
        return null;
    }
}

function renderGiftSuccess(message, galleryUrl) {
    const resultBox = document.getElementById('giftResultBox');
    if (!resultBox) return;
    resultBox.replaceChildren();

    const messageEl = document.createElement('p');
    messageEl.className = 'gift-success-message';
    messageEl.textContent = `🎁 ${typeof message === 'string' && message ? message : 'تم فتح الهدية بنجاح!'}`;
    resultBox.appendChild(messageEl);

    const safeUrl = safeGalleryUrl(galleryUrl);
    if (safeUrl) {
        const breakEl = document.createElement('br');
        const link = document.createElement('a');
        link.href = safeUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'gift-gallery-link';
        link.textContent = 'اضغط هنا للفتح 🚀';
        resultBox.appendChild(breakEl);
        resultBox.appendChild(link);
    }
}

async function submitGiftKey() {
    const keyInput = document.getElementById('giftKeyInput');
    const key = keyInput ? keyInput.value.trim() : '';

    if (!key) {
        setGiftResult('يرجى إدخال الكود أولاً!', 'gift-error');
        return;
    }

    setGiftResult('جاري التحقق من الخادم... ⌛', 'gift-loading');

    try {
        const response = await fetch(GIFT_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key })
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        if (data && data.success) {
            playTone(1200, 0.3);
            renderGiftSuccess(data.message, data.galleryUrl);
        } else {
            playTone(250, 0.3);
            setGiftResult(`❌ ${data && data.message ? String(data.message) : 'كود غير صحيح!'}`, 'gift-error');
        }
    } catch (err) {
        setGiftResult('حدث خطأ في الاتصال بالخادم!', 'gift-error');
    }
}
