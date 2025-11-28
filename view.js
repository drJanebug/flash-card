const inquirer = require('inquirer');

const questionsAnswers = [
  { q: 'Как дела?', a: 'нормально' },
  { q: 'Что делаешь?', a: 'ничего' },
  { q: 'Пойдем гулять?', a: 'давай' },
];

class View {
  static showWelcome() {
    console.log('=== ФЛЭШ-КАРТЫ 🐬 ===');
  }

  static showQuestion(q) {
    console.log(`🎯 Вопрос: ${q}`);
  }

 static async getAnswers(arr) {
    try {
      const answersObj = {};
      for (const el of arr) {
        const answer = await inquirer.prompt({
          type: 'input', 
          name: el.q,
          message: el.q, // то что видит пользователь
        });
        answersObj[el.q] = answer[el.q];
      }
      return answersObj;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static showResult(isCorrect) {
    if (isCorrect) {
      console.log('✅ Правильно!');
    } else {
      console.log(`❌ Неправильно.`);
    }
  }

  static showGameOver(score) {
    console.log(' 🎉  ИГРА ЗАВЕРШЕНА!  🎉 ');
    console.log(`Результат: ${score}`);
  }
}
View.getAnswers(questionsAnswers);

module.exports = View;
