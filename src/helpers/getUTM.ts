const getUTM = () => {
  const url = new URL(window.location.href);

  let data = null;

  const getObjectFromUrlSearch = (string: string[]) => {
    const temp: { [x: string]: string }[] = [];
    string.forEach((item) => {
      let arr = item.split("=");
      temp.push({ [arr[0]]: arr[1] });
    });
    const data = temp.reduce((r, c) => Object.assign(r, c), {});

    return data;
  };

  if (url.search !== "" && url.search.indexOf("&") !== -1) {
    let searchString = url.search.slice(1).split("&");
    data = getObjectFromUrlSearch(searchString);
  } else if (url.search !== "" && url.search.indexOf("&amp") !== -1) {
    let searchString = url.search.slice(1).split("&amp;");
    data = getObjectFromUrlSearch(searchString);
  }

  if (data) {
    window.localStorage.setItem("utmData", JSON.stringify(data));
  }
};

export default getUTM;
