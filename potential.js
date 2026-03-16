document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quizForm');
  const submitBtn = document.getElementById('submitBtn');
  const result = document.getElementById('result');

  function grade() {
    const answers = {
      m1: 'C', // Potential Energy -> C
      m2: 'A', // Kinetic Energy -> A
      m3: 'D', // Height -> D
      m4: 'B', // Speed -> B
      f1: 'the highest',
      f2: 'decreases',
      f3: 'increases',
      f4: 'transformed'
    };

    let score = 0;
    const total = Object.keys(answers).length;
    const feedback = [];

    for (const [k, v] of Object.entries(answers)) {
      const el = form.elements[k];
      const val = el ? el.value : '';
      if (val === v) {
        score++;
      } else {
        feedback.push(`${k} incorrect`);
      }
    }

    const scoreLabel = window.i18n?.translate('potentialQuiz.score') || 'Score';
    const allCorrect = window.i18n?.translate('potentialQuiz.allCorrect') || 'All answers correct. Well done!';
    const review = window.i18n?.translate('potentialQuiz.review') || 'Some answers need review.';

    result.textContent = `${scoreLabel}: ${score} / ${total}`;
    if (score === total) {
      result.style.color = '#059669';
      result.textContent += ` — ${allCorrect}`;
    } else {
      result.style.color = '#c2410c';
      result.textContent += ` — ${review}`;
    }
  }

  submitBtn.addEventListener('click', grade);
});
