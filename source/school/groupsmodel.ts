interface phones {
    phone: string,
    primary: boolean
}

interface PupilSchema {
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

interface GroupSchema {
    id: number;
    room: number;
    pupils: PupilSchema[],
    groupId: number,
}

export class GroupsModel {
    groups: Map<number, GroupSchema>;

    constructor() {
        this.groups = new Map();
    }

    add(room: number) {
        let id = new Date().getUTCMilliseconds();
        this.groups.set(id, {
            id,
            room,
            pupils: [],
            groupId: id,
        });
        return id;
    }

    addPupil(groupId: number, pupil: PupilSchema) {
        if (this.groups.has(groupId)) {
            let group = this.groups.get(groupId);
            group.pupils.push(pupil);
        }
        else {
            throw new Error("Cant find group");
        }
    }

    removePupil(groupId: number, pupil: PupilSchema) {
        if (this.groups.has(groupId)) {
            const group = this.groups.get(groupId);
            for (let i of group.pupils) {
                if (i.id === pupil.id) {
                    let group = this.groups.get(groupId);
                    if (group) {
                        return group.pupils.pop();
                    }
                }
                else {
                    throw new Error("Some Error");
                }
            }
        }
    }
    update(groupId: number, upd: { room: number; }) {
        if (this.groups.has(groupId)) {
            const group = this.groups.get(groupId);
            group.room = upd.room;
        } else {
            throw new Error("We havn't such group!");
        }
    }

    read(groupId: number) {
        if (this.groups.get(groupId)) {
            return this.groups;
        }
        else {
            throw new Error("Can\'t find group")
        }
    }

    readAll() {
        return Array.from(this.groups);
    }
}



