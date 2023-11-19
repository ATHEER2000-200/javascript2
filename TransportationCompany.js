
// إنشاء Class للمركبات
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

// إنشاء Class للسيارة
class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// إنشاء Class للطيّارة
class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

// إنشاء Class الموظفين
class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
}

// إنشاء Class السائق
class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

// إنشاء Class الطيّار
class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

// إنشاء Class الحجز
class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationID = reservationID;
    }
}



// دالة للتحقق من توافق الموظف والمركبة
function checkCompatibility(employeeId, vehicleId) {
    const employee = employees.find((emp) => emp.id === employeeId);
    const vehicle = vehicles.find((veh) => veh.id === vehicleId);

    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("Mismatch: Employee is a pilot, but vehicle is a car.");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("Mismatch: Employee is a driver, but vehicle is a plane.");
    } else {
        const reservation = new Reservation(
            new Date(),
            employeeId,
            vehicleId,
            generateReservationID()
        );
        reservations.push(reservation);
      
    }
}

// دالة لإنشاء معرف حجز فريد
function generateReservationID() {
    return Math.random().toString(36).substr(2, 9);
}

// مصفوفة لتخزين الحجوزات
const reservations = [];


// تعريف الموظفين والإضافة إلى مصفوفة الموظفين
const employee1 = new Driver("Driver 1", "001", "1990-01-01", "D123");
const employee2 = new Pilot("Pilot 1", "002", "1990-01-01", "P123");

const employees = [employee1, employee2];

// إنشاء objects للسيارات والطائرات
const car1 = new Car("Car 1", "Manufacturer 1", "123", "gas");
const car2 = new Car("Car 2", "Manufacturer 2", "456", "electric");
const car3 = new Car("Car 3", "Manufacturer 3", "789", "gas");

const plane1 = new Plane("Plane 1", "Manufacturer 4", "ABC", "type 1");
const plane2 = new Plane("Plane 2", "Manufacturer 5", "DEF", "type 2");
// تعريف المركبات والإضافة إلى مصفوفة المركبات
const vehicles = [car1, car2, car3, plane1, plane2];

// اختبار الدالة checkCompatibility
checkCompatibility("001", "ABC"); // Mismatch: Employee is a driver, but vehicle is a plane.
checkCompatibility("002", "123"); // Mismatch: Employee is a pilot, but vehicle is a car.
checkCompatibility("001", "456"); // Reservation created: Reservation

// طباعة محتوى المصفوفة باستخدام الدالة map
reservations.map((reservation) => console.log(reservation));