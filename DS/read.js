const fs = require("fs").promises;
let path = "./file.txt";

const reader = async (path) => {
  let dir = await (await fs.stat(path)).isDirectory();
  let file = await fs.readFile(path, "utf8");
  let json = JSON.stringify(file);
  if (dir) {
    return;
  }
  if (!file) {
    return;
  }
  if (!json) {
    return;
  }
  return json;
};
reader(path);
