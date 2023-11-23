'use strict';
import {remove} from 'lodash/array.js';

export default function uncheck (id)
	{
		let model=this.modelValue ?? [];
		remove (model,i=>i===id);
		this.$emit ('update:modelValue',model);
	}
