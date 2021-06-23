export default function getTestState(test) {
    
    if(testComplete && test.time_test && test.time_evaluation && test.test_result ) {
        return "finished";
    } else if(testComplete) {
        return "ready";
    } else {
        return "uncomplete"
    }
    

}

function testComplete(test) {
    if(
        test.name && 
        test.firstname &&
        test.street &&
        test.zip &&
        test.city &&
        test.phone &&
        test.dob &&
        test.date &&
        //Eine Benachrichtigungsvariante muss ausgewählt werden
        (test.certificate_offline || test.certificate_email || test.certificate_online || 
            test.certificate_cwa_personal || test.certificate_cwa_anonym) &&
        test.test_manufacturer_id &&
        test.time_reception 
        ) 
    {
        return true
    } else {
        return false;
    }
}