//let{a,b} = require('./a.js')

// import {a,b} from "./a.js";
// console.log(a,b);


// import display from "./a.js"; //load and execute a file

// display()

// import { display,hello } from "./a.js";
// display()
// hello()


//renaming 
import * as obj from "./a.js"

obj.hello()
obj.display()

