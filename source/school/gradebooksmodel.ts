import { LMSModel } from './lmsmodel';
import { TeachersModel } from './teachersmodel';
import { GroupsModel } from './groupsmodel';

interface grade {
    level: number;
    id: number;
    records: recordsSchema[];
}

interface recordsSchema {
    pupilId?: number,
    teacherId: object,
    subjectId: number,
    lesson: number,
    mark: number
}


export class GradeBooksModel {
    gradebook: Map<number, grade>;
    groups: GroupsModel;
    teachers: TeachersModel;
    lms: LMSModel;
    constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
        this.gradebook = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(level: number, grId: number) {

        let id = new Date().getUTCMilliseconds();
        this.gradebook.set(grId, { level, id, records: [] });
        return id;
    }

    clear() {
        this.gradebook.clear();
    }

    addRecord(gradebookId: number, record: recordsSchema) {
        const grade = this.gradebook.get(gradebookId);
        if (grade) {
            grade.records.push(record);
        } else {
            throw new Error("error");
        }
    }

    read(gradebookId: number, pupilId: number) {
        let grade = this.gradebook.get(gradebookId);
        return grade;

    }

    readAll() {
        return Array.from(this.gradebook);
    }
}