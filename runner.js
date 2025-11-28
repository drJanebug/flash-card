const GameController = require('./Controller')
const Model = require('./Model');
const View = require('./view');

const model = new Model();

const controller = new GameController(model, View);


controller.start()