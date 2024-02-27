export const getCookie = function (document, name) {
  const value = `; ${document.value.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
