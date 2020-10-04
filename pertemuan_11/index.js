//Arrow function 

// function driversLicence6(passedTest) {
    //     const firstName = 'Valent';
    //     let yearOfBirth;
    
    //     if (passedTest) {
    //         yearOfBirth = 2001;
    //     }
    //     console.log(firstName + ', born in ' + yearOfBirth +
    //         ', is now offically allowed to drive a car');
    // }
    // driversLicence6(true);
    
    // let i = 23;
    
    // for (let i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    
    // console.log(i);
    

//  Exercise
//  convert to ES6 Syntax

const yearUntilRetirement = (year,firstName) => {
    let age =28;
    const retirement=65-age;
    if(retirement > 0){
      console.log(`${firstName} retired in ${retirement} years.`);
    }
    else{
      console.log(`${firstName} has already retired`);
    }
  }
  yearUntilRetirement(2035,'andi');