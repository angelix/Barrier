/* 
 * Angelos Veglektsis <angelix@vegle.gr>
 */

function Barrier(){
	this.instances = 0;
	this.completeCallback = null;
	this.errorCallback = null;
}

Barrier.prototype.getInstances = function(){
	return this.instances;
};

Barrier.prototype.sync = function(){
	this.instances++;
}

Barrier.prototype.finish = function(err){
	this.instances--;

	if(err){ /* TODO: Better error handling */
		if(typeof this.errorCallback === 'function'){
			this.errorCallback(err);
		}
	}

	if(this.instances === 0){
		if(typeof this.completeCallback === 'function'){
			this.callback();
		}
	}
}

Barrier.prototype.complete = function(callback){
	this.completeCallback = callback;
}

Barrier.prototype.error = function(callback){
	this.errorCallback = callback;
}


module.exports = Barrier;