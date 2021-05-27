import KYC from '../../src/KYC';
const { checkYourKYC } = new KYC();
import { expect } from 'chai';
import axios from 'axios';
import { constants } from '../../src/utils/constants';
import { validationError } from '../../src/validators';
import { testCases } from './kycTestCases';
async function kycCheckApi() {
    const config = {
        headers: { Authorization: constants.CF_APITOKEN }
    };
    return await axios.post(`${constants.BASEURL}/driverlicence`, constants.DUMMY_KYC_API_BODY, config);
}
describe('#kycCheckAPI()', () => {
    let VRCodeAPIG;
    it('Should third party API valid, running and token is valid', async () => {
        try {
            const {
                data: { verificationResultCode: VRCodeAPI },
                status
            } = await kycCheckApi();
            VRCodeAPIG = VRCodeAPI;
            console.log(`Status: ${status}`);
            expect(status).equal(200);
        } catch (error) {
            console.log(`Error: ${error.message}`);
            expect(error.status).equal(200); //to cover ERR Code 4XX
        }
    });

    it('is verificationResultCode valid', () => {
        console.log(`VRCodeAPIG: ${VRCodeAPIG}`);
        expect(constants.verificationResultCode.indexOf(VRCodeAPIG)).to.gt(-1);
    });
});
/* 
Note : @joi/date and joi has a test-coverage of 100% we have no need to write test case for that but still we are testing for ref :)
So we are skipping basic required unit test
*/
describe('#kycValidationTest()', () => {
    /* 
    validationError(validationObject:any,method)
    */
    const validationSET = testCases; 
    validationSET.forEach(set => {
        it(set.message, () => {
            let result = validationError(set.testCase, 'checkKYC');
            expect(result).equal(false);
        });
    });
});
