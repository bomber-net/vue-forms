'use strict';
export default (
	{
		action:{type:String,default:''},
		method:{type:String,default:'post'},
		data:{type:Object,default:()=>({})},
	});
