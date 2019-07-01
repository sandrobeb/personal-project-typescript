interface emails {
    email: string,
    primary: boolean
}

interface phones {
    phone: string,
    primary: boolean
}

interface subjects {
    subject: string
}

interface Teacherschema {
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    emails: emails[],
    phones: phones[],
    sex: string,
    subjects: subjects[],
    description?: string,
}

export class TeachersModel {
    teachers: Map<number, Teacherschema>;

    constructor() {
        this.teachers = new Map();
    }
    add(teacher: Teacherschema) {
        let id = new Date().getUTCMilliseconds();
        this.teachers.set(id, teacher);
        return id;
    }
    read(id: number) {
        if (this.teachers.has(id)) {
            return this.teachers.get(id);
        } else {
            throw new Error('Can\'t find teacher');
        }
    }
    update(id: number, upd: Teacherschema) {
        if (this.teachers.has(id)) {
            return this.teachers.set(id, upd);
        }
        else {
            throw new Error('Can\'t find teacher');
        }
    }
    remove(id: number) {
        if (this.teachers.has(id)) {
            this.teachers.delete(id);
        } else {
            throw new Error('Can\'t find teacher');
        }
    }
}
