



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatLabel } from '@angular/material/form-field';

;


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    
    
  ]
})


export class TodoListComponent {
  todoItems = [
    { text: 'Brush/floss', checked: false },
    { text: 'Bathroom clothes cleanup', checked: false },
    { text: 'Apply cream/lotion', checked: false },
    { text: 'Hair/knots comb', checked: false },
    { text: 'Pack school lunch', checked: false },
    { text: 'Pack PE/Sports clothes', checked: false },
    { text: 'Eat breakfast completly', checked: false },
    { text: 'Put away dishes', checked: false },
    { text: 'Soak breakfast cup/bowl', checked: false },
    { text: 'Turn off all the lights', checked: false }
  ];

  emailClients = [
   // { value: 'mailto:', viewValue: 'Default Email Client' },
    { value: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Todo List Summary&body=', viewValue: 'Gmail' },
  //  { value: 'https://outlook.live.com/owa/?path=/mail/action/compose&subject=Todo List Summary&body=', viewValue: 'Outlook' }
  ];

  selectedEmailClient = this.emailClients[0].value;

    sendEmail(): void {
      const checkedItems = this.todoItems.filter(item => item.checked);
      const uncheckedItems = this.todoItems.filter(item => !item.checked);

      let emailBody = 'Today\'s summary:\n\n';
      emailBody += 'Completed Tasks:\n';
      checkedItems.forEach(item => emailBody += `- ${item.text}\n`);
      emailBody += '\nPending Tasks:\n';
      uncheckedItems.forEach(item => emailBody += `- ${item.text}\n`);
      emailBody += '\nThanks :\n';
      emailBody += '\nIsiri!! :\n';

      const encodedBody = encodeURIComponent(emailBody);
      const mailtoLink = `${this.selectedEmailClient}${encodedBody}`;
      window.open(mailtoLink, '_blank');
    }}