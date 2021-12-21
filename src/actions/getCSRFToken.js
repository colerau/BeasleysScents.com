export function getCSRFToken() {
  return decodeURIComponent(document.cookie.split('=')[1])
}