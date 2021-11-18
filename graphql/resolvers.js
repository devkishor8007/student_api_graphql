const Student = require("../model/student_model");

const resolvers = {
  Query: {
    students: async () => {
      return await Student.find({});
    },
    student: async (parent, args) => {
      return await Student.findById(args.id);
    },
  },
  Mutation: {
    createStudent: async (parent, args) => {
      let student = await Student(args.studentInput);
      return student.save();
    },
    updateStudent: async (parent, args) => {
      return await Student.findByIdAndUpdate(args.id, args.studentInput, {
        new: true,
      });
    },
    deleteStudent: async (parents, args) => {
      return await Student.findByIdAndDelete(args.id);
    },
  },
};

module.exports = resolvers;
