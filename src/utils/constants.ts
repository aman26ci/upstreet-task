// For security resons tokens must be stored in .env file only (if required) 
const constants = {
    BASEURL: process.env.BASEURL || 'https://australia-southeast1-reporting-290bc.cloudfunctions.net/',
    CF_APITOKEN: process.env.CF_APITOKEN || 'Bearer 03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf'
};

export { constants };
