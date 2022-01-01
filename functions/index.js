const { PDFDocument } = require('pdf-lib');
const { Storage } = require('@google-cloud/storage');
require("firebase-functions/lib/logger/compat");
const functions = require('firebase-functions');
const fs = require('fs');
const admin = require('firebase-admin');
admin.initializeApp();

const storage = new Storage();
const destination = "assets/complete.pdf";

exports.createUser = functions.firestore.document('users/{userID}/submitted_loans/{loanID}')
    .onCreate((snap, context) => {
        const formData = snap.data();
        const loanType = formData._loanType;
        loadPDF(loanType).then(pdf => {
            const form = pdf.getForm();
            const fields = form.getFields();
            for (let i = 0; i < fields.length; i++) {
                let fieldName = fields[i].getName();
                if (formData.hasOwnProperty(fieldName)) {
                    const field = form.getTextField(fieldName);
                    field.setText(formData[fieldName]);
                    console.log(fieldName + " : " + formData[fieldName]);
                }
            }
            form.flatten();
            let fName = formData.firstName + "-" + formData.lastName + "-" + formData._submittedOn + "-" + loanType;
            uploadPDF(pdf, fName);
        });

        //IF loan._loanType CONDITIONAL NEEDED

        console.log(loanType);
    });

async function loadPDF(type) {
    const source = "assets/MCAloan.pdf";
    const pdfBytes = fs.readFileSync(source);
    console.log("PDF BYTES"+pdfBytes);
    return await PDFDocument.load(pdfBytes);
}

async function uploadPDF(pdfDoc, fileName) {
    const pdfBytes = await pdfDoc.save();
    const bucket = storage.bucket('gs://us-express-finance.appspot.com');
    const file = bucket.file(fileName);
    file.save(pdfBytes, function(err) {
       if (err) {
           throw err;
       } else {
           console.log("file uploaded successfully");
       }
    });
}


/*
function loadPDF(type) {
    //if (type == '') {}

    const source = "assets/MCAloan.pdf";
    fs.readFile(source, (err, data) => {
        if (err) throw err;
        const content = data;
        processPDF(content).then(pdf => {
            const form = pdf.getForm();
            const formFields = form.getFields();
            console.log("FORM FIEELLLDDSSS" + formFields[4].getName());
        });
    });
}

async function processPDF(bytes) {
    console.log('PROCESSING PDF');
    return PDFDocument.load(bytes);
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


 */