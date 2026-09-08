// ==========================================
// HEVAL STAGE - ADVANCED ENGINE v0.3.0
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

// إدارة نافذة الهدايا والربط مع Cloudflare
function openGiftModal() {
    playTone(900, 0.15);
    const modal = document.getElementById('giftModal');
    if (modal) modal.style.display = 'flex';
}

function closeGiftModal() {
    playTone(400, 0.1);
    const modal = document.getElementById('giftModal');
    if (modal) modal.style.display = 'none';
}

async function submitGiftKey() {
    const keyInput = document.getElementById('giftKeyInput');
    const resultBox = document.getElementById('giftResultBox');
    const key = keyInput ? keyInput.value.trim() : '';

    if (!key) {
        if (resultBox) resultBox.innerHTML = "<span style='color: #ff4d4d;'>يرجى إدخال الكود أولاً!</span>";
        return;
    }

    if (resultBox) resultBox.innerHTML = "<span style='color: #00f2fe;'>جاري التحقق من الخادم... ⌛</span>";

    try {
        const response = await fetch(GIFT_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key })
        });

        const data = await response.json();

        if (data.success) {
            playTone(1200, 0.3);
            let html = `<p style='color: #f3e5ab;'>🎁 ${data.message}</p>`;
            if (data.galleryUrl) {
                html += `<br><a href='${data.galleryUrl}' target='_blank' style='color: #00f2fe; text-decoration: underline;'>اضغط هنا للفتح 🚀</a>`;
            }
            resultBox.innerHTML = html;
        } else {
            playTone(250, 0.3);
            resultBox.innerHTML = `<span style='color: #ff4d4d;'>❌ ${data.message || 'كود غير صحيح!'}</span>`;
        }
    } catch (err) {
        resultBox.innerHTML = "<span style='color: #ff4d4d;'>حدث خطأ في الاتصال بالخادم!</span>";
    }
}
