export const TAB_SELECTED = 'TAB_SELECTED';

export const selectTab = tabName => ({
    type: TAB_SELECTED,
    payload: {tabName}
});