import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  public messages: { text: string; fromUser: boolean }[] = [];
  public inputText = '';

  private questions: string[] = [
    'What did you do today?',
    'What was the best thing that happened to you today?',
    'Did you learn anything new today?',
    'What are your plans for tomorrow?',
  ];

  private currentQuestionIndex = 0;

  public ngOnInit(): void {
    this.addBotMessage('Hi there! How was your day?');
  }

  public sendMessage(): void {
    const userMessage = this.inputText.trim();

    if (userMessage) {
      this.addUserMessage(userMessage);

      if (this.currentQuestionIndex < this.questions.length) {
        const botMessage = `Interesting! ${this.questions[this.currentQuestionIndex]}`;
        this.addBotMessage(botMessage);
        this.currentQuestionIndex++;
      } else {
        this.addBotMessage('Thanks for chatting with me!');
        console.log(this.messages);
      }

      this.inputText = '';
    }
  }

  private addUserMessage(text: string): void {
    this.messages.push({ text, fromUser: true });
  }

  private addBotMessage(text: string): void {
    this.messages.push({ text, fromUser: false });
  }
}

