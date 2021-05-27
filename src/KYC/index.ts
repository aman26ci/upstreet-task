import dotenv from 'dotenv'; //it will parse .env file and add it to process.env
import axios from 'axios'; // used to call third party api
import { constants } from '../utils/constants';
import { validationError } from '../validators';
dotenv.config();
interface kycType {
    birthDate: string;
    givenName: string;
    familyName: string;
    licenceNumber: string;
    stateOfIssue: string;
    expiryDate: string;
    middleName?: string;
}
export default class KYC {
    private async checkKYC(kycBody) {
        const config = {
            headers: { Authorization: constants.CF_APITOKEN }
        };
        // if validation error is there that handled in validation file
        if (validationError(kycBody, 'checkKYC')) return false;
        try {
            const {
                data: { verificationResultCode: VRCode }
            } = await axios.post(`${constants.BASEURL}/driverlicence`, kycBody, config);
            if (VRCode) {
                if (VRCode === 'Y') return { kycResult: true };
                if (VRCode === 'N') return { kycResult: false };
                if (VRCode === 'D' || VRCode === 'S') {
                    throw { code: VRCode, message: 'Document Error' };
                }
            }
        } catch (error) {
            return error;
        }
    }
    //this function is created just to log the result .. :)
    async checkYourKYC(kycBody: kycType) {
        let result = await this.checkKYC(kycBody);
        result = result || '';
        console.log(result);
    }
}
