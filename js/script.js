// Console check
console.log("JS OK");

// Operations

// Alert message
alert("In questa pagina verranno utilizzati i tuoi dati per generare una password fittizia");

// Name Question
const userNameVar= prompt("Qual'è il tuo nome?", "George")
console.log(userNameVar);

// Surnamer Question
const userSurnameVar= prompt("Qual'è il tuo cognome?", "Lembo")
console.log(userSurnameVar);

// Color Question
const userColorVar= prompt("Qual'è il tuo colore preferito?", "Verde")
console.log(userColorVar);

// Var Compound
const userPwdResult = userNameVar + userSurnameVar + userColorVar + "21"
console.log(userPwdResult);

// MOD Show Answer
document.getElementById("pwdResult").innerText= userPwdResult