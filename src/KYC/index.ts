import dotenv from 'dotenv'; //it will parse .env file and add it to process.env
import axios from 'axios'; // used to call third party api
import { constants } from '../utils/constants';
import { validationError } from '../validators';
dotenv.config();
export default class KYC {
    private async checkKYC(
        birthDate: string,
        givenName: string,
        familyName: string,
        licenceNumber: string,
        stateOfIssue: string,
        expiryDate: string,
        middleName?
    ) {
        let body = { birthDate, givenName, familyName, licenceNumber, stateOfIssue, expiryDate };
        body['middleName'] = middleName || ' ';
        const config = {
            headers: { Authorization: constants.CF_APITOKEN }
        };
        // if validation error is there that handled in validation file
        if (validationError(body, 'checkKYC')) return false;
        try {
            const result = await axios.post(`${constants.BASEURL}driverlicence`, body, config);
            const { verificationResultCode } = result.data;
            if (verificationResultCode) {
                if (verificationResultCode === 'Y') return { kycResult: true };
                if (verificationResultCode === 'N') return { kycResult: false };
                if (verificationResultCode === 'D' || verificationResultCode === 'S') {
                    throw { code: verificationResultCode, message: 'Document Error' };
                }
            }
        } catch (error) {
            return error;
        }
    }
    //this function is created just to log the result .. :)
    async checkYourKYC(
        birthDate: string,
        givenName: string,
        familyName: string,
        licenceNumber: string,
        stateOfIssue: string,
        expiryDate: string,
        middleName?
    ) {
        let result = await this.checkKYC(birthDate, givenName, familyName, licenceNumber, stateOfIssue, expiryDate, middleName);
        result = result || '';
        console.log(result);
    }
}

