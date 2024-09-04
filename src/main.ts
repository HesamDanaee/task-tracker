import {createInterface} from "readline"
import {stdin as input, stdout as output} from 'process';


const rl = createInterface({input, output});


rl.on("line", () => {
    console.log("writing")
})