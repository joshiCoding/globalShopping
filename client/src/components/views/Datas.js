// ruppees symbol unicode
const rs = '\u20B9'
const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": `${rs}0 to ${rs}999`,
        "array": [0, 999]
    },
    {
        "_id": 2,
        "name": `${rs}1000 to ${rs}1499`,
        "array": [1000, 1499]
    },
    {
        "_id": 3,
        "name": `${rs}1500 to ${rs}1999`,
        "array": [1500, 1999]
    },
    {
        "_id": 4,
        "name": `${rs}2000 to ${rs}5000`,
        "array": [2000, 5000]
    },
    {
        "_id": 5,
        "name": `More than ${rs}5000`,
        "array": [5000, 1500000]
    }
]



const category = [
    {
        "_id": 1,
        "name": "Toys"
    },
    {
        "_id": 2,
        "name": "Earphone"
    },
    {
        "_id": 3,
        "name": "Phone"
    },
    {
        "_id": 4,
        "name": "Grocery"
    },
    {
        "_id": 5,
        "name": "Clothes"
    },
    {
        "_id": 6,
        "name": "ACs"
    },
    {
        "_id": 7,
        "name": "Television"
    }
]


export {
    price,
    category,
    rs
}