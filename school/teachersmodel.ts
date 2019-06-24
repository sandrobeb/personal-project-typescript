export class TeachersModel {

    constructor() {
        this.teachers = new Map();
    }
    add(teacher) {
        if (typeof teacher == "object") {
            let id = new Date().getUTCMilliseconds();
            this.teachers.set(id, teacher);
            return id;
        } else {
            throw new Error('Error');
        }
    }
    read(id) {
        if (this.teachers.has(id)) {
            return this.teachers.get(id);
        } else {
            throw new Error('Can\'t find teacher');
        }
    }
    update(id, upd) {
        if (this.teachers.has(id)) {
            return this.teachers.set(id, upd);
        }
        else {
            throw new Error('Can\'t find teacher');
        }
    }
    remove(id) {
        if (this.teachers.has(id)) {
            this.teachers.delete(id);
        } else {
            throw new Error('Can\'t find teacher');
        }
    }
}