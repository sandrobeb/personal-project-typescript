interface Subjectsschema {
  title: string,
  lessons: number,
  description: string
}


export class SubjectsModel {
  id: number;
  title: string;
  lessons: number;
  description: string;
  constructor(subject: Subjectsschema) {
    this.id = new Date().getUTCMilliseconds();
    this.title = subject.title;
    this.lessons = subject.lessons;
    this.description = subject.description;
  }
}
