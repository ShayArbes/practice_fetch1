async function fetchData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    if (response.ok) {
      const data = await response.json();
      return data.results[0];
    } else {
      throw new Error("error1");
    }
  } catch (error) {
    return error;
  }
}

const createNewPerson = (person) => {
const userInformation = document.querySelector("#user_information");
userInformation.innerHTML ="";
  console.log(person);
  const name = document.createElement("h2");
  name.innerText ="name: " + person.name.first;
  const emil = document.createElement("h2");
  emil.innerText ="emil: " + person.email;
  const age = document.createElement("h2");
  age.innerText ="age: " + person.dob.age;
  const img = document.createElement("img");
  img.src = person.picture.medium;

  userInformation.appendChild(name);
  userInformation.appendChild(emil);
  userInformation.appendChild(age);
  userInformation.appendChild(img);

};

const getRandomPerson = async () => {
  const randomPerson = await fetchData();
  createNewPerson(randomPerson);
};

const init = () => {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", getRandomPerson);
};

init();
