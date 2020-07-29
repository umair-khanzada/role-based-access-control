import React, { memo } from 'react';
import { JumbotronWrapper } from './common';

function ModuleNChild1() {
	return (
		<JumbotronWrapper title="Module - N - Child - 1" col={{md: '12'}} />
	)
}

export default memo(ModuleNChild1);
