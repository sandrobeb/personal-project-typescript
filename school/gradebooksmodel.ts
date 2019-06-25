import { LMSModel } from './lmsmodel';
import { TeachersModel } from './teachersmodel';
import { GroupsModel } from './groupsmodel';

interface record {
   pupilId: number,
   teacherId: number,
   subjectId: number,
   lesson: number,
   mark: number
}

interface gradebook {
    level: number;
    id: string;
    records: record[];
 }

export class GradeBooksModel {
   gradebook: Map<string, gradebook>;
   groups: GroupsModel;
   teachers: TeachersModel;
   lms: LMSModel;
   constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
       this.gradebook = new Map();
       this.groups = groups;
       this.teachers = teachers;
       this.lms = lms;
   }

   add(level: number, grId: string) {
        let id =Math.random().toString(36).substr(2, 8);
       this.gradebook.set(grId, { level, id, records: [] })
       return id;
   }

   clear() {
           this.gradebook.clear();
   }

   addRecord(gradebookId: string, record: record) {
       let store = this.gradebook.get(gradebookId);
       if (store) {
           store.records.push(record);
       } else {
           throw new Error("Error!");
       }
   }

   read(gradebookId: string) {
       let grade = this.gradebook.get(gradebookId);
       return grade;
       
   }

    readAll(){
        return Array.from(this.gradebook);
    }
}