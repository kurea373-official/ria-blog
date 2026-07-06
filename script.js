/* ========================================================
   Apple Tea — Premium Luxury Amber Engine (With OMIKUJI)
======================================================== */

/**
 * 1. プレミアム・クロックシステム
 */
function updatePremiumClock() {
    const now = new Date();

    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateString = now.toLocaleDateString('en-US', dateOptions).replace(/\//g, ' . ');

    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('ja-JP', timeOptions);

    const dateElement = document.getElementById('clock-date');
    const timeElement = document.getElementById('clock-time');

    if (dateElement) dateElement.textContent = `${dateString}   TEA LOUNGE ONLINE`;
    if (timeElement) timeElement.textContent = timeString;
}

/**
 * 2. 芳醇なアロマ・エフェクト（ティードロップ＆フレグランス）
 */
function createFragranceParticles() {
    const container = document.getElementById('bubble-ambient');
    if (!container) return;

    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('bubble');

        const size = Math.random() * 7 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const startX = Math.random() * 100;
        particle.style.left = `${startX}%`;

        const duration = Math.random() * 6 + 8;
        particle.style.animationDuration = `${duration}s`;

        const horizontalSway = Math.random() * 30 - 15;
        particle.style.setProperty('--sway-amount', `${horizontalSway}px`);
        
        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);

    }, 700);
}

/**
 * 3. Apple Tea 特製・紅茶おみくじシステム
 * link.html にあるボタンや結果表示エリアと連動します。
 */
function initOmikuji() {
    // HTML側にあるボタンと結果表示のIDを取得（要素がないページではスキップされます）
    const drawBtn = document.getElementById('omikuji-btn');
    const resultText = document.getElementById('omikuji-result');
    const commentText = document.getElementById('omikuji-comment');

    if (!drawBtn) return; // おみくじのボタンがないページ（HOMEなど）ならここで終了

    // Apple Teaの世界観に合わせたおみくじのデータ（運勢、メッセージ、ラッキーティー）
    const omikujiResults = [
        {
            fortune: "✨ 👑 超大吉 (Premium Great Luck)",
            comment: "最高にフルーティーな一日！あなたの魅力が周囲に贅沢に広がります。素晴らしい出会いやチャンスに恵まれる予感。",
            tea: "☕ 本日のラッキーティー：贅沢果肉の完熟アップルティー"
        },
        {
            fortune: "🍀 大吉 (Great Luck)",
            comment: "とても澄み切った心地よい運気です。何事もスムーズに進むので、新しいことに挑戦してみるのがおすすめ。",
            tea: "☕ 本日のラッキーティー：シナモン香るスパイスアップルティー"
        },
        {
            fortune: "🌿 吉 (Good Luck)",
            comment: "穏やかで安定した上品な一日。お気に入りの音楽を聴きながら、自分のペースを大切にすると吉です。",
            tea: "☕ 本日のラッキーティー：ダージリンベースのクラシックアップルティー"
        },
        {
            fortune: "☀️ 中吉 (Middle Luck)",
            comment: "甘酸っぱいアクセントが加わる楽しい日になりそう。ちょっとした嬉しいサプライズが届くかもしれません。",
            tea: "☕ 本日のラッキーティー：炭酸弾けるアイスアップルティーソーダ"
        },
        {
            fortune: "🍵 小吉 (Small Luck)",
            comment: "焦らずじっくり待つことで、紅茶が美味しく抽出されるように運気が高まります。夕方以降に運気アップ！",
            tea: "☕ 本日のラッキーティー：ミルクをたっぷり入れたアップルミルクティー"
        }
    ];

    // ボタンがクリックされたときの処理
    drawBtn.addEventListener('click', () => {
        // ボタンにちょっとしたクリックエフェクト（連打防止）
        drawBtn.disabled = true;
        if (resultText) resultText.textContent = "ブレンド中...";
        if (commentText) commentText.textContent = "今日のあなたに最適な1杯を淹れています。";

        setTimeout(() => {
            // ランダムで結果を1つ選ぶ
            const randomIndex = Math.floor(Math.random() * omikujiResults.length);
            const result = omikujiResults[randomIndex];

            // 画面に結果を表示
            if (resultText) {
                resultText.textContent = result.fortune;
                resultText.style.animation = "none"; // アニメーションのリセット
                resultText.offsetHeight; // リフロー
                resultText.style.animation = "riseUp 0.5s ease forwards"; // 浮き上がるエフェクト（CSSと連動）
            }
            if (commentText) {
                commentText.innerHTML = `${result.comment}<br><br><strong style="color: #d97706;">${result.tea}</strong>`;
            }

            drawBtn.disabled = false;
        }, 800); // 0.8秒の「タメ」を作ってワクワク感を演出
    });
}

/**
 * 4. アプリケーション・イニシャライザ
 */
document.addEventListener('DOMContentLoaded', () => {
    // クロック起動
    updatePremiumClock();
    setInterval(updatePremiumClock, 1000);

    // 背景エフェクト起動
    createFragranceParticles();

    // おみくじ機能の起動
    initOmikuji();
});