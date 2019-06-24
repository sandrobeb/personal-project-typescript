export class GroupsModel {

    constructor() {
        this.groups = new Map();
    }

    add(room) {
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

    addPupil(groupId, pupil) {
        if (this.groups.get("id") == groupId) {
            this.groups.set("pupil", pupil);
            return this.groups;
        }
        else {
            throw new Error("Cant find group");
        }

    }
    removePupil(groupId, pupil){
        if (this.groups.get("id") == groupId){
            this.groups.delete("pupil", pupil);
            return this.groups;
       }
    }

    update(groupId, upd) {
        if (this.groups.get("id") == groupId) {
            for (gr of upd) {
                this.groups.set(gr);
            }
        }
        else {
            throw new Error("Cant update");
        }
    }


    read(groupId){
            if(this.groups.get("id") == groupId){
                return this.groups;
            }
            else{
                throw new Error ("Can\'t find group")
            }
    }

    readAll(){
        let arr = [];
        this.groups.forEach(data => {
            arr.push(data);
        })
        return arr;
    }
}



