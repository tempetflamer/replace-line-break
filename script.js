function onProcess() {
    const input = document.getElementById("input").value;
    const checkedRadio = document.querySelector('input[type="radio"]:checked');


    if(input.trim() && checkedRadio) {
        let numRadioInput = parseInt(checkedRadio.id.replace("radio", ""))
        let replaceValue = '\\n'

        switch(numRadioInput) {
            case 1:
                replaceValue = '\\n'
                break;
            case 2:
                replaceValue = '\\r\\n'
                break;
            case 3:
                replaceValue = '\\r'
                break;
            case 4:
                replaceValue = '<br>'
                break;
            case 5:
                replaceValue = '<br />'
                break;
            case 6:
                replaceValue = '\n\n'
                break;
            default:
                replaceValue = '\\n'
        }

        let output = "";
        output = input.trim().replace(/(?:\r\n|\r|\n)/g, replaceValue);
        document.getElementById("output").value = output;
    }

}