class Model {
  RequestGetInvDiffReport() {
    return {
      regionCode: Array,
      storeCodes: Array,
      sDate: String,
      eDate: String
    };
  }

  RequestApplicationMail() {
    return {
      name: String,
      email: String,
      phone: String,
      subject: String,
      message: String,
      recaptcha_token: String
    };
  }
}

const model = new Model();
export const RequestGetInvDiffReport = model.RequestGetInvDiffReport();
export const RequestApplicationMail = model.RequestApplicationMail(); // <-- () ekledik

