let address1 = {
    num: "12",
    street: "New Street",
    city: "Birmingham",
    postode: "B1 1AY"
}

let address2 = {
    num: "16",
    street: "Eastfield",
    city: "Birmingham",
    postode: "B5 0DW"
}

let address3 = {
    num: "108",
    street: "Hull Road",
    city: "Birmingham",
    postode: "B2 5BW"
}

function address(num, street, city, postcode) {
    this.num = num;
    this.street = street;
    this.city = city;
    this.postcode = postcode;
}

class Address {
    num;
    street;
    city;
    postcode;

    constructor(num, street, city, postcode) {
        this.num = num;
        this.street = street;
        this.city = city;
        this.postcode = postcode;
    }
}

let newAddress = new Address("15", "street", "city", "postcode");

console.log(newAddress.street);