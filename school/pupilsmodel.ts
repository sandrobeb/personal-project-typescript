export class PupilsModel {
    pupils: Map<any, any>;
    pupil: any;
    constructor() {
        this.pupils = new Map();
    }

    add(pupil: any) {
            if (typeof pupil == "object") {
                let id = new Date().getUTCMilliseconds();
                this.pupils.set(id, pupil);
                return id;
            } else {
                throw new Error('Error');
        }
    }

    read(id: number) {
        if (this.pupil.has(id)) {
            return this.pupils.get(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
    update(id: number, upd: any) {
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