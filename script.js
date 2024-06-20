function checkGrade(evt) {
  var grade =parseFloat(evt.currentTarget.value);

  if (grade > 100 || grade < 0) {
    console.log("Wrong value")
    evt.currentTarget.style.color = "red"
  } else {
    console.log("Correct Value")
    evt.currentTarget.style.color = "black"

  }

}

function CalculateGrade() {
  var PartGrade = parseInt(document.getElementById("PartGrade").value)
  var Participation_Percentage = parseFloat(document.getElementById("Participation_Percentage").innerHTML)
  if (PartGrade < 0 || PartGrade > 100) {
    document.getElementById("PartGrade").value = 0;
    document.getElementById("PartGrade").style = "background-color:red"
  } else {
    var Curr_Participation = Participation_Percentage * PartGrade/100
  }
  
  


  var HWGrade = parseInt(document.getElementById("HWGrade").value)
  var HW_Percentage = parseFloat(document.getElementById("HW_Percentage").innerHTML)
  var Curr_HW = HW_Percentage * HWGrade/100
  
  var M1Garde = parseInt(document.getElementById("M1Garde").value)
  var PM1_Percentage = parseFloat(document.getElementById("PM1_Percentage").innerHTML)
  var Curr_PM1 = PM1_Percentage * M1Garde/100

  var M2Grade = parseInt(document.getElementById("M2Grade").value)
  var PM2_Percentage = parseFloat(document.getElementById("PM2_Percentage").innerHTML)
  var Curr_PM2 = PM2_Percentage * M2Grade/100

  var FProjectGrade = parseInt(document.getElementById("FProjectGrade").value)
  var FProject_Percentage = parseFloat(document.getElementById("FProject_Percentage").innerHTML)
  var Curr_FProject = FProject_Percentage * FProjectGrade/100 

  var Current_Grade = Curr_Participation + Curr_HW + Curr_PM1 + Curr_PM2 + Curr_FProject

  document.getElementById("total_grade").innerHTML = Current_Grade
}
  
