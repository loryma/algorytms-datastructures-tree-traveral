const fs = require("fs");

function traceDirTree() {
  let stack = [__dirname];

  let result = "";

  while (true) {
    if (stack.length === 0) return console.log(result);

    const dir = stack.pop();

    const files = fs.readdirSync(dir);
    if (files.length === 0) result += `\n${dir}`;

    files.forEach((file) => {
      const filePath = dir + `/${file}`;
      if (fs.lstatSync(filePath).isDirectory()) {
        stack.push(filePath);
      } else {
        result += `\n${filePath}`;
      }
    });
  }
}

traceDirTree();
