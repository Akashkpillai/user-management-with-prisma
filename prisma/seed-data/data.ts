export const country = [
    {code:0 , name : "india"},
    { code: 1, name: "Afghanistan" },
    { code: 2, name: "Albania" },
    { code: 3, name: "Algeria" },
    { code: 4, name: "Andorra" },
    { code: 5, name: "Angola" },
    { code: 6, name: "Argentina" },
    { code: 7, name: "Armenia" },
    { code: 8, name: "Australia" },
    { code: 9, name: "Austria" },
    { code: 10, name: "Azerbaijan" },
  ];

export const state =[
    // States for India (countryId: 0)
    { name: "Kerala", code: 100, countryId: 0 },
    { name: "Maharashtra", code: 101, countryId: 0 },
    { name: "Tamil Nadu", code: 102, countryId: 0 },
    { name: "Karnataka", code: 103, countryId: 0 },
    { name: "Gujarat", code: 104, countryId: 0 },
  
    // States for Afghanistan (countryId: 1)
    { name: "Kabul", code: 200, countryId: 1 },
    { name: "Herat", code: 201, countryId: 1 },
    { name: "Kandahar", code: 202, countryId: 1 },
  
    // States for Albania (countryId: 2)
    { name: "Tirana", code: 300, countryId: 2 },
    { name: "Durrës", code: 301, countryId: 2 },
  
    // States for Algeria (countryId: 3)
    { name: "Algiers", code: 400, countryId: 3 },
    { name: "Oran", code: 401, countryId: 3 },
    { name: "Constantine", code: 402, countryId: 3 },
  
    // States for Andorra (countryId: 4)
    { name: "Andorra la Vella", code: 500, countryId: 4 },
    { name: "Escaldes-Engordany", code: 501, countryId: 4 },
  
    // States for Angola (countryId: 5)
    { name: "Luanda", code: 600, countryId: 5 },
    { name: "Huambo", code: 601, countryId: 5 },
    { name: "Benguela", code: 602, countryId: 5 },
  
    // States for Argentina (countryId: 6)
    { name: "Buenos Aires", code: 700, countryId: 6 },
    { name: "Córdoba", code: 701, countryId: 6 },
    { name: "Santa Fe", code: 702, countryId: 6 },
  
    // States for Armenia (countryId: 7)
    { name: "Yerevan", code: 800, countryId: 7 },
    { name: "Gyumri", code: 801, countryId: 7 },
  
    // States for Australia (countryId: 8)
    { name: "New South Wales", code: 900, countryId: 8 },
    { name: "Victoria", code: 901, countryId: 8 },
    { name: "Queensland", code: 902, countryId: 8 },
  
    // States for Austria (countryId: 9)
    { name: "Vienna", code: 1000, countryId: 9 },
    { name: "Salzburg", code: 1001, countryId: 9 },
    { name: "Tyrol", code: 1002, countryId: 9 },
  
  ];

  export const city = [
    // Cities for the state of Kerala (stateId: 100)
    { name: "Alappuzha", code: 10001, countryId: 0, stateId: 100 },
    { name: "Kochi", code: 10002, countryId: 0, stateId: 100 },
    { name: "Thiruvananthapuram", code: 10003, countryId: 0, stateId: 100 },
    { name: "Kollam", code: 10004, countryId: 0, stateId: 100 },
    { name: "Kottayam", code: 10005, countryId: 0, stateId: 100 },
  
    // Cities for the state of Maharashtra (stateId: 101)
    { name: "Mumbai", code: 10101, countryId: 0, stateId: 101 },
    { name: "Pune", code: 10102, countryId: 0, stateId: 101 },
    { name: "Nagpur", code: 10103, countryId: 0, stateId: 101 },
    { name: "Nashik", code: 10104, countryId: 0, stateId: 101 },
    { name: "Aurangabad", code: 10105, countryId: 0, stateId: 101 },
  
    // Cities for the state of Tamil Nadu (stateId: 102)
    { name: "Chennai", code: 10201, countryId: 0, stateId: 102 },
    { name: "Coimbatore", code: 10202, countryId: 0, stateId: 102 },
    { name: "Madurai", code: 10203, countryId: 0, stateId: 102 },
    { name: "Tiruchirappalli", code: 10204, countryId: 0, stateId: 102 },
    { name: "Salem", code: 10205, countryId: 0, stateId: 102 },
  
    // Cities for the state of Gujarat (stateId: 104)
    { name: "Ahmedabad", code: 10401, countryId: 0, stateId: 104 },
    { name: "Surat", code: 10402, countryId: 0, stateId: 104 },
    { name: "Vadodara", code: 10403, countryId: 0, stateId: 104 },
    { name: "Rajkot", code: 10404, countryId: 0, stateId: 104 },
    { name: "Gandhinagar", code: 10405, countryId: 0, stateId: 104 },
  
    // Cities for the state of Kabul (stateId: 200)
    { name: "Kabul City", code: 20001, countryId: 1, stateId: 200 },
  
    // Cities for the state of Herat (stateId: 201)
    { name: "Herat City", code: 20101, countryId: 1, stateId: 201 },
  
    // Cities for the state of Tirana (stateId: 300)
    { name: "Tirana City", code: 30001, countryId: 2, stateId: 300 },
  
    // Cities for the state of Algiers (stateId: 400)
    { name: "Algiers City", code: 40001, countryId: 3, stateId: 400 },
  
    // Cities for the state of Andorra la Vella (stateId: 500)
    { name: "Andorra la Vella City", code: 50001, countryId: 4, stateId: 500 },
  
    // Cities for the state of Luanda (stateId: 600)
    { name: "Luanda City", code: 60001, countryId: 5, stateId: 600 },
  
    // Cities for the state of Buenos Aires (stateId: 700)
    { name: "Buenos Aires City", code: 70001, countryId: 6, stateId: 700 },
  
    // Cities for the state of Yerevan (stateId: 800)
    { name: "Yerevan City", code: 80001, countryId: 7, stateId: 800 },
  
    // Cities for the state of New South Wales (stateId: 900)
    { name: "Sydney", code: 90001, countryId: 8, stateId: 900 },
    { name: "Newcastle", code: 90002, countryId: 8, stateId: 900 },
  
    // Cities for the state of Vienna (stateId: 1000)
    { name: "Vienna City", code: 100001, countryId: 9, stateId: 1000 },
  ];
