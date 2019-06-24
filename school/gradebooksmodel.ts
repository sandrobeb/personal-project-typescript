export class GradebooksModel {

    constructor(groups, teachers, lms) {
        this.gradebook = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
}