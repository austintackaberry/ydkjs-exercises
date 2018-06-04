import UpGoingChapters from "./UpGoing";
import ScopeClosuresChapters from "./ScopeClosures";
import ThisObjectPrototypesChapters from "./ThisObjectPrototypes";
import TypesGrammarChapters from "./TypesGrammar";
import AsyncPerformanceChapters from "./AsyncPerformance";
import ES6BeyondChapters from "./ES6Beyond";

const books = [
  {
    url: "/up-going",
    title: "Up & Going",
    chapters: UpGoingChapters
  },
  {
    url: "/scope-closures",
    title: "Scope & Closures",
    chapters: ScopeClosuresChapters
  },
  {
    url: "/this-object-prototypes",
    title: "this & Object Prototypes",
    chapters: ThisObjectPrototypesChapters
  },
  {
    url: "/types-grammar",
    title: "Types & Grammar",
    chapters: TypesGrammarChapters
  },
  {
    url: "/async-performance",
    title: "Async & Performance",
    chapters: AsyncPerformanceChapters
  },
  {
    url: "/es6-beyond",
    title: "ES6 & Beyond",
    chapters: ES6BeyondChapters
  }
];

export default books;
