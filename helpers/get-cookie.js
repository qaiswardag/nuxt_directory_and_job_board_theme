export const getCookie = function (document, name) {
  const value = `; ${document.value.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export const setCookie = function (cookieName, cookieValue, expirationDays) {
  const cookieDate = new Date();

  cookieDate.setTime(
    cookieDate.getTime() + expirationDays * 24 * 60 * 60 * 1000
  );
  const expires = 'expires=' + cookieDate.toUTCString();

  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
};
