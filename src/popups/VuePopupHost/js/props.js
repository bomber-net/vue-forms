'use strict';
export default (
	{
		src:String,
		dst:String,
		method:{type:String,default:'post'},
		formData:{type:Object,default:()=>({})},
		esc:{type:Boolean,default:false},
		splashClose:{type:Boolean,default:false},
		noPreloader:{type:Boolean,default:false},
	});
