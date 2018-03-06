import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {

  mailForm: FormGroup;
  formSuccess: boolean;
  //pubkey-c1000477ab39defc8fc8960d5b65f9b4

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mailForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  isFieldValid(field: string) {
    return !this.mailForm.get(field).valid && this.mailForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.mailForm);
    if (this.mailForm.valid) {
      this.formSuccess = true;
      this.mailForm.reset();
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.mailForm);
      this.formSuccess = false;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.mailForm.reset();
    this.formSuccess = false;
  }

  /*
  public static ClientResponse SendSimpleMessage() {
    Client: client = Client.create();
    client.addFilter(new HTTPBasicAuthFilter("api", "key-fa767737be002679eb3135bcb47b54ea"));
    WebResource: webResource = client.resource("https://api.mailgun.net/v3/sandboxd11bba1074094a908dfca88d6500518e.mailgun.org/messages");
    MultivaluedMapImpl: formData = new MultivaluedMapImpl();
    formData.add("from", "Mailgun Sandbox <postmaster@sandboxd11bba1074094a908dfca88d6500518e.mailgun.org>");
    formData.add("to", "Dries Kesteloot <kesteloot.dries@gmail.com>");
    formData.add("subject", "Hello Dries Kesteloot");
    formData.add("text", "Congratulations Dries Kesteloot, you just sent an email with Mailgun!  You are truly awesome!");
    return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
    post(ClientResponse.class, formData);
  }
  */

}
