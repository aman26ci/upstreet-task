import KYC from './KYC';
import { constants } from './utils/constants';
const kyc = new KYC();
// Midlle Name is optional you can skip
kyc.checkYourKYC(constants.DUMMY_KYC_API_BODY);
