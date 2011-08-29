/* 
 * Angelos Veglektsis <angelix@vegle.gr>
 */

var Barrier = require('./barrier');

var bar = new Barrier();

bar.sync();
setTimeout(function(){ console.log('1 Finish');bar.finish();} , 1000);

bar.sync();
setTimeout(function(){ console.log('2 Finish');bar.finish();} , 7000);


bar.complete(function (){
	console.log('TELEIOSAN OLA')
});

