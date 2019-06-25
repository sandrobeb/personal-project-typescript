import {SubjectsModel, LMSModel, TeachersModel, PupilsModel, GroupsModel} from './school'

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: "Desc"
});


console.log(history.id);


const lms = new LMSModel();
lms.add(history);
console.log(lms.verify(history));

console.log(lms.readAll());

const teachers = new TeachersModel();
const teacherId = teachers.add({first: "Sandro", last: "Beburishvili" });
console.log(teachers.read(teacherId));

const pupils = new PupilsModel();
const pupil = pupils.add({first: "Sandro"});
console.log(pupils.read(pupil.id));

const room = 236;
const groups = new GroupsModel();

const groupId = groups.add(room);
groups.addPupil(groupId, pupil);

console.log(groups.readAll());

