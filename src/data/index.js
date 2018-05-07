import { UpGoingChapters } from "./UpGoing";
import { ScopeClosuresChapters } from "./ScopeClosures";
import { ThisObjectPrototypesChapters } from "./ThisObjectPrototypes";
import { TypesGrammarChapters } from "./TypesGrammar";
import { AsyncPerformanceChapters } from "./AsyncPerformance";
import { ES6BeyondChapters } from "./ES6Beyond";

module.exports = {
  books: [
    {
      url: "/up-going",
      title: "Up & Going",
      id: "upGoing",
      chapters: UpGoingChapters
    },
    {
      url: "/scope-closures",
      title: "Scope & Closures",
      id: "scopeClosures",
      chapters: ScopeClosuresChapters
    },
    {
      url: "/this-object-prototypes",
      title: "this & Object Prototypes",
      id: "thisObjectPrototypes",
      chapters: ThisObjectPrototypesChapters
    },
    {
      url: "/types-grammar",
      title: "Types & Grammar",
      id: "typesGrammar",
      chapters: TypesGrammarChapters
    },
    {
      url: "/async-performance",
      title: "Async & Performance",
      id: "asyncPerformance",
      chapters: AsyncPerformanceChapters
    },
    {
      url: "/es6-beyond",
      title: "ES6 & Beyond",
      id: "es6Beyond",
      chapters: ES6BeyondChapters
    }
  ]
};
