export const noop = () => {};

export const recursiveFindMenuItemIdByPath = (menuItems, currentPath) => {
  let returnValue = 0;
  menuItems.some((menuItem) => {
    if (menuItem.url === currentPath) {
      returnValue = menuItem.id;
      return true;
    }
    if (menuItem.subitems && menuItem.subitems.length > 0) {
      returnValue = recursiveFindMenuItemIdByPath(menuItem.subitems, currentPath);
      if (returnValue > 0) return true;
    }
    return false;
  });
  return returnValue;
};
