function workingHours(input) {

    let houer = Number(input[0]);
    let dayOfWeek = input[1];

    if (houer >= 10 && houer <= 18) {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open"); break;
            case "Sunday":
                console.log("closed"); break
        }
    } else {
        console.log("closed");
    }
}
workingHours(["11", "Sunday"]);