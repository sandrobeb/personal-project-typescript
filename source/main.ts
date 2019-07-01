import { SubjectsModel, LMSModel, TeachersModel, PupilsModel, GroupsModel, GradeBooksModel } from './school'

// SubjectsModel

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: "desc",
});

const desc = new SubjectsModel({
  title: 'asda',
  lessons: 24,
  description: "desc",
});

console.log(history.id)
console.log(desc)

//LMSModel

const lms = new LMSModel();

lms.add(history)
lms.add(desc);
lms.remove(desc);
console.log(lms.verify(history));

console.log(lms.readAll());
console.log([{ subjectId: null }]);

//TeachersModel

let data = {
  name: {
    first: "Sandro",
    last: "Beburishvili"
  },
  image: "img",
  dateOfBirth: "16.10.1999",
  emails: [
    {
      email: "sandrobeb16@gmail.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '551007447',
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: "history"
    }
  ],
  description: "desc",
};


let updatedProfile = {
  name: {
    first: "sandr",
    last: "beb"
  },
  image: "img",
  dateOfBirth: "16.10.1999",
  emails: [
    {
      email: "ewf@aewfef.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '568160099',
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: "geography"
    }
  ],
  description: "desc",
};

const teachers = new TeachersModel();

const id = teachers.add(data);

console.log(teachers.read(id));

const teacherId2 = teachers.update(id, updatedProfile);
console.log(teacherId2);
teachers.remove(id);

//PupilsModel

let pupdata = {
  name: {
    first: "ss",
    last: "bb"
  },
  image: "img",
  dateOfBirth: "12.02.1999",
  phones: [
    {
      phone: '555555566',
      primary: false
    }
  ],
  sex: "male",
  description: "desc",
};

let updatedProfile2 = {
  name: {
    first: "dsc",
    last: "lastt"
  },
  image: "img",
  dateOfBirth: "11.12.1996",
  phones: [
    {
      phone: '555544454',
      primary: false
    }
  ],
  sex: "male",
  description: "desc",
};



const pupils = new PupilsModel();

const pupil = pupils.add(pupdata);
pupils.read(pupil.id)
pupils.update(pupil.id, updatedProfile2)
console.log(pupils);
pupils.remove(pupil.id)

//GroupsModel

const room = 236;

const groups = new GroupsModel();
const groupId = groups.add(room);



groups.addPupil(groupId, pupil);
// groups.update(groupId, {
//   room: 111
// });

console.log(groups.read(groupId));
groups.readAll();

//GradeBooksModel

const pupilId = pupil.id;

const gradebooks = new GradeBooksModel(groups, teachers, lms);

  const level = 1;
  const gradebookId = gradebooks.add(level, groupId);


  const record = {
    pupilId: pupil.id,
    teacherId: teacherId2,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };

  gradebooks.addRecord(gradebookId, record);

  gradebooks.readAll();

 gradebooks.read(gradebookId, pupilId);
{
  name: 'Oliver Black'
  records: [
    {
      teacher: 'Elizabeth Holms',
      subject: 'History',
      lesson: 1,
      mark: 9
    }
  ]
}


const students = gradebooks.readAll(); 
console.log(students);


