import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {
  transform(value: String, exponent = 1): Intl.NumberFormat {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
