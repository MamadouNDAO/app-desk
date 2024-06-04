import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isInArray(array, item) {
    return array.includes(item);
  }

  sortByKey(array, key) {
    return array.sort((a, b) => a[key] - b[key]);
  }

  isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }


  countByKey(array, key) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i][key]) {
        count++;
      }
    }
    return count;
  }

  containsSubstring(string, substring) {
    return string.includes(substring);
  }

  getMaxValue(array) {
    return Math.max(...array);
  }

  addLeadingZeros(number, length) {
    let str = number.toString();
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  sortAlphabetically(array) {
    return array.sort((a, b) => a.localeCompare(b));
  }

  generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  sumByKey(array, key) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue[key], 0);
  }

  uniqByKey(array, key) {
    const seen = new Set();
    return array.filter((item) => {
      const value = item[key];
      if (seen.has(value)) {
        return false;
      } else {
        seen.add(value);
        return true;
      }
    });
  }

}
