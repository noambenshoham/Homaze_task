const someMysticMethod = (param) => {
  let resultVal;

  if (!param) {
    console.log("Error: some error text...");
    return "";
  }
  const splattedParam = param.split(" ");
  const amount = splattedParam.length;

  if (amount > 1) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    resultVal = [...param.matchAll(rgx)] || [];
    resultVal = (resultVal.shift()?.[1] || "") + (resultVal.pop()?.[1] || "");
  } else {
    if (param.length > 0) {
      resultVal = param.charAt(0);
    } else {
      resultVal = "";
    }
  }

  return resultVal.toUpperCase();
};

const someNewMysticMethod = (param) => {
  if (!param) {
    console.error("Error: some error text...");
    return "";
  }
  const paramHasWhiteSpaces = /\s/g.test(param);

  if (!paramHasWhiteSpaces) {
    return param.length > 0 ? param.charAt(0).toUpperCase() : "";
  }
  const rgx = new RegExp(/(\p{L}{2,})/, "gu");
  const matchedExpressions = [...param.matchAll(rgx)] || [];
  return (
    (matchedExpressions.shift()?.[1][0] || "") +
    (matchedExpressions.pop()?.[1][0] || "")
  )?.toUpperCase();
};
