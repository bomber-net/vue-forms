'use strict';
export default (
	{
		accept:{type:String | Array | Object,default:()=>''},
		ellipseFrame:Boolean,
		size:{type:Number|String|Array,default:100},
		previewSize:{type:Number,default:1500},
		padding:{type:Number,default:0},
		modelValue:String | File,
		error:Array | String,
		e:Array | String,
		placeholder:String,
		hint:String,
		readonly:Boolean,
		disabled:Boolean,
	});
