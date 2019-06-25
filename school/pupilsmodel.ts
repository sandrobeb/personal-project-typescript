export class PupilsModel {
    pupils: Map<any, any>;
    pupil: any;
    constructor() {
        this.pupils = new Map();
    }

    add(pupil: any) {
                let id = new Date().getUTCMilliseconds();
                pupil.id = id;
                this.pupils.set(id, pupil);
                return this.pupils.get(id);
    }

    read(id: number) {
        if (this.pupils.has(id)) {
            return this.pupils.get(id);
        } else {
            throw new Error('Can\'t find pupil');
        } 
    }
    update(id: number, upd: object) {
        if (this.pupils.has(id)) {
            return this.pupils.set(id, upd);
        }
        else {
            throw new Error('Can\'t find pupil');
        }
    }
    remove(id: number) {
        if (this.pupils.has(id)) {
            this.pupils.delete(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
}