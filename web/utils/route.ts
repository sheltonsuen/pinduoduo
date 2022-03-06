export const getSelectedMenuFromPath = (defaultMenu: string) => {
  return [
    window.location.pathname.split("/").filter((v) => v)[0] ?? defaultMenu,
  ];
};

export const getSelectedMenuFromLastPath = (defaultMenu: string) => {
  return [window.location.pathname.split("/").slice(-1)[0] ?? defaultMenu];
};
