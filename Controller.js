const Model = require('./Model');
const View = require('./view');

class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async start() {
    this.view.showWelcome();
    const content = await this.model.readFile();
    
    const answers = await this.view.getAnswers(content);
    let score = 0
    for (let i = 0; i < content.length; i++) {
      for (const key in answers) {
        if(key === content[i].q) {
         const temp = this.view.showResult(String(answers[key]).toLowerCase().trim() === String(content[i].a).toLowerCase().trim());
          if(temp) {
            score ++
          } 
        }  
      }
    }
    this.view.showGameOver(score)
  }

}

// const model = new Model();

// const controller = new GameController(model, View);
// controller.start();

module.exports = GameController;
