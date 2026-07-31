function Student(EnNo,name,Email,Phone,address,course,year) {
    this.EnNo = EnNo;
    this.name = name;
    this.Email = Email;
    this.Phone = Phone;
    this.address = address;
    this.course = course;
    this.year = year;


    this.UpdateName = function(newName) {
        console.log(`Change name ${name} to ${newName}`);
    }

    this.UpdateEmail = function(newEmail){
        console.log(`Email ${Email} change to ${newEmail}`)
    }

    this.UpdatePhone = function(newPhone) {
        console.log(`new Phone is ${newPhone}`)
    }

    this.UpdateCourse = function(newCourse) {
        console.log(`new Course : ${newCourse}`)
    }

    this.Year = function(newYear) {
        console.log(`New Year : ${newYear}`)
    }
}

const StudentDetails = new Student(24030510509999,"Bhargavi","bhargavigohil098@",812855798888,"CSE",2026);
StudentDetails.UpdateName("Saumya");