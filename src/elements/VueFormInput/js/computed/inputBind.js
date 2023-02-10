'use strict';
export default function inputBind ()
	{
		let type=this.inputType;
		let value=this.modelValue;
		let placeholder=this.placeholder ?? this.hint;
		let disabled=this.disabled;
		let readonly=this.readonly;
		return this.isInput?{type,value,placeholder,disabled,readonly}:{value,placeholder,disabled,readonly};
	}
