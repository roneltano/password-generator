import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  title = 'Password Generator';
  pwlength = 0;
  useLetters = false;
  useSymbols = false;
  useNumbers = false;

  onSubmit() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.pwlength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getLength(value: string) {
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)) {
      this.pwlength = parsedInt;
      console.log(this.pwlength);
    }
  }

  includesLetters() {
    this.useLetters = !this.useLetters;
    console.log(this.useLetters);
  }
  includesNumbers() {
    this.useNumbers = !this.useNumbers;
    console.log(this.useNumbers);
  }
  includesSymbols() {
    this.useSymbols = !this.useSymbols;
    console.log(this.useSymbols);
  }
}
