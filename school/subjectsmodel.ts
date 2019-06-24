export class SubjectsModel {
  id: number;
  title: string;
  lessons: number;
  description: string;
  constructor(subject: { title: string; lessons: number; description: string; }) {
    if (typeof subject == "object" && typeof subject.title == "string" && typeof subject.lessons == "number") {
      this.id = new Date().getUTCMilliseconds();
      this.title = subject.title;
      this.lessons = subject.lessons;
      if (subject.description && typeof subject.description == "string") {
        this.description = subject.description
      }
    }
    else {
      throw new Error('Incorrect data')
    }
  }
}
