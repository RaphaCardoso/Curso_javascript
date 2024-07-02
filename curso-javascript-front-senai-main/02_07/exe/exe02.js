const fruits = ["morango", "banana", "mamão", "pera"];

if (!fruits.includes("abacaxi")) {
    if (!fruits.includes("pera")) {
        console.log("nem pera, nem abacaxi existem no array");
    } else {
        console.log("Existe pera no array");
    }
} else {
    if (!fruits.includes("pera")) {
        console.log("Existe abacaxi no array");
    } else {
        console.log("Existe pera e abacaxi no Array");
    }
}

if (!fruits.includes("abacaxi") && !fruits.includes("pera")) {
    console.log("nem pera, nem abacaxi existem no array");
} else if (fruits.includes("abacaxi") && fruits.includes("pera")) {
    console.log("Existe pera e abacaxi no Array");
} else if (fruits.includes("abacaxi") && !fruits.includes("pera")) {
    console.log("Existe abacaxi no array");
} else if (!fruits.includes("abacaxi") && fruits.includes("pera")) {
    console.log("Existe pera no array");
}
