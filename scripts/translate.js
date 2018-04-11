import * as fs from "fs";
import { sync as globSync } from "glob";
import { sync as mkdirpSync } from "mkdirp";

const filePattern = "./build/messages/**/*.json";
const outputDir = "./build/locales/";

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(filePattern)
  .map(filename => fs.readFileSync(filename, "utf8"))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});
// Create a new directory that we want to write the aggregate messages to
mkdirpSync(outputDir);

// Write the messages to this directory
fs.writeFileSync(
  outputDir + "data.json",
  `{ "en": ${JSON.stringify(defaultMessages, null, 2)} }`
);
