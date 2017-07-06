import React from 'react';

const validate = values => {
  const errors = {};
  const pbRegRule = new RegExp (/^\d{1}-\d{1}-\d{1}[a-zA-Z]$/);

  if (!values.kdbName || '' === values.kdbName.trim()) {
    errors.kdbName = 'KDB 名稱是必填欄位';
  }
  else  if (!values.pbId || '' === values.pbId.trim()) {
    errors.pbId = 'PB ID 是必填欄位';
  }
  else if (!pbRegRule.test(values.pbId)) {
    errors.pbId = '格式範例：1-1-1a';
  }
  return errors;
}

export default validate;
