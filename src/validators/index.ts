import BaseJoi from 'joi';
import joiDate from '@joi/date';
const Joi = BaseJoi.extend(joiDate);

function validationObj(method: string): any {
    switch (method) {
        case 'checkKYC': {
            return Joi.object({
                birthDate: Joi.date().format('YYYY-MM-DD').utc(),
                givenName: Joi.string().max(100).required(),
                middleName: Joi.string().max(100),
                familyName: Joi.string().max(100).required(),
                licenceNumber: Joi.string().required(),
                stateOfIssue: Joi.string().valid('NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT').required(),
                expiryDate: Joi.date().format('YYYY-MM-DD').utc()
            });
        }
    }
}
function validationError(schemaObj, method: string): boolean {
    const dataValidate = validationObj(method).validate(schemaObj);
    if (dataValidate.error) {
        console.log({ message: dataValidate.error['details'][0]['message'] });
        return true;
    }
    return false;
}
export { validationError };
