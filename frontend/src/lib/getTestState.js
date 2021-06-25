export default function getTestState(test) {
  if (
    testComplete(test) &&
    test.time_test &&
    test.time_evaluation &&
    test.test_result
  ) {
    return "finished";
  } else if (
    testComplete(test) &&
    test.time_test &&
    !test.time_evaluation &&
    !test.test_result &&
    getTimeDifference(test.time_test) > 900
  ) {
    return "evaluation";
  } else if (
    testComplete(test) &&
    test.time_test &&
    !test.time_evaluation &&
    !test.test_result
  ) {
    return "running";
  } else if (testComplete(test)) {
    return "ready";
  } else {
    return "uncomplete";
  }
}

function testComplete(test) {
  return (
    test.name &&
    test.firstname &&
    test.street &&
    test.zip &&
    test.city &&
    test.phone &&
    test.dob &&
    test.date &&
    //Eine Benachrichtigungsvariante muss ausgewählt werden
    (test.certificate_offline ||
      test.certificate_email ||
      test.certificate_online ||
      test.certificate_cwa_personal ||
      test.certificate_cwa_anonym) &&
    test.test_manufacturer_id &&
    test.time_reception
  );
}

function getTimeDifference(time_test, time_evaluation = null) {
  if (time_evaluation === null) {
    let date = new Date();
    time_evaluation =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  console.log("time_test", time_test);
  console.log("time_evaluation", time_evaluation);

  const date1 = ConvertToSeconds(
    !time_test || time_test == 0 ? "00:00" : time_test
  );
  const date2 = ConvertToSeconds(
    !time_evaluation || time_evaluation == 0 ? "00:00" : time_evaluation
  );

  //console.log(date1.getTime())

  console.log("difference", date2 - date1);

  return date2 - date1;
}

function ConvertToSeconds(time) {
  console.log("time", time);
  var splitTime = time.split(":");
  return splitTime[0] * 3600 + splitTime[1] * 60;
}
