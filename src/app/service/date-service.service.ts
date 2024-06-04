import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public formatDate(date: Date, format: string = 'yyyy-MM-dd'): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hour = this.padZero(date.getHours());
    const minute = this.padZero(date.getMinutes());
    const second = this.padZero(date.getSeconds());

    return format.replace('yyyy', year.toString())
      .replace('MM', month)
      .replace('dd', day)
      .replace('HH', hour)
      .replace('mm', minute)
      .replace('ss', second);
  }

  private padZero(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }

  public addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  public subtractDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }


  public isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  public isWithinDays(date: Date, days: number): boolean {
    const today = new Date();
    const cutoffDate = this.addDays(today, days);
    return date <= cutoffDate;
  }

  public getWeekdayName(date: Date): string {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  }

  public getTimeDiffInSeconds(date1: Date, date2: Date): number {
    const diffInMilliseconds = date2.getTime() - date1.getTime();
    return Math.floor(diffInMilliseconds / 1000);
  }

  public getMonthName(date: Date): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = date.getMonth();
    return monthNames[monthIndex];
  }

  public isLeapYear(date: Date): boolean {
    const year = date.getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  public getDaysInMonth(date: Date): number {
    const month = date.getMonth();
    const year = date.getFullYear();
    return new Date(year, month + 1, 0).getDate();
  }



}
