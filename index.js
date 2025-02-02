import fs from 'fs'
const mathwasm=fs.readFileSync('./test.wasm');
export const math = await WebAssembly.instantiate(new Uint8Array(mathwasm)).then(res=>res.instance.exports);
console.log = function (message) {
      var logger = document.getElementById('log-wasm');
      logger.innerHTML += message + " ";
    }
export function run_wasm(){
    c = document.querySelector("#c").value;
    console.log(math.MO(c));
    }
