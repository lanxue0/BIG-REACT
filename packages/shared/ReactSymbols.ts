// 判断当前数组环境是否支持Symbol
const supportSymbool = typeof Symbol === 'function' && Symbol.for

// 如果支持则创建一个独一无二的类型，如果不支持则用一个常量表示（为了使不支持的环境也能使用）
export const REACT_ELEMENT_TYPE = supportSymbool
  ? Symbol.for('react.element')
  : 0xeac7
