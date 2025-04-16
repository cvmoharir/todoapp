import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/send-email';

  sendEmail(checkedItems: TodoItem[], uncheckedItems: TodoItem[]) {
    const emailBody = this.composeEmailBody(checkedItems, uncheckedItems);
    const recipients = ['recipient1@example.com', 'recipient2@example.com'];

    this.http.post(this.apiUrl, { recipients, body: emailBody }).subscribe({
      next: (response) => console.log('Email sent successfully', response),
      error: (error) => console.error('Error sending email', error)
    });
  }

  private composeEmailBody(checkedItems: TodoItem[], uncheckedItems: TodoItem[]): string {
    return `
      Todo List Summary:

      Completed Items:
      ${checkedItems.map(item => `- ${item.text}`).join('\n')}

      Pending Items:
      ${uncheckedItems.map(item => `- ${item.text}`).join('\n')}
    `;
  }
}
