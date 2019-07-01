interface LMSschema {
    id: number;
}

export class LMSModel {
    subjects: any;
    constructor() {
        this.subjects = new Map();
    }
    add(subject: LMSschema ) {
            this.subjects.set(subject.id, subject)
    }


    remove(subject: LMSschema) {
        if (this.subjects.has(subject.id)) {
            this.subjects.delete(subject.id);
        } else {
            throw new Error('Cant find this subject');
        }
    }


    verify(subject: { id: number; }) {
        if (this.subjects.has(subject.id)) {
            return true;
        }
        else {
            return false;
        }
    }
    readAll() {
        return [this.subjects]
    }
}