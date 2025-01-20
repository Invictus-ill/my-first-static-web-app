import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FetchTodoComponent } from './fetch-todo/fetch-todo.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, FetchTodoComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
