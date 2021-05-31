class EmployeePayRoll{

   
    get name()
    {
        return this.name;
    }
    set name(name) {
        let nameRegex = "^[A-Z]{1}[a-zA-Z0-9\\s]{2,}$";
        if (nameRegex.test(name))
            this.name = name;
        else
            throw "Invalid name";
    }
    get profile()
    {
        return this.profile;
    }
    set profile(profile)
    {
        this.profile=profile;
    }
    get gender()
    {
        return this.gender;

    }
    set gender(gender)
    {
        this.gender=gender;
        
    }

    get depart()
        {
        return this.department;
        }
    set depart(department)
    {
        this.department=department;
    }
    get salary()
    {
        return this.salary;
    }
    set salary(salary)
    {
        this.salary=salary;

    }
    get date()
    {
        return this.date;
    }
    set date(startDate) {
        startDate = startDate.getTime() + (30 * 24 * 60 * 60 * 1000);
        let today = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
        if (today >= startDate) {
            this.startDate = startDate;
        } else {
            ("Invalid date");
        }
    }
    getNotes()
    {
        return this.notes;
    }
    setNotes(notes)
    {
        this.notes = notes;
    }
   
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id :" + this.id + ", name : " + this.name + ", gender :" + this.gender + ", profile picture : " + this.profilePic + ", department :" + this.department + ", salary : " + this.salary + ", startDate : " + this.startDate + ", note : " + this.note;
    }
}
