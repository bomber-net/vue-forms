'use strict';
export default function select (index,event)
	{
		this.focus ();
		if (Array.isArray (this.options)) index=parseInt (index);
		let selected=this.selected;
		if (selected.includes (index)) selected=selected.filter (sel=>sel!==index);
			else selected.push (index);
		this.$emit ('update:modelValue',selected);
	}
