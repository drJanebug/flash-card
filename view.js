const inquirer = require('inquirer');

class View {
  static showWelcome() {
    console.log('=== ФЛЭШ-КАРТЫ 🐬 ===');
  }

 
  static async getAnswers(arr) {
    try {
      const answersObj = {};
      for (const el of arr) {
        const answer = await inquirer.prompt([{
          type: 'input',
          name: 'userAnswer',
          message: el.q, // то что видит пользователь
        }]);
        answersObj[el.q] = answer.userAnswer;
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

module.exports = View;
