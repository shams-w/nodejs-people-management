const fs = require("fs")

/////////////////////////////////////////////////////////////////////

const addPerson = (id , fname , lname , age , city) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedData.length == 0) {

        if (allData.length < 10) {
            allData.push({
                id : id,
                fname : fname,
                lname : lname,
                age : age,
                city : city
            })

            saveAllData(allData)
            console.log("PERSON ADDED SUCCESSFULLY")
        } else {
            console.log("YOU CAN ONLY ADD 10 PEOPLE")
        }

    } else {
        console.log("ERROR DUPLICATED ID")
    }
}

/////////////////////////////////////////////////////////////////////

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

/////////////////////////////////////////////////////////////////////

const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , allDataJson)
}

/////////////////////////////////////////////////////////////////////

const readData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })

    if (itemNeeded) {
        console.log(itemNeeded)
    } else {
        console.log("ID NOT FOUND")
    }
}

/////////////////////////////////////////////////////////////////////

const listData = () => {
    const allData = loadInfo()

    if (allData.length == 0) {
        console.log("NO PEOPLE FOUND")
    } else {
        allData.forEach((obj) => {
            console.log(obj)
        })
    }
}

/////////////////////////////////////////////////////////////////////

const deleteData = (id) => {
    const allData = loadInfo()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    if (allData.length == dataToKeep.length) {
        console.log("ID NOT FOUND")
    } else {
        saveAllData(dataToKeep)
        console.log("PERSON DELETED SUCCESSFULLY")
    }
}

/////////////////////////////////////////////////////////////////////

const deleteAllData = () => {
    const allData = []
    saveAllData(allData)
    console.log("ALL PEOPLE DELETED SUCCESSFULLY")
}

/////////////////////////////////////////////////////////////////////

const fullNameData = () => {
    const allData = loadInfo()

    if (allData.length == 0) {
        console.log("NO PEOPLE FOUND")
    } else {
        allData.forEach((obj) => {
            console.log(obj.fname + " " + obj.lname , obj.city)
        })
    }
}

/////////////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    readData,
    listData,
    deleteData,
    deleteAllData,
    fullNameData
}
