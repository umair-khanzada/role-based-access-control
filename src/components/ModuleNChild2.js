import React, { memo } from 'react';
import { JumbotronWrapper } from './common';

function ModuleNChild2() {
	return (
		<JumbotronWrapper title="Module - N - Child - 2" col={{md: '12'}} />
	)
}

export default memo(ModuleNChild2);
