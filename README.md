# asgardia-date
Date utils for Asgardia space nation calendar, write in JS

## How to use

```bash
npm install --save asgardia-date
```

Example code:

```javascript
var AsgardiaDate = require('asgardia-date');

var thatDate = AsgardiaDate(new Date());
console.log(thatDate.toDateString());
```

## Supported functions

 * `toDateString()`
 * `getYearName()`
 * `getMonthName()`
 * `getDateName()`
 * `getFullYear()`
 * `getMonth()`
 * `getDate()`
 * `getDay()`
 * `getHours()`
 * `getMinutes()`
 * `getSeconds()`
 * `getMilliseconds()`