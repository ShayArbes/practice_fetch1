async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      throw new Error("error1");
    }
  } catch (error) {
    return error;
  }
}

const createNewPerson = (person) => {
  const userInformation = document.querySelector("#user_information");
  console.log(person);
  const name = document.createElement("h2");
  name.innerText = "name: " + person.name.first;
  const emil = document.createElement("h2");
  emil.innerText = "emil: " + person.email;
  const age = document.createElement("h2");
  age.innerText = "age: " + person.dob.age;
  const img = document.createElement("img");
  img.src = person.picture.medium;

  userInformation.appendChild(name);
  userInformation.appendChild(emil);
  userInformation.appendChild(age);
  userInformation.appendChild(img);
};

const getRandomPerson = async () => {
  const userInformation = document.querySelector("#user_information");
  userInformation.innerHTML = "";
  const randomPerson = await fetchData("https://randomuser.me/api");
  createNewPerson(randomPerson[0]);
};

const getFiveMales = async () => {
  const userInformation = document.querySelector("#user_information");
  userInformation.innerHTML = "";
  const randomPerson = await fetchData(
    "https://randomuser.me/api/?results=5&gender=male"
  );
  randomPerson.forEach((element) => {
    createNewPerson(element);
  });
};

const init = () => {
  const btn = document.querySelector("#btn");
  const btnFiveMales = document.querySelector("#btnFiveMales");
  btn.addEventListener("click", getRandomPerson);
  btnFiveMales.addEventListener("click", getFiveMales);
};

init();
