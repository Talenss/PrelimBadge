import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join',
  imports: [FormsModule, CommonModule],
  templateUrl: './join.html',
  styleUrls: ['./join.css'],
})
export class Join {
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    institution: ''
  };

  fullname = '';
  submittedEmail = '';
  submittedInstitution = '';
  isSubmitted = false;

  onSubmit() {
    this.fullname = `${this.formData.firstname} ${this.formData.lastname}`;
    this.submittedEmail = this.formData.email;
    this.submittedInstitution = this.formData.institution;
    this.isSubmitted = true;
    
    // Show success message
    alert('Thank you for joining our mailing list! We will keep you updated on upcoming conferences.');
    
    // Reset form after 2 seconds
    setTimeout(() => {
      this.formData = {
        firstname: '',
        lastname: '',
        email: '',
        institution: ''
      };
      this.isSubmitted = false;
    }, 2000);
  }
}
