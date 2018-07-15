import { configure } from "@kadira/storybook";
import "todomvc-app-css/index.css";
import { setOptions } from "@kadira/storybook-addon-options";
setOptions({ showLeftPanel: false });
console.info("Ctrl + Shift + L to toggle left panel");

function loadStories() {
  require("../components/stories/");
}

configure(loadStories, module);
