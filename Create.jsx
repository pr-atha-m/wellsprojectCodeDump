import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      fatherName: '',
      adhaarNumber: '',
      dateOfBirth: '',
      residentialAddress: '',
      permanentAddress: '',
      occupationType: '',
      grossAnnualIncome: '',
      sourceOfIncome: '',
      debitStatus: '',
      netBanking: false,
      errors: {}, // To store validation errors
    };
  }

  // Define validation functions for each field
  validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  validateAdhaarNumber = (adhaarNumber) => {
    const adhaarRegex = /^\d{12}$/;
    return adhaarRegex.test(adhaarNumber);
  };

  // ... Add more validation functions for other fields as needed

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // Validate email
    if (!this.validateEmail(this.state.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate phone number
    if (!this.validatePhoneNumber(this.state.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    // Validate Aadhaar number
    if (!this.validateAdhaarNumber(this.state.adhaarNumber)) {
      errors.adhaarNumber = 'Invalid Aadhaar number';
    }

    // ... Add more validations for other fields as needed

    // If there are validation errors, update the state
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // If no errors, you can proceed with form submission
      // Example: const formData = this.state;
      // Then send the formData to your API or perform other actions
      // Reset the form or redirect the user as needed
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              required
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </label>

          {/* Add the rest of the input fields and validations similarly */}
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;


// ... (previous code)

  validateGrossAnnualIncome = (income) => {
    const incomeRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    return incomeRegex.test(income);
  };

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // Validate email
    if (!this.validateEmail(this.state.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate phone number
    if (!this.validatePhoneNumber(this.state.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    // Validate Aadhaar number
    if (!this.validateAdhaarNumber(this.state.adhaarNumber)) {
      errors.adhaarNumber = 'Invalid Aadhaar number';
    }

    // Validate gross annual income
    if (!this.validateGrossAnnualIncome(this.state.grossAnnualIncome)) {
      errors.grossAnnualIncome = 'Invalid income amount';
    }

    // ... Add more validations for other fields as needed

    // If there are validation errors, update the state
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // If no errors, you can proceed with form submission
      // Example: const formData = this.state;
      // Then send the formData to your API or perform other actions
      // Reset the form or redirect the user as needed
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* ... (previous input fields and validations) */}
          
          <label>
            Gross Annual Income:
            <input
              type="text"
              name="grossAnnualIncome"
              value={this.state.grossAnnualIncome}
              onChange={this.handleInputChange}
              required
            />
            {errors.grossAnnualIncome && (
              <span className="error">{errors.grossAnnualIncome}</span>
            )}
          </label>

          <label>
            Source of Income:
            <input
              type="text"
              name="sourceOfIncome"
              value={this.state.sourceOfIncome}
              onChange={this.handleInputChange}
              required
            />
            {errors.sourceOfIncome && (
              <span className="error">{errors.sourceOfIncome}</span>
            )}
          </label>

          <label>
            Debit Status:
            <select
              name="debitStatus"
              value={this.state.debitStatus}
              onChange={this.handleInputChange}
              required
            >
              <option value="">Select Debit Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.debitStatus && (
              <span className="error">{errors.debitStatus}</span>
            )}
          </label>

          <label>
            Net Banking:
            <input
              type="checkbox"
              name="netBanking"
              checked={this.state.netBanking}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;

