// ==========================================
// HEVAL STAGE - ADVANCED ENGINE v0.3.0
// ==========================================

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
        btn.textContent = "🔊 SOUND: ON";
        btn.style.borderColor = "rgba(0, 242, 254, 0.4)";
        playTone(880, 0.1);
    } else {
        btn.textContent = "🔇 SOUND: OFF";
        btn.style.borderColor = "rgba(255, 60, 60, 0.4)";
    }
}

// محرك توليد الترددات والنغمات الاحترافية
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

// محرك الفضاء والخلفية الحية
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d", { alpha: false });

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const stars = [];
for (let i = 0; i < 90; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? "#00f2fe" : "#8b5dff"
    });
}

// نظام الدوائر السيبرانية الحية عند لمس الشاشة بالكامل في الصفحة الرئيسية
let activeRings = [];

window.addEventListener('pointerdown', (e) => {
    // تفعيل التفاعل فقط إذا لم تكن الخلفية خافتة (الصفحة الثانية) ولم يتم الضغط على زر
    if (document.body.classList.contains('dimmed-bg')) return;
    if (e.target.closest('button') || e.target.closest('.planet-module')) return;

    playTone(600 + Math.random() * 300, 0.08, 'sine', false);

    activeRings.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 50,
        alpha: 0.8
    });
});

function drawScene() {
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

    // رسم تأثير الدوائر السيبرانية عند النقر
    activeRings.forEach((ring, index) => {
        ring.radius += 2.5;
        ring.alpha -= 0.025;
        if (ring.alpha <= 0) {
            activeRings.splice(index, 1);
            return;
        }
        ctx.strokeStyle = `rgba(0, 242, 254, ${ring.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
    });
}

function animate() {
    drawScene();
    requestAnimationFrame(animate);
}
animate();

// تفاعل القلب والكواكب
const planetElements = document.querySelectorAll('.orbiting-planet');
const pulsingHeart = document.getElementById('pulsingHeart');
let isAttracting = false;

planetElements.forEach((el) => {
    el.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        const freq = parseFloat(el.getAttribute('data-freq')) || 600;
        playTone(freq, 0.15, 'triangle');
        document.body.classList.add('pulse-active');
        setTimeout(() => document.body.classList.remove('pulse-active'), 400);
    });
});

pulsingHeart.addEventListener('click', () => {
    if (isAttracting) return;
    isAttracting = true;
    playTone(300, 0.4, 'sawtooth');

    const heartRect = pulsingHeart.getBoundingClientRect();
    const targetX = heartRect.left + heartRect.width / 2;
    const targetY = heartRect.top + heartRect.height / 2;

    planetElements.forEach((el) => {
        el.style.transition = "all 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045)";
        el.style.left = `${targetX - 13}px`;
        el.style.top = `${targetY - 13}px`;
        el.style.transform = "scale(0.2)";
    });

    setTimeout(() => {
        playTone(150, 0.3, 'square');
        document.body.classList.add('pulse-active');

        setTimeout(() => {
            planetElements.forEach((el) => {
                el.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                el.style.top = "";
                el.style.left = "";
                el.style.transform = "scale(1)";
            });
            document.body.classList.remove('pulse-active');
            isAttracting = false;
        }, 300);
    }, 800);
});

// إدارة التنقل وحالات الإضاءة بين الصفحات
const intro = document.getElementById("intro");
const worlds = document.getElementById("worlds");
const adamWorldPage = document.getElementById("adamWorldPage");

// الانقال للصفحة الثانية (تخفيف الخلفية وتعطيل اللمس الخارجي)
document.getElementById("enterButton").addEventListener("click", () => {
    playTone(880, 0.12);
    intro.classList.remove("active");
    setTimeout(() => {
        worlds.classList.add("active");
        document.body.classList.add("dimmed-bg");
    }, 200);
});

// الرجوع للشاشة الرئيسية
document.getElementById("backButton").addEventListener("click", () => {
    playTone(440, 0.12);
    worlds.classList.remove("active");
    document.body.classList.remove("dimmed-bg");
    setTimeout(() => intro.classList.add("active"), 200);
});

// الدخول لصفحة "عالم آدم وآسر" الفضائية المتطورة
document.getElementById("adamWorldBtn").addEventListener("click", () => {
    playTone(1000, 0.2, 'sine');
    worlds.classList.remove("active");
    document.body.classList.remove("dimmed-bg");
    document.body.classList.add("adam-world-active");

    setTimeout(() => {
        adamWorldPage.classList.add("active");
    }, 200);
});

// العودة من عالم آدم وآسر لصفحة الموديولات
document.getElementById("exitAdamWorldBtn").addEventListener("click", () => {
    playTone(500, 0.15);
    adamWorldPage.classList.remove("active");
    document.body.classList.remove("adam-world-active");
    document.body.classList.add("dimmed-bg");

    setTimeout(() => {
        worlds.classList.add("active");
    }, 200);
});

// زر الصوت الخاص
function triggerAboAlarm() {
    playTone(1200, 0.08, 'sawtooth');
    setTimeout(() => playTone(800, 0.08, 'sawtooth'), 90);
    setTimeout(() => playTone(1400, 0.12, 'sawtooth'), 180);
}

// أصوات احترافية وسلسة لكواكب القطاعات
function openModuleSection(sectionTitle) {
    playTone(1050, 0.18, 'sine');
    setTimeout(() => playTone(1400, 0.12, 'triangle'), 100);
    alert(`🚀 جاري فتح قطاع ${sectionTitle} في عالم آدم وآسر...`);
}
