import ItemsController from "./Controllers/ItemsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  itemsController = new ItemsController();
}

window["app"] = new App();
