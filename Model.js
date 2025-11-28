const fsp = require('fs/promises');
const { EOL } = require('os');

class Model {
  constructor() {
    this.questions = [];
  }

  async readFile() {
    const content = await fsp.readFile('./topics/questions.txt', 'utf-8');
    const dataObj = (data) =>
      data.split(EOL + EOL).map((el) => {
        const [q, a] = el.split(EOL);
        return { q, a };
      });
    this.questions.push(...dataObj(content));
    return this.questions
  }
}



module.exports = Model