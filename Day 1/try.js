//Fizz Buzz Challenge: 0'dan 100'e kadar ekrana yazdır,
// 3'ün ve 5'in katları olduğunda 3:Fizz 5:Buzz yazsın 
//eğer 3 ve 5 in katıysa FizzBuzz yazsın.

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else{
        console.log(i);
    }
}
//Cagetory'den sadece retail olanları .filter ile alma:
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1996, end: 2003 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2003, end: 2014 },
];
const retailCompanies = companies.filter((company) => company.category === 'Retail');
// console.log(retailCompanies);
//companyden sadece 1980 üstlerini ve 2005 altını almak için ise
const getCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
//console.log(getCompanies);
//10 yıldan daha uzun süredir çalışan şirketleri yazdırmak için ise:
const longCompanies = companies.filter(
    (company) => (company.end - company.start >= 10)
);
console.log(longCompanies);

//'İnsanlar' dizisini alın ve 25 yaş ve altındaki tüm kişilerin YALNIZCA 'isim' ve 'e-posta' özelliklerine 
//sahip nesneleri saklayan 'gençİnsanlar' adında bir dizi oluşturun. `name` özelliğinin adı ve soyadı bulunmalıdır.
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];
  //Çözüm:
//const youngPeople = people.filter((person) => person.age <= 25); ilk önce şu şekilde yaşları 25 ise çıktı alırız.
const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name:person.firstName + ' ' + person.lastName,
        email: person.email,
    }));
;
console.log(youngPeople);

//Dizideki tüm pozitif sayıları toplayın.
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
    .filter((number) => number > 0) //filter ile 0 dan büyük sayıların çıktısını aldık.
    .reduce((acc, cur) => acc + cur, 0); /*reduce ile topluyoruz toplamak için reducenin içine acc ve cur yazmalıyız ve 
                                            başlangıç değeri ise 0 olmalıdır*/
console.log(positiveSum); // 79

//Her sözcüğün ilk harfi büyük olacak şekilde, 
//"word" dizisindeki sözcüklerle "capitalizedWords" 
//adında yeni bir dizi oluşturun.
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
);
console.log(capitalizedWords);

