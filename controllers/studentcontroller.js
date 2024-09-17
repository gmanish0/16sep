//controllers holds the business logic for project
//const mongoose = require("mongoose");
const student = require("../models/student");
const Student = require("../models/student");

async function addStudent(req, res) {
  try {
    console.log("Receiving data from client...", req.body);
    let student = new Student(req.body);
    await student.save();
    console.log("data saved successfully ...");
    res.end("Added student");
  } catch (err) {
    console.error(err);
  }
}
async function getStudents(req,res) {
  try{
    let students= await Student.find({});
    console.log(students,'students')
    res.send(student)
  }catch(err){

  }
  
}
async function getStudentsByrollNo(req,res){
  try{
    let rollNo =parseInt(req.params.rollNo);
    console.log(rollNo,'rollNo')
    let student =await Student.findOne({rollNo:rollNo});
    console.log(student,'student')
    res.send(student)

  }catch(err){
    console.log(err,'err')

  }
}

module.exports = {
  addStudent,
  getStudents,
  getStudentsByrollNo
};
