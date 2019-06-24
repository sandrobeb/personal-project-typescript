export class PupilsModel {
    constructor() {
        this.pupils = new Map();
    }

    add(pupil) {
            if (typeof pupil == "object") {
                let id = new Date().getUTCMilliseconds();
                this.pupils.set(id, pupil);
                return id;
            } else {
                throw new Error('Error');
        }
    }

    read(id) {
        if (this.pupil.has(id)) {
            return this.pupils.get(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
    update(id, upd) {
        if (this.pupils.has(id)) {
            return this.pupils.set(id, upd);
        }
        else {
            throw new Error('Can\'t find pupil');
        }
    }
    remove(id) {
        if (this.pupils.has(id)) {
            this.pupils.delete(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
}