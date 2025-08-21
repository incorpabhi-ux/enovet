# Google Apps Script Setup Guide (No API Required)

This guide will help you connect your contact form to Google Sheets using Google Apps Script - no API setup required!

## What is Google Apps Script?

Google Apps Script is a free JavaScript platform that runs in Google's cloud. It can:
- Save data to Google Sheets
- Send email notifications
- Process form submissions
- All without any API setup!

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions"
4. Copy the Sheet ID from the URL:
   - URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
   - Copy the `YOUR_SHEET_ID` part

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Name it "Contact Form Handler"
4. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheetId = 'YOUR_SHEET_ID_HERE'; // Replace with your sheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if headers exist, if not create them
    const headers = sheet.getRange(1, 1, 1, 9).getValues()[0];
    if (headers[0] !== 'Timestamp') {
      const headerRow = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Company',
        'Service Interest',
        'Budget',
        'Message'
      ];
      sheet.getRange(1, 1, 1, 9).setValues([headerRow]);
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.budget,
      data.message
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Optional: Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  try {
    // Replace with your email address
    const recipientEmail = 'your-email@gmail.com';
    
    const subject = 'New Contact Form Submission - ' + data.firstName + ' ' + data.lastName;
    
    const body = `
      New contact form submission received:
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Company: ${data.company || 'Not provided'}
      Service: ${data.service}
      Budget: ${data.budget || 'Not specified'}
      
      Message:
      ${data.message}
      
      Timestamp: ${data.timestamp}
    `;
    
    MailApp.sendEmail(recipientEmail, subject, body);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    timestamp: new Date().toLocaleString(),
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Test Company',
    service: 'Web Development',
    budget: '$10,000 - $25,000',
    message: 'This is a test submission'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
```

## Step 3: Configure the Script

1. **Replace the Sheet ID**: 
   - Find `'YOUR_SHEET_ID_HERE'` in the code
   - Replace it with your actual sheet ID from Step 1

2. **Set up email notifications** (optional):
   - Find `'your-email@gmail.com'` in the code
   - Replace it with your email address

## Step 4: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for now, we'll secure it later)
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the next step

## Step 5: Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add this line:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbw6Lq8NLrV-EfuukbURa-x5myBqKunf4aSjXe2BhsJYcCXAZ37nrVaZc2e1zfEw4jxR/exec
```

3. Replace `https://script.google.com/macros/s/AKfycbw6Lq8NLrV-EfuukbURa-x5myBqKunf4aSjXe2BhsJYcCXAZ37nrVaZc2e1zfEw4jxR/exec` with the URL you copied in Step 4

## Step 6: Test the Integration

1. Restart your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see a new row with the submission data
5. Check your email - you should receive a notification (if configured)

## Step 7: Secure the Web App (Optional)

1. Go back to your Google Apps Script project
2. Click "Deploy" > "Manage deployments"
3. Click the edit icon (pencil)
4. Change "Who has access" to "Anyone with Google account"
5. Click "Update"

## Benefits of Google Apps Script

✅ **No API setup required**
✅ **No service accounts needed**
✅ **No environment variables for Google credentials**
✅ **Free email notifications included**
✅ **Easy to customize and extend**
✅ **Works with any Google account**

## Sheet Structure

Your Google Sheet will automatically have these columns:

| Timestamp | First Name | Last Name | Email | Phone | Company | Service Interest | Budget | Message |
|-----------|------------|-----------|-------|-------|---------|------------------|--------|---------|
| 1/15/2024, 10:30:00 AM | John | Doe | john@example.com | +1 (555) 123-4567 | ABC Corp | Web Development | $10,000 - $25,000 | I need a new website... |

## Troubleshooting

### Common Issues:

1. **"Web App URL not configured" error**
   - Check that `GOOGLE_APPS_SCRIPT_URL` is set correctly in `.env.local`

2. **"Script not found" error**
   - Make sure you deployed the script as a Web App
   - Check that the URL is correct

3. **"Permission denied" error**
   - Make sure "Who has access" is set to "Anyone" or "Anyone with Google account"
   - Try redeploying the script

4. **Data not appearing in sheet**
   - Check the script logs in Google Apps Script
   - Make sure the sheet ID is correct
   - Verify the script has permission to access the sheet

5. **Email notifications not working**
   - Check that you replaced the email address in the script
   - Make sure the script has permission to send emails

### Testing the Script:

1. In Google Apps Script, click "Run" > "testScript"
2. Check the execution log for any errors
3. Verify that test data appears in your sheet

## Customization Options

### Add More Features:

1. **Email templates**: Customize the email notification format
2. **Data validation**: Add more validation in the script
3. **Multiple sheets**: Save to different sheets based on service type
4. **Slack notifications**: Send notifications to Slack
5. **Data processing**: Calculate statistics or generate reports

### Example: Custom Email Template

```javascript
function sendEmailNotification(data) {
  const recipientEmail = 'your-email@gmail.com';
  const subject = `New ${data.service} Inquiry from ${data.firstName} ${data.lastName}`;
  
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${data.phone || 'Not provided'}</td></tr>
      <tr><td><strong>Company:</strong></td><td>${data.company || 'Not provided'}</td></tr>
      <tr><td><strong>Service:</strong></td><td>${data.service}</td></tr>
      <tr><td><strong>Budget:</strong></td><td>${data.budget || 'Not specified'}</td></tr>
    </table>
    <h3>Message:</h3>
    <p>${data.message}</p>
    <p><em>Received at: ${data.timestamp}</em></p>
  `;
  
  MailApp.sendEmail(recipientEmail, subject, '', { htmlBody: htmlBody });
}
```

## Production Deployment

When deploying to production:

1. Add the `GOOGLE_APPS_SCRIPT_URL` environment variable to your hosting platform
2. Test the form submission in production
3. Consider securing the Web App URL if needed

## Support

If you encounter issues:
1. Check the Google Apps Script execution logs
2. Verify the Web App URL is correct
3. Test the script manually using the test function
4. Check that your Google Sheet is accessible

**This method is much simpler than the API approach and requires no special setup!** 