'use strict';
export default (
	{
		action:String,
		method:{type:String,default:'post'},
		data:{type:Object,default:()=>({})},
	});
