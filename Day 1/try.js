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

