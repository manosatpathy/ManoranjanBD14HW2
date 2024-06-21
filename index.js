const express = require("express");
const app = express();
const PORT = 3000;

// Q1
function generateProfileUrl(username) {
  const result = "https://github.com/" + username;
  return result;
}

app.get("/github-profile", (req, res) => {
  const username = req.query.username;
  res.send(generateProfileUrl(username));
});

// Q2
function generateCertificate(firstName, lastName, courseName) {
  const result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName;
  return result;
}

app.get("/certificate", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

// Q3
function calculateGrade(maths, science, english) {
  const gradePercentage = ((maths + science + english) / 300) * 100;
  return "Your grade in percentage is " + gradePercentage + "%";
}

app.get("/grade", (req, res) => {
  const maths = parseInt(req.query.maths);
  const science = parseInt(req.query.science);
  const english = parseInt(req.query.english);
  res.send(calculateGrade(maths, science, english));
});

// Q4
function splitBill(billAmount, numberOfFriends) {
  const splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes Rs. " + splitAmount + " against the bill.";
}

app.get("/split-bill", (req, res) => {
  const billAmount = parseFloat(req.query.billAmount);
  const numberOfFriends = parseFloat(req.query.numberOfFriends);

  res.send(splitBill(billAmount, numberOfFriends));
});

// Q5
function calculateSalary(totalHours, hourlyWage) {
  const monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary", (req, res) => {
  const totalHours = parseInt(req.query.totalHours);
  const hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
