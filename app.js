const yargs = require("yargs")
const data10 = require("./data10")

/////////////////////////////////////////////////////////////////////

// add person

yargs.command({
    command : "add",
    describe : "to add a person",
    builder : {
        id : {
            describe : "this is the id",
            demandOption : true,
            type : "string"
        },
        fname : {
            describe : "this is the first name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : "this is the last name",
            demandOption : true,
            type : "string"
        },
        age : {
            describe : "this is the age",
            demandOption : true,
            type : "number"
        },
        city : {
            describe : "this is the city",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data10.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})

/////////////////////////////////////////////////////////////////////

// read specific person

yargs.command({
    command : "read",
    describe : "to read a specific person",
    builder : {
        id : {
            describe : "this is the id",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data10.readData(x.id)
    }
})

/////////////////////////////////////////////////////////////////////

// list all people

yargs.command({
    command : "list",
    describe : "to list all people",
    handler : () => {
        data10.listData()
    }
})

/////////////////////////////////////////////////////////////////////

// delete specific person

yargs.command({
    command : "delete",
    describe : "to delete a specific person",
    builder : {
        id : {
            describe : "this is the id",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data10.deleteData(x.id)
    }
})

/////////////////////////////////////////////////////////////////////

// delete all people

yargs.command({
    command : "deleteAll",
    describe : "to delete all people",
    handler : () => {
        data10.deleteAllData()
    }
})

/////////////////////////////////////////////////////////////////////

// show full name and city

yargs.command({
    command : "fullName",
    describe : "to show full name and city of each person",
    handler : () => {
        data10.fullNameData()
    }
})

yargs.parse()
