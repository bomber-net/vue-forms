'use strict';
export default (
	{
		src:String,
		dst:String,
		method:{type:String,default:'post'},
		formData:{type:Object,default:()=>({})},
	});
