import UpGoingChapters from './UpGoing';
import ScopeClosuresChapters from './ScopeClosures';
import ThisObjectPrototypesChapters from './ThisObjectPrototypes';
import TypesGrammarChapters from './TypesGrammar';
import AsyncPerformanceChapters from './AsyncPerformance';
import ES6BeyondChapters from './ES6Beyond';

const books = [
  {
    id: 0,
    url: '/up-going',
    title: 'Up & Going',
    chapters: UpGoingChapters,
  },
  {
    id: 1,
    url: '/scope-closures',
    title: 'Scope & Closures',
    chapters: ScopeClosuresChapters,
  },
  {
    id: 2,
    url: '/this-object-prototypes',
    title: 'this & Object Prototypes',
    chapters: ThisObjectPrototypesChapters,
  },
  {
    id: 3,
    url: '/types-grammar',
    title: 'Types & Grammar',
    chapters: TypesGrammarChapters,
  },
  {
    id: 4,
    url: '/async-performance',
    title: 'Async & Performance',
    chapters: AsyncPerformanceChapters,
  },
  {
    id: 5,
    url: '/es6-beyond',
    title: 'ES6 & Beyond',
    chapters: ES6BeyondChapters,
  },
];

export default books;
