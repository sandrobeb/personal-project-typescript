import {SubjectsModel, LMSModel, TeachersModel, PupilsModel, GradebooksMode} from './school'

const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});

// will return subjectId

const lms = new LMSModel();
lms.add(history);

// will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(history));

// will return array of registered subjects
console.log(lms.readAll());


