var aqiData = {

};

function addAqiData() {
    var cityInput = document.getElementById('aqi-city-input').value.trim();
    if(!cityInput || cityInput.length === 0) {
        alert("must input the city");
        return;
    }

    var valueInput = document.getElementById('aqi-value-input').value.trim();
    if(!isInteger(valueInput)) {
        alert('must be integer');
        return;
    }

    aqiData[cityInput] = Number(valueInput);
    rendAqiList();
}

function isInteger(value) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return true;
    return false;
}

function delAqiData(city) {
    console.log("del data");
    console.log('city >>> ' + city);
    delete aqiData[city];
}

function addBtnHandle() {
  var addBtn = document.getElementById('add-btn');
  addBtn.onclick = function() {addAqiData()};
}

function rendAqiList() {
    var table = document.getElementById('aqi-table');
    while(table.hasChildNodes()) {
      table.removeChild(table.lastChild);
    }

    var trElement = document.createElement('tr');
    var tdCity = document.createElement('td');
    tdCity.innerHTML = '城市';
    var tdValue = document.createElement('td');
    tdValue.innerHTML = '空气质量';
    var tdBtn = document.createElement('td');
    tdBtn.innerHTML = '操作';

    trElement.appendChild(tdCity);
    trElement.appendChild(tdValue);
    trElement.appendChild(tdBtn);

    table.appendChild(trElement);


    for(x in aqiData) {
        var trElement = document.createElement('tr');

        var tdCity = document.createElement('td');
        tdCity.innerHTML = x;

        var tdValue = document.createElement('td');
        tdValue.innerHTML = aqiData[x];

        var tdBtn = document.createElement('td');
        var delBtn = document.createElement('button');
        delBtn.innerHTML = '删除';
        delBtn.onclick = function() {
          var parent = this.parentNode.parentNode;
          var cityElement = parent.firstChild;
          var city = cityElement.innerHTML;
          delBtnHandle(city);
        };
        tdBtn.appendChild(delBtn);

        trElement.appendChild(tdCity);
        trElement.appendChild(tdValue);
        trElement.appendChild(tdBtn);
        table.appendChild(trElement);

    }
}

function delBtnHandle(city) {
  delAqiData(city);
  rendAqiList();
}

function init() {
  window.onload = function() {
      addBtnHandle();
  }


}

init();
