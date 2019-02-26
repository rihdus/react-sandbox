export const sharedvalueStore = {
    count: 0
};

export const getValue = key => sharedvalueStore[key]

export const setValue = (key, value) => sharedvalueStore[key] = value;