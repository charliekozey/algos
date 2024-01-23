// first attempt:

function romanToInt(str) {
    let output = 0
    const numeralMap = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    const subtractorsMap = {
      "I": ["V", "X"],
      "X": ["L", "C"],
      "C": ["D", "M"]
    }
  
    for (let i=0; i < str.length; i++) {
      const value = numeralMap[str[i]]
  
      if (Object.keys(subtractorsMap).includes(str[i]) && subtractorsMap[str[i]].includes(str[i + 1])) {
        output -= value
      } else {
        output += value
      }
    }
  
    return output
  };
  