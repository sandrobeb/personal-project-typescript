export class GroupsModel {
    groups: Map<string, any>;

    constructor() {
        this.groups = new Map();
    }

    add(room: number) {
        if (typeof room === "number") {
            let id = Math.random().toString(36).substr(2, 16);
            this.groups.set("id", id);
            this.groups.set("room", room);
            return this.groups.get("id");
        }
        else {
            throw new Error("Not a number!");
        }
    }

    addPupil(groupId: any, pupil: any) {
        if (this.groups.get("id") == groupId) {
            this.groups.set("pupil", pupil);
            return this.groups;
        }
        else {
            throw new Error("Cant find group");
        }

    }
    removePupil(groupId: any, pupil: any) {
        if (this.groups.get("id") == groupId) {
            return this.groups.get(groupId).pupils.delete(groupId);
        }
    }

    update(groupId: any, upd: any) {
        if (this.groups.has(groupId)) {
            this.groups.get(groupId).roomNum = upd.room;
        } else {
            throw new Error("We havn't such group!");
        }
    }

read(groupId: any){
    if (this.groups.get("id") == groupId) {
        return this.groups;
    }
    else {
        throw new Error("Can\'t find group")
    }
}

readAll(){
    let arr: any[] = [];
    this.groups.forEach(data => {
        arr.push(data);
    })
    return arr;
}
}



