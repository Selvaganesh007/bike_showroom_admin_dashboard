export const productMockData = [
  {
    product_id: "1",
    product_name: "Hunter 350",
    price: "149900",
    status: "Available",
    available_qty: 3,
    engine_capacity: "349.34 cc",
    mileage: "36 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "177 kg",
    fuel_tank_capacity: "13 litres",
    seat_height: "800 mm",
  },
  {
    product_id: "2",
    product_name: "Classic 350",
    price: "193080",
    status: "Available",
    available_qty: 5,
    engine_capacity: "349 cc",
    mileage: "32 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "195 kg",
    fuel_tank_capacity: "13 litres",
    seat_height: "805 mm",
  },
  {
    product_id: "3",
    product_name: "Meteor 350",
    price: "204114",
    status: "Available",
    available_qty: 2,
    engine_capacity: "349 cc",
    mileage: "32.6 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "191 kg",
    fuel_tank_capacity: "15 litres",
    seat_height: "765 mm",
  },
  {
    product_id: "4",
    product_name: "Bullet 350",
    price: "150894",
    status: "Available",
    available_qty: 1,
    engine_capacity: "346 cc",
    mileage: "38 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "191 kg",
    fuel_tank_capacity: "13.5 litres",
    seat_height: "800 mm",
  },
  {
    product_id: "5",
    product_name: "Super Meteor 650",
    price: "354398",
    status: "Coming soon",
    available_qty: 0,
    engine_capacity: "349.34 cc",
    mileage: "36 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "177 kg",
    fuel_tank_capacity: "13 litres",
    seat_height: "800 mm",
  },
  {
    product_id: "6",
    product_name: "Himalayan",
    price: "215881",
    status: "Available",
    available_qty: 3,
    engine_capacity: "411 cc",
    mileage: "31 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "199 kg",
    fuel_tank_capacity: "15 litres",
    seat_height: "800 mm",
  },
  {
    product_id: "7",
    product_name: "Scram 411",
    price: "206234",
    status: "Available",
    available_qty: 2,
    engine_capacity: "411 cc",
    mileage: "29.6 kmpl",
    transmission: "5 Speed Manual",
    kerb_weight: "185 kg",
    fuel_tank_capacity: "15 litres",
    seat_height: "795 mm",
  },
  {
    product_id: "8",
    product_name: "Continental GT 650",
    price: "318417",
    status: "Available",
    available_qty: 1,
    engine_capacity: "648 cc",
    mileage: "25 kmpl",
    transmission: "6 Speed Manual",
    kerb_weight: "211 kg",
    fuel_tank_capacity: "12.5 litres",
    seat_height: "804 mm",
  },
];

export const customersMockdata = [
  {
    customer_id: "2001",
    customer_name: "Selvaganesh",
    city: "Chennai",
    state: "Tamil nadu",
    email: "selvaganesh@gmail.com",
    phone_number: "8976978723",
    pin_code: 600032,
    gender: "",
    date_of_birth: "",
  },
  {
    customer_id: "2002",
    customer_name: "Dharunkumar",
    city: "Tambaram",
    state: "Tamil nadu",
    email: "dharun@gmail.com",
    phone_number: "8976973423",
    pin_code: 600043,
    gender: "",
    date_of_birth: "",
  },
  {
    customer_id: "2003",
    customer_name: "Pradeep",
    city: "Guindy",
    state: "Tamil nadu",
    email: "pradeep@gmail.com",
    phone_number: "9766978723",
    pin_code: 600012,
    gender: "",
    date_of_birth: "",
  },
  {
    customer_id: "2004",
    customer_name: "Edward",
    city: "Madurai",
    state: "Tamil nadu",
    email: "edward@gmail.com",
    phone_number: "8976978723",
    pin_code: 620132,
    gender: "",
    date_of_birth: "",
  },
  {
    customer_id: "2005",
    customer_name: "Hari",
    city: "Kovilpatti",
    state: "Tamil nadu",
    email: "hari@gmail.com",
    phone_number: "9283478723",
    pin_code: 628501,
    gender: "",
    date_of_birth: "",
  },
];

export const serviceDetailsMockData = [
  {
    service_id: 6001,
    service_attempt: 1,
    service_date: 12,
    service_status: "pending",
    customer_details: {
      customer_id: "2001",
      customer_name: "Selvaganesh",
      gender: "",
      date_of_birth: "",
      city: "Chennai",
      state: "Tamil nadu",
      email: "selvaganesh@gmail.com",
      phone_number: "8976978723",
      pin_code: 600032,
    },
    bike_details: {
      product_id: "1",
      product_name: "Hunter 350",
      price: "149900",
      status: "Available",
      available_qty: 3,
      engine_capacity: "349.34 cc",
      mileage: "36 kmpl",
      transmission: "5 Speed Manual",
      kerb_weight: "177 kg",
      fuel_tank_capacity: "13 litres",
      seat_height: "800 mm",
    },
  },
  {
    service_id: 6002,
    service_attempt: 2,
    service_date: 21,
    service_status: "pending",
    customer_details: {
      customer_id: "2004",
      customer_name: "Edward",
      city: "Madurai",
      state: "Tamil nadu",
      email: "edward@gmail.com",
      phone_number: "8976978723",
      pin_code: 620132,
      gender: "",
      date_of_birth: "",
    },
    bike_details: {
      product_id: "3",
      product_name: "Meteor 350",
      price: "204114",
      status: "Available",
      available_qty: 2,
      engine_capacity: "349 cc",
      mileage: "32.6 kmpl",
      transmission: "5 Speed Manual",
      kerb_weight: "191 kg",
      fuel_tank_capacity: "15 litres",
      seat_height: "765 mm",
    },
  },
  {
    service_id: 6003,
    service_attempt: 4,
    service_date: 30,
    service_status: "pending",
    customer_details: {
      customer_id: "2002",
      customer_name: "Dharunkumar",
      city: "Tambaram",
      state: "Tamil nadu",
      email: "dharun@gmail.com",
      phone_number: "8976973423",
      pin_code: 600043,
      gender: "",
      date_of_birth: "",
    },
    bike_details: {
      product_id: "2",
      product_name: "Classic 350",
      price: "193080",
      status: "Available",
      available_qty: 5,
      engine_capacity: "349 cc",
      mileage: "32 kmpl",
      transmission: "5 Speed Manual",
      kerb_weight: "195 kg",
      fuel_tank_capacity: "13 litres",
      seat_height: "805 mm",
    },
  },
];

export const orderDetailsMockData = [
  {
    order_id: '301001',
    order_status: 'ordered',
    amount: '500',
    balance_amount: '149400',
    order_date: '1697634184',
    delivery_status: 'Not delivered yet',
    customer_details: {
      customer_id: "2001",
      customer_name: "Selvaganesh",
      gender: "",
      date_of_birth: "",
      city: "Chennai",
      state: "Tamil nadu",
      email: "selvaganesh@gmail.com",
      phone_number: "8976978723",
      pin_code: 600032,
    },
    bike_details: {
      product_id: "1",
      product_name: "Hunter 350",
      price: "149900",
      status: "Available",
      available_qty: 3,
      engine_capacity: "349.34 cc",
      mileage: "36 kmpl",
      transmission: "5 Speed Manual",
      kerb_weight: "177 kg",
      fuel_tank_capacity: "13 litres",
      seat_height: "800 mm",
    },
  },
  {
    order_id: '301002',
    order_status: 'ordered',
    amount: '500',
    balance_amount: '215381',
    order_date: '1697029384',
    delivery_status: 'Not delivered yet',
    customer_details:{
      customer_id: "2005",
      customer_name: "Hari",
      city: "Kovilpatti",
      state: "Tamil nadu",
      email: "hari@gmail.com",
      phone_number: "9283478723",
      pin_code: 628501,
      gender: "",
      date_of_birth: "",
    },
    bike_details: {
      product_id: "6",
      product_name: "Himalayan",
      price: "215881",
      status: "Available",
      available_qty: 3,
      engine_capacity: "411 cc",
      mileage: "31 kmpl",
      transmission: "5 Speed Manual",
      kerb_weight: "199 kg",
      fuel_tank_capacity: "15 litres",
      seat_height: "800 mm",
    },
  },
];
