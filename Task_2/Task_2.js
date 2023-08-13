async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("error1");
      }
    } catch (error) {
      return error;
    }
  }

  const showJoke = async () => {
    const jockInformation = document.querySelector("#jock");
    jockInformation.innerHTML = "";
    const joke = await fetchData("https://api.humorapi.com/jokes/search?api-key=5990c10d6c9f4fb68d61a8d9383e85f3");
    const h2 = document.createElement("h2")
    h2.innerText = joke.jokes[0].joke;
    jockInformation.appendChild(h2);
  };

  showJoke();