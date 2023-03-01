'use strict';
export default function selectBind ()
	{
		let value=`${this.modelValue}`;
		value=Object.keys (this.options).includes (value)?`select_${value}`:'unselected';
		return {value};
	}
