const OMOSDK = {};
Object.defineProperty(window, "confirmOMOmember",{
	
	get:function(){
		return function(){return true;}
	},
	set:function(val){
		
	},
	configurable:false
});
