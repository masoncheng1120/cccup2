(function () {
  // Simple site-wide i18n helper.
  const STORAGE_KEY = 'siteLang';
  const SUPPORTED = ['en', 'zh'];

  const translations = {
    en: {
      global: {
        langToggle: '中文',
        langToggleTitle: 'Switch to Chinese',
        langLang: 'en'
      },
      index: {
        pageTitle: 'Primary Science Menu',
        title: 'Cheng Chung Cup',
        subtitle: 'By Caritas Wu Cheng-chung College',
        learningFriction: 'Learning Friction',
        learningDensity: 'Learning Density',
        vibeTheCode: 'Vibe the Code',
        video: 'Video',
        quiz: 'Quiz',
        competitionGuidelines: 'Competition Guidelines',
        chineseVersion: '中文版本'
      },
      video: {
        pageTitle: 'Friction Video Lesson — Cheng Chung Cup',
        title: 'Friction Video Lesson',
        subtitle: 'Watch our curated YouTube lesson to strengthen your understanding of friction.',
        watchOnYouTube: 'Watch on YouTube',
        backToHome: 'Back to Home'
      },
      video2: {
        pageTitle: 'Density Video Lesson — Cheng Chung Cup',
        title: 'Density Video Lesson',
        subtitle: 'Watch our curated YouTube lesson to strengthen your understanding of density.',
        watchOnYouTube: 'Watch on YouTube',
        backToHome: 'Back to Home'
      },
      quizMenu: {
        pageTitle: 'Density Portal — Cheng Chung Cup',
        title: 'Density Portal',
        calculatingDensity: 'Calculating Density',
        returnToMainMenu: 'Return to Main Menu'
      },
      quizSelection: {
        pageTitle: 'Quiz Selection — Cheng Chung Cup',
        title: 'Quiz Portal',
        potentialKinetic: 'Potential & Kinetic',
        frictionPhysics: 'Friction Physics',
        returnToMain: 'Return to Main Menu'
      },
      frictionQuiz: {
        pageTitle: 'Friction Quiz — Cheng Chung Cup',
        title: 'Friction Lab',
        section1: 'True / False Questions',
        section2: 'Fill in the blanks',
        submitAssessment: 'Submit Assessment',
        return: 'Return',
        score: 'Score',
        allCorrect: 'All answers correct. Well done!',
        review: 'Some answers need review.',
        true: 'True',
        false: 'False',
        same: 'Same',
        opposite: 'Opposite',
        does: 'Does',
        doesNot: 'Does Not',
        slowDown: 'Slow Down',
        moveFaster: 'Move Faster',
        q1: '1. Friction is a force that appears when two surfaces touch and move against each other.',
        q2: '2. Friction only exists when objects are moving or trying to move.',
        q3: '1. Friction acts in the <span class="blank-space"></span> direction of motion.',
        q4: '2. Friction <span class="blank-space"></span> help the car move.',
        q5: '3. Friction makes moving objects <span class="blank-space"></span>.'
      },
      potentialQuiz: {
        pageTitle: 'Potential and Kinetic Energy Quiz — Cheng Chung Cup',
        title: 'Energy Lab Assessment',
        part1: 'Part 1: Definitions Matching',
        part2: 'Part 2: Fill in the Blanks',
        definitionsLegend: 'Definitions Legend:',
        definitionA: 'A. Energy of motion',
        definitionB: 'B. How fast an object moves',
        definitionC: 'C. Stored energy due to position',
        definitionD: 'D. How high an object is above the ground',
        potentialMatches: '1. Potential Energy matches with:',
        kineticMatches: '2. Kinetic Energy matches with:',
        heightMatches: '3. Height matches with:',
        speedMatches: '4. Speed matches with:',
        whenAtTop: '1. When an object is at the top of a ramp, it has <span class="blank-space"></span> potential energy.',
        asMovesDown: '2. As the object moves down, potential energy <span class="blank-space"></span>.',
        asSpeedIncreases: '3. As speed increases, kinetic energy <span class="blank-space"></span>.',
        energyNotLost: '4. Energy is not lost; it is <span class="blank-space"></span>.',
        submitAssessment: 'Submit Assessment',
        return: 'Return',
        score: 'Score',
        allCorrect: 'All answers correct. Well done!',
        review: 'Some answers need review.',
        theHighest: 'The Highest',
        theLowest: 'The Lowest',
        increases: 'Increases',
        decreases: 'Decreases',
        transformed: 'Transformed',
        escaped: 'Escaped'
      },
      densityQuiz: {
        pageTitle: 'Calculating Density Quiz — Cheng Chung Cup',
        quizTitle: 'Density Quiz',
        densityFormula: 'Density Formula',
        densityFormulaSentence: 'Density =',
        massLabel: 'Mass',
        volumeLabel: 'Volume',
        unit: 'Unit',
        enterNumber: 'Enter number...',
        g: 'g (Mass)',
        cm3: 'cm³ (Volume)',
        gPerCm3: 'g/cm³ (Density)',
        submitAnswer: 'Submit Answer',
        nextQuestion: 'Next Question',
        quizComplete: 'Quiz Complete!',
        retryQuiz: 'Retry Quiz',
        backToMenu: 'Back to Menu',
        greatJob: 'Great job!',
        loadingQuestion: 'Loading question...',
        problemDensity: 'An irregular object has a mass of <b>{{m}} g</b> and displaces a volume of <b>{{v}} cm³</b>. <br><br>What is its density?',
        problemMass: 'An object has a density of <b>{{d}} g/cm³</b> and a volume of <b>{{v}} cm³</b>. <br><br>What is its mass?',
        problemVolume: 'An object has a mass of <b>{{m}} g</b> and a density of <b>{{d}} g/cm³</b>. <br><br>What is its volume?',
        explanationDensity: 'Density = Mass ÷ Volume ({{m}} ÷ {{v}} = {{d}})',
        explanationMass: 'Mass = Density × Volume ({{d}} × {{v}} = {{m}})',
        explanationVolume: 'Volume = Mass ÷ Density ({{m}} ÷ {{d}} = {{v}})',
        feedbackEnterNumber: 'Please enter a number and select a unit.',
        feedbackCorrect: 'Correct! Great job.',
        feedbackIncorrectCalc: 'Incorrect calculation. The correct answer was <b>{{answer}}</b>.',
        feedbackRightNumWrongUnit: 'Right number, wrong unit! The correct answer was <b>{{answer}}</b>.',
        feedbackIncorrect: 'Incorrect. The correct answer was <b>{{answer}}</b>.',
        resultPerfect: 'Perfect score! You are a density master!',
        resultGood: 'Good job! Keep practicing to get a perfect score.',
        resultReview: 'You might need to review the density formula and try again!'
      }
    },
    zh: {
      global: {
        langToggle: 'EN',
        langToggleTitle: '切换到英文',
        langLang: 'zh'
      },
      index: {
        pageTitle: '小學科學選單',
        title: '振中杯',
        subtitle: '明愛胡振中書院',
        learningFriction: '學習摩擦力',
        learningDensity: '學習密度',
        vibeTheCode: '氛圍編程',
        video: '影片',
        quiz: '小測驗',
        competitionGuidelines: '比賽指引',
        chineseVersion: '中文版本'
      },
      video: {
        pageTitle: '摩擦力影片課振 — 振中杯',
        title: '摩擦力影片課振',
        subtitle: '觀看我們精心挑選的 YouTube 課振，加強你對摩擦力的理解。',
        watchOnYouTube: '在 YouTube 觀看',
        backToHome: '返回主頁'
      },
      video2: {
        pageTitle: '密度影片課振 — 振中杯',
        title: '密度影片課振',
        subtitle: '觀看我們精心挑選的 YouTube 課振，加強你對密度的理解。',
        watchOnYouTube: '在 YouTube 觀看',
        backToHome: '返回主頁'
      },
      quizMenu: {
        pageTitle: '密度入口 — 振中杯',
        title: '密度入口',
        calculatingDensity: '計算密度',
        returnToMainMenu: '返回主頁'
      },
      quizSelection: {
        pageTitle: '小測驗選單 — 振中杯',
        title: '小測驗選單',
        potentialKinetic: '位能與動能',
        frictionPhysics: '摩擦力物理',
        returnToMain: '返回主頁'
      },
      frictionQuiz: {
        pageTitle: '摩擦力小測驗 — 振中杯',
        title: '摩擦力小實驗',
        section1: '對或錯題',
        section2: '填空題',
        submitAssessment: '提交測驗',
        return: '返回',
        score: '分數',
        allCorrect: '全部正確，做得好！',
        review: '有些答案需要複習。',
        true: '對',
        false: '錯',
        same: '相同',
        opposite: '相反',
        does: '會',
        doesNot: '不會',
        slowDown: '變慢',
        moveFaster: '變快',
        q1: '1. 當兩個表面接觸並相對移動時，摩擦力就會產生。',
        q2: '2. 只有當物體移動或嘗試移動時，才會有摩擦力。',
        q3: '1. 摩擦力會朝運動方向的 <span class="blank-space"></span> 施力。',
        q4: '2. 摩擦力 <span class="blank-space"></span> 幫助汽車移動。',
        q5: '3. 摩擦力會使移動的物體 <span class="blank-space"></span>。'
      },
      potentialQuiz: {
        pageTitle: '位能與動能小測驗 — 振中杯',
        title: '能量實驗小測驗',
        part1: '第一部分：配對定義',
        part2: '第二部分：填空題',
        definitionsLegend: '定義清單：',
        definitionA: 'A. 動能',
        definitionB: 'B. 物體運動的速度',
        definitionC: 'C. 由位置產生的能量',
        definitionD: 'D. 物體距離地面的高度',
        potentialMatches: '1. 位能配對：',
        kineticMatches: '2. 動能配對：',
        heightMatches: '3. 高度配對：',
        speedMatches: '4. 速度配對：',
        whenAtTop: '1. 當物體在斜坡頂端時，它具有 <span class="blank-space"></span> 位能。',
        asMovesDown: '2. 當物體向下移動時，位能 <span class="blank-space"></span>。',
        asSpeedIncreases: '3. 當速度增加時，動能 <span class="blank-space"></span>。',
        energyNotLost: '4. 能量不會消失；它會被 <span class="blank-space"></span>。',
        submitAssessment: '提交測驗',
        return: '返回',
        score: '分數',
        allCorrect: '全部正確，做得好！',
        review: '有些答案需要複習。',
        theHighest: '最高',
        theLowest: '最低',
        increases: '增加',
        decreases: '減少',
        transformed: '轉換',
        escaped: '消失'
      },
      densityQuiz: {
        pageTitle: '計算密度小測驗 — 振中杯',
        quizTitle: '密度小測驗',
        densityFormula: '密度公式',
        densityFormulaSentence: '密度 =',
        massLabel: '質量',
        volumeLabel: '體積',
        unit: '單位',
        enterNumber: '輸入數字...',
        g: '克 (質量)',
        cm3: '立方厘米 (體積)',
        gPerCm3: '克/立方厘米 (密度)',
        submitAnswer: '提交答案',
        nextQuestion: '下一題',
        quizComplete: '小測驗完成！',
        retryQuiz: '重新開始',
        backToMenu: '返回選單',
        greatJob: '幹得好！',
        loadingQuestion: '載入題目中...',
        problemDensity: '一個不規則物體的質量為 <b>{{m}} g</b>，排開的體積為 <b>{{v}} cm³</b>。<br><br>它的密度是多少？',
        problemMass: '一個物體的密度為 <b>{{d}} g/cm³</b>，體積為 <b>{{v}} cm³</b>。<br><br>它的質量是多少？',
        problemVolume: '一個物體的質量為 <b>{{m}} g</b>，密度為 <b>{{d}} g/cm³</b>。<br><br>它的體積是多少？',
        explanationDensity: '密度 = 質量 ÷ 體積 ({{m}} ÷ {{v}} = {{d}})',
        explanationMass: '質量 = 密度 × 體積 ({{d}} × {{v}} = {{m}})',
        explanationVolume: '體積 = 質量 ÷ 密度 ({{m}} ÷ {{d}} = {{v}})',
        feedbackEnterNumber: '請輸入數字並選擇單位。',
        feedbackCorrect: '正確！做得好。',
        feedbackIncorrectCalc: '計算錯誤。正確答案是 <b>{{answer}}</b>。',
        feedbackRightNumWrongUnit: '數值正確，但單位錯誤！正確答案是 <b>{{answer}}</b>。',
        feedbackIncorrect: '不正確。正確答案是 <b>{{answer}}</b>。',
        resultPerfect: '滿分！你是密度小高手！',
        resultGood: '不錯！再多練習就能得到滿分。',
        resultReview: '可能需要複習密度公式，再試一次！'
      }
    }
  };

  function getStoredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  let currentLang = getStoredLang();

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) return;
    if (lang === currentLang) return;

    localStorage.setItem(STORAGE_KEY, lang);
    currentLang = lang;
    // Reload to ensure all dynamic content (generated by JS) updates to the selected language.
    window.location.reload();
  }

  function translate(key) {
    const segments = key.split('.');
    let node = translations[currentLang] || {};

    for (const seg of segments) {
      node = node?.[seg];
      if (node === undefined) break;
    }

    return node || '';
  }

  function format(text, vars) {
    if (typeof text !== 'string' || !vars) return text;
    return text.replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, key) => String(vars[key] ?? ''));
  }

  function applyTranslations() {
    document.documentElement.lang = translations[currentLang]?.global?.langLang || currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!key) return;
      const value = translate(key);
      if (value === '') return;

      // Preserve HTML when the element already contains HTML tags (for quiz questions)
      const containsHtml = /<[^>]+>/.test(value);
      if (containsHtml) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const mapping = (el.dataset.i18nAttr || '').split(';').map(s => s.trim()).filter(Boolean);
      mapping.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (!attr || !key) return;
        const value = translate(key);
        if (value) el.setAttribute(attr, value);
      });
    });

    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.textContent = translate('global.langToggle');
      btn.title = translate('global.langToggleTitle');
    }
  }

  function ensureLangToggle() {
    if (document.getElementById('lang-toggle-btn')) return;

    const button = document.createElement('button');
    button.id = 'lang-toggle-btn';
    button.type = 'button';
    button.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'zh' : 'en'));

    Object.assign(button.style, {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: '9999',
      padding: '0.5rem 0.9rem',
      border: '1px solid rgba(255,255,255,0.35)',
      borderRadius: '999px',
      background: 'rgba(0,0,0,0.45)',
      color: '#fff',
      cursor: 'pointer',
      backdropFilter: 'blur(8px)',
      fontSize: '0.9rem',
      fontWeight: '600',
      boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
    });

    document.body.appendChild(button);
  }

  function init() {
    ensureLangToggle();
    applyTranslations();
  }

  window.setAppLanguage = setLanguage;
  window.i18n = {
    translate,
    format,
    get lang() { return currentLang; }
  };

  document.addEventListener('DOMContentLoaded', init);
})();
