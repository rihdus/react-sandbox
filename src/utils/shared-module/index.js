export const sharedvalueStore = {};

export const getValue = key => sharedvalueStore[key]

export const setValue = (key, value) => sharedvalueStore[key] = value;