export class TeachersModel {
    teachers: Map<any, any>;

    constructor() {
        this.teachers = new Map();
    }
    add(teacher: any) {
        if (typeof teacher == "object") {
            let id = new Date().getUTCMilliseconds();
            this.teachers.set(id, teacher);
            return id;
        } else {
            throw new Error('Error');
        }
    }
    read(id: number) {
        if (this.teachers.has(id)) {
            return this.teachers.get(id);
        } else {
            throw new Error('Can\'t find teacher');
        }
    }
    update(id: number, upd: any) {
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
