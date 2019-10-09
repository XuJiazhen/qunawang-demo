/* eslint no-console: 0 */
let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  console.log(error);
}

export default {
  city: defaultCity
}