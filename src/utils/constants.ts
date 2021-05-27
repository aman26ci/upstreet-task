// For security resons tokens must be stored in .env file only (if required)
const constants = {
    BASEURL: process.env.BASEURL || 'https://australia-southeast1-reporting-290bc.cloudfunctions.net/',
    CF_APITOKEN: process.env.CF_APITOKEN || 'Bearer 03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf',
    DUMMY_KYC_API_BODY: {
        birthDate: '2001-01-01',
        givenName: 'James',
        familyName: 'Robert',
        licenceNumber: '94977000',
        stateOfIssue: 'NSW',
        expiryDate: '2020-01-01',
        
    },
    verificationResultCode: ['Y', 'N', 'D', 'S'],
    DLAcceptedStates: ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT']
};

export { constants };
