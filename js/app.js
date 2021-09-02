const searchTemp = () => {
    const input = document.getElementById('input-field')
    const inputValue = input.value;
    input.value = ""
    const apiKey = 'd8eb68aabd7746422fc720279aead2e5'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => showTemp(data))
}
const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}
const showTemp = temp => {
    setInnertext('city-name', temp.name);
    setInnertext('temp-deg', temp.main.temp)
    setInnertext('weather', temp.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const tempIcon = document.getElementById('temp-icon');
    tempIcon.setAttribute('src', url)
}