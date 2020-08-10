import React, { memo } from 'react';
import { JumbotronWrapper } from './common';

function Module1() {
	return (
		<JumbotronWrapper title="Module - 1" />
	)
}

export default memo(Module1);
