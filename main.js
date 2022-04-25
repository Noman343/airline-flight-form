document.getElementById("form").style.display = "none";
document.getElementById("form2").style.display = "none";
document.getElementById("form3").style.display = "none";

document
  .getElementById("inputGroupSelect01")
  .addEventListener("change", function () {
    console.log("You selected: ", this.value);

    switch (this.value) {
      case "1":
        document.getElementById("form").style.display = "block";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";
        break;
      case "2":
        document.getElementById("form").style.display = "none";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form3").style.display = "none";
        break;
      case "3":
        document.getElementById("form").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "block";
    }
  });

function cities(id1, id2) {
  var city1 = document.getElementById(id1).value;
  var city2 = document.getElementById(id2).value;
  if (city1 == city2 || city2 == city1) {
    alert("You enetred tha same cities!");
    document.getElementById(id2).value = "";
  } else {
    console.log("Alright");
  }
  var auto = document.getElementById("cityTo3rd").value;
  document.getElementById("secondFlightCityFrom").value = auto;
}

function dateChecker(id1, id2) {
  var firstDate = document.getElementById(id1).value;
  var ReturnDate = document.getElementById(id2).value;
  if (firstDate == "" || ReturnDate == "") {
    alert("Please enter a date");
  } else if (firstDate == ReturnDate) {
    alert("You enetred tha same dates!");
    document.getElementById("roundTripReturnDate").value = "";
  } else {
    console.log("Alright");
  }
}

function addThirdFlight() {
 var form = document.getElementById('thirdFlight');
    form.style.display = "block";
    document.getElementById("firstAddFlightBtn").style.display = "none";
}

function addFourthFlight() {
    var form = document.getElementById('fourthFlight');
    form.style.display = "block";
    document.getElementById("fourthFlightFormBtn").style.display = "none";
}

function addFifthFlight() {
    var form = document.getElementById('fifthFlight');
    form.style.display = "block";
    document.getElementById("fifthFlightFormBtn").style.display = "none";
}

function addSixthFlight() {
    var form = document.getElementById('sixthFlight');
    form.style.display = "block";
    document.getElementById("sixthFlightFormBtn").style.display = "none";

}

//  INFO INFO BOXEX VALUES 

document.getElementById("mulyiCityFormSubmitBtn").addEventListener("click", function () {

    document.getElementById("1stflightInfoBox").style.display = "block";

    var firsstFlightFirstCityName = document.getElementById("cityFrom3rd").value;
    document.getElementById("1stFlightFirstCityCol").innerHTML = firsstFlightFirstCityName;
    var firsstFlightsecondCityName = document.getElementById("cityTo3rd").value;
    document.getElementById("1stFlightDecondCityCol").innerHTML = firsstFlightsecondCityName;
    var firstFlightDate = document.getElementById("multiCityFirstFlightDate").value;
    document.getElementById("1stFlightDateCol").innerHTML = firstFlightDate.toString();

    document.getElementById("2ndFlightInfoBox").style.display = "block";
    var secondFlightfirstCityName = document.getElementById("secondFlightCityFrom").value;
    document.getElementById("2ndFlightFirstCityCol").innerHTML = secondFlightfirstCityName;
    var secondFlightsecondCityName = document.getElementById("secondFlightCityTo").value;
    document.getElementById("2ndFlightDecondCityCol").innerHTML = secondFlightsecondCityName;
    var secondFlightDate = document.getElementById("multiCitySecondFlightDate").value;
    document.getElementById("2ndFlightDateCol").innerHTML = secondFlightDate.toString();

    var thirdFlightCityFrom = document.getElementById("thirdFlightCityFrom").value;
    if ( thirdFlightCityFrom !== "") {
        document.getElementById("3rdFlightInfoBox").style.display = "block";
        document.getElementById("3rdFlightFirstCityCol").innerHTML = thirdFlightCityFrom;
        var thirdFlightCityTo = document.getElementById("thirdFlightCityTo").value;
        document.getElementById("3rdFlightDecondCityCol").innerHTML = thirdFlightCityTo;
        var thirdFlightDate = document.getElementById("multiCityThirdFlightDate").value;
        document.getElementById("3rdFlightDateCol").innerHTML = thirdFlightDate.toString();
    } else {
        document.getElementById("thirdFlightCityFrom").style.display = "none";
    }

    var fourthFlightCityFrom = document.getElementById("fourthFlightCityFrom").value;
    if ( fourthFlightCityFrom !== "") {
        document.getElementById("4thFlightInfoBox").style.display = "block";
        document.getElementById("4thFlightFirstCityCol").innerHTML = fourthFlightCityFrom;
        var fourthFlightCityTo = document.getElementById("fourthFlightCityTo").value;
        document.getElementById("4thFlightDecondCityCol").innerHTML = fourthFlightCityTo;
        var fourthFlightDate = document.getElementById("multiCityFourthFlightDate").value;
        document.getElementById("4thFlightDateCol").innerHTML = fourthFlightDate.toString();
    } else {
        document.getElementById("fourthFlightCityFrom").style.display = "none";
    }

    var fifthFlightCityFrom = document.getElementById("fifthFlightCityFrom").value;
    if ( fifthFlightCityFrom !== "") {
        document.getElementById("5thFlightInfoBox").style.display = "block";
        document.getElementById("5thFlightFirstCityCol").innerHTML = fifthFlightCityFrom;
        var fifthFlightCityTo = document.getElementById("fifthFlightCityTo").value;
        document.getElementById("5thFlightDecondCityCol").innerHTML = fifthFlightCityTo;
        var fifthFlightDate = document.getElementById("multiCityFifthFlightDate").value;
        document.getElementById("5thFlightDateCol").innerHTML = fifthFlightDate.toString();
    } else {
        document.getElementById("fifthFlightCityFrom").style.display = "none";
    }

    var sixthFlightCityFrom = document.getElementById("sixthFlightCityFrom").value;
    if ( sixthFlightCityFrom !== "") {
        document.getElementById("6thFlightInfoBox").style.display = "block";
        document.getElementById("6thFlightFirstCityCol").innerHTML = sixthFlightCityFrom;
        var sixthFlightCityTo = document.getElementById("sixthFlightCityTo").value;
        document.getElementById("6thFlightDecondCityCol").innerHTML = sixthFlightCityTo;
        var sixthFlightDate = document.getElementById("multiCitySixthFlightDate").value;
        document.getElementById("6thFlightDateCol").innerHTML = sixthFlightDate.toString();
    } else {
        document.getElementById("sixthFlightCityFrom").style.display = "none";
    }


});



//  This is for date picker
$(function () {
  var beforeShowFunction = function (input, inst) {
    setTimeout(function () {
      var buttonPane = $(input)
        .datepicker("widget")
        .find(".ui-datepicker-buttonpane");
      var btn = $(
        '<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">+</button>'
      );
      btn.bind("click", function (e) {
        if ($(input).datepicker("getDate") == null) return;
        var currentDate = new Date($(input).datepicker("getDate"));
        var newDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        $(input).datepicker("setDate", newDate);
        currentDate = new Date($(input).datepicker("getDate"));
        if (currentDate.getDate() != newDate.getDate()) {
          alert("Unavailabled!");
        }
        $(input).datepicker("hide");
        $(input).datepicker("show");
      });
      btn.appendTo(buttonPane);
      var btnMinus = $(
        '<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">-</button>'
      );
      btnMinus.bind("click", function (e) {
        if ($(input).datepicker("getDate") == null) return;
        var currentDate = new Date($(input).datepicker("getDate"));
        var newDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
        $(input).datepicker("setDate", newDate);
        currentDate = new Date($(input).datepicker("getDate"));
        if (currentDate.getDate() != newDate.getDate()) {
          alert("Unavailabled!");
        }
        $(input).datepicker("hide");
        // force call show to see +, - buttons
        $(input).datepicker("show");
      });
      btnMinus.appendTo(buttonPane);
    }, 1);
  };

  $(".datepicker").datepicker({
    minDate: 1,
    maxDate: "+1M +10D",
    showButtonPanel: true,
    beforeShow: beforeShowFunction,
  });
  // Below fix today button
  jQuery.datepicker._gotoToday = function (id) {
    var target = jQuery(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, "gotoCurrent") && inst.currentDay) {
      inst.selectedDay = inst.currentDay;
      inst.drawMonth = inst.selectedMonth = inst.currentMonth;
      inst.drawYear = inst.selectedYear = inst.currentYear;
    } else {
      var date = new Date();
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      this._setDateDatepicker(target, date);
      this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
    // force call show to see +, - buttons
    $(".datepicker").datepicker("show");
  };
});
