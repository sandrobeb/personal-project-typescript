interface phones {
    phone: string,
    primary: boolean
}

interface Pupilschema {
    id?: number;
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    phones: phones[],
    sex: string,
    description?: string,
}

export class PupilsModel {
    pupils: Map<number, Pupilschema>;
    pupil: any;
    constructor() {
        this.pupils = new Map();
    }

    add(pupil: Pupilschema) {
        let id = new Date().getUTCMilliseconds();
        pupil.id = id;
        this.pupils.set(id, pupil);
        return this.pupils.get(id);
    }

    read(id: number     ) {
        if (this.pupils.has(id)) {
            return this.pupils.get(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
    update(id: number | undefined, upd: Pupilschema) {
        if (this.pupils.has(id)) {
            return this.pupils.set(id, upd);
        }
        else {
            throw new Error('Can\'t find pupil');
        }
    }
    remove(id: number | undefined) {
        if (this.pupils.has(id)) {
            this.pupils.delete(id);
        } else {
            throw new Error('Can\'t find pupil');
        }
    }
}