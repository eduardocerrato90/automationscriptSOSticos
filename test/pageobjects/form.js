export default class Form_Page {
	get emailAddress() { return $("[name='email']");}
	get name() { return $("[name='name']");}
	get cedula() { return $("[name='docId']");}
	get telefono() { return $("[name='phone']");}
    get provincia() { return $("#province");}
    get canton() { return $("#canton");}
    get distrito() { return $("#district");}
    get otraSenas() { return $("[name='address']");}
    get centro() { return $('.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd');}
    get estado() { return $("#status");}
    get necesidades() { return $("[name='necesities']");}
    get submitButton() { return $("[type='submit']");}

    submit() {
        this.submitButton.click();
    }

	get successfulSubmissionHeader() { return $("#contact_reply h1");}
    get unsuccessfulSubmissionHeader() { return $("body");}
    
};